import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const HOST = process.env.SMTP_HOST || "smtp.zoho.eu";
const PORT = Number(process.env.SMTP_PORT || 465);
const USER = process.env.SMTP_USER || "iletisim@fbmyazilim.com";
const TO = process.env.CONTACT_TO || "iletisim@fbmyazilim.com";

function esc(s: string) {
  return String(s).replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] || c
  );
}

export async function POST(req: Request) {
  let data: { name?: string; email?: string; message?: string; gotcha?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  // honeypot — bot doldurursa sessizce başarı dön
  if (data.gotcha) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Lütfen tüm alanları doldurun." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Geçerli bir e-posta girin." }, { status: 400 });
  }
  if (!process.env.SMTP_PASS) {
    console.error("SMTP_PASS missing");
    return NextResponse.json({ ok: false, error: "Sunucu yapılandırması eksik." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: PORT === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user: USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"FBM Yazılım — İletişim" <${USER}>`,
      to: TO,
      replyTo: `"${name}" <${email}>`,
      subject: "Web Sitesi İletişim Formu",
      text: `Ad: ${name}\nE-posta: ${email}\n\n${message}`,
      html:
        `<p><strong>Ad:</strong> ${esc(name)}</p>` +
        `<p><strong>E-posta:</strong> ${esc(email)}</p>` +
        `<p style="white-space:pre-wrap;margin-top:12px">${esc(message)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact send error:", err);
    return NextResponse.json({ ok: false, error: "E-posta gönderilemedi. Lütfen tekrar deneyin." }, { status: 500 });
  }
}
