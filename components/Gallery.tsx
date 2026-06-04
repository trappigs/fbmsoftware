"use client";

import { useCallback, useEffect, useState } from "react";

export function Gallery({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + images.length - 1) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section className="shell py-24 sm:py-28">
      <span className="eyebrow">Galeri</span>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${name} görsel ${i + 1} — büyüt`}
            className="group relative block overflow-hidden rounded-2xl border border-line bg-evergreen/[0.06] sm:aspect-[4/3]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${name} görsel ${i + 1}`}
              loading="lazy"
              className="block w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-full"
            />
          </button>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} galeri`}
          onClick={close}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/90 p-3 backdrop-blur-sm sm:p-4"
        >
          {/* Üst: sayaç + kapat */}
          <div className="flex shrink-0 items-center justify-between pb-3">
            <span className="text-sm text-paper/70">
              {images.length > 1 ? `${index + 1} / ${images.length}` : ""}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-xl text-paper transition-colors hover:bg-paper/20"
            >
              ✕
            </button>
          </div>

          {/* Görsel — kalan alanı doldurur, her ekrana oturur */}
          <div
            className="flex min-h-0 flex-1 items-center justify-center"
            onClick={close}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt={`${name} görsel ${index + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Alt: ileri / geri */}
          {images.length > 1 ? (
            <div className="flex shrink-0 items-center justify-center gap-4 pt-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Önceki"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Sonraki"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20"
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
