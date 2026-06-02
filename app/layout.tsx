import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: `${brand.name} — ${brand.role}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Web uygulamaları ve SaaS ürünleri geliştiren yazılım stüdyosu. Fikirden canlı ürüne kadar tasarım, geliştirme ve büyütme.",
  keywords: [
    "yazılım",
    "SaaS",
    "web uygulaması",
    "yazılım geliştirme",
    "yazılım stüdyosu",
    brand.name,
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: brand.name,
    title: `${brand.name} — ${brand.role}`,
    description:
      "Web uygulamaları ve SaaS ürünleri geliştiren yazılım stüdyosu.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
