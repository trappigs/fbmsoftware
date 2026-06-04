"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-serif text-lg font-medium tracking-tight"
          aria-label={brand.name}
        >
          {brand.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) =>
            item.href === "/projeler" ? (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-evergreen/20 bg-evergreen/[0.07] px-3 py-1 text-sm font-medium text-evergreen transition-colors hover:bg-evergreen/[0.12]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <a href="/#iletisim" className="btn btn-primary text-sm">
            Görüşelim
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          <span className="sr-only">Menü</span>
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-line bg-paper md:hidden ${
          open ? "max-h-[70vh]" : "max-h-0 border-transparent"
        } transition-[max-height] duration-500 ease-out`}
      >
        <nav className="shell flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl tracking-tight py-2 text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#iletisim"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Görüşelim
          </a>
        </nav>
      </div>
    </header>
  );
}
