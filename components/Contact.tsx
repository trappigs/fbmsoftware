"use client";

import { useState, type FormEvent } from "react";
import { brand, contact } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "E-posta gönderilemedi. Lütfen tekrar deneyin."
        );
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "E-posta gönderilemedi. Lütfen tekrar deneyin."
      );
    }
  };

  const field =
    "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-evergreen focus:outline-none transition-colors";

  return (
    <section id="iletisim" className="shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {contact.description}
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                E-posta
              </div>
              <a
                href={`mailto:${brand.email}`}
                className="link-underline mt-1 inline-block font-serif text-xl text-ink"
              >
                {brand.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                  Telefon
                </div>
                <div className="mt-1 text-ink">{brand.phone}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                  Konum
                </div>
                <div className="mt-1 text-ink">{brand.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-paper-2/40 p-7 sm:p-9"
          >
            <div className="space-y-7">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.target.value }))
                }
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div>
                <label htmlFor="name" className="sr-only">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ad Soyad"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="E-posta adresiniz"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Projenizden kısaca bahsedin"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={`${field} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-9 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Gönderiliyor…" : "Gönder"}
              {status !== "sending" && <span aria-hidden="true">→</span>}
            </button>
            <p className="mt-4 text-center text-sm" aria-live="polite">
              {status === "sent" ? (
                <span className="text-evergreen">
                  Mesajınız iletildi. En kısa sürede dönüş yapacağız.
                </span>
              ) : status === "error" ? (
                <span className="text-red-600">{error}</span>
              ) : (
                <span className="text-xs text-ink-faint">
                  Formu gönderdiğinizde mesajınız doğrudan {brand.email}{" "}
                  adresine ulaşır.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
