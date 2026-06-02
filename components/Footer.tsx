import { brand, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <a
              href="/#top"
              className="font-serif text-lg font-medium tracking-tight"
            >
              {brand.name}
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              Web ve SaaS ürünleri geliştiren yazılım stüdyosu. Fikirden canlı
              ürüne.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="link-underline mt-6 inline-block text-sm text-ink"
            >
              {brand.email}
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
              Menü
            </div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
              Bağlantılar
            </div>
            <ul className="mt-4 space-y-2.5">
              {brand.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center">
          <span>
            © {brand.year} {brand.name}. Tüm hakları saklıdır.
          </span>
          <a href="#top" className="link-underline">
            Yukarı çık ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
