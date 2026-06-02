"use client";

import { useState, type FormEvent } from "react";
import { brand, contact } from "@/lib/content";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Yeni proje talebi — ${form.name || "İsimsiz"}`;
    const body = `Ad: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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

            <button type="submit" className="btn btn-primary mt-9 w-full">
              Gönder
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-4 text-center text-xs text-ink-faint">
              Form, e-posta uygulamanızı açar. Dilerseniz doğrudan{" "}
              {brand.email} adresine yazabilirsiniz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
