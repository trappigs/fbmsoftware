import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in srgb, var(--color-evergreen) 16%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="shell relative pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-52">
        <div
          className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/60 px-3.5 py-1.5 text-sm text-ink-soft"
          style={{ animationDelay: "40ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evergreen opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-evergreen" />
          </span>
          Yeni projelere açığız
        </div>

        <h1
          className="rise mt-8 max-w-5xl font-serif text-[2.7rem] font-medium leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[5.2rem]"
          style={{ animationDelay: "120ms" }}
        >
          {hero.title.map((part, i) =>
            part.em ? (
              <em key={i} className="italic text-evergreen">
                {part.text}
              </em>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h1>

        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "220ms" }}
        >
          {hero.description}
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-3.5"
          style={{ animationDelay: "300ms" }}
        >
          <a href={hero.primary.href} className="btn btn-primary">
            {hero.primary.label}
            <span aria-hidden="true">→</span>
          </a>
          <a href={hero.secondary.href} className="btn btn-ghost">
            {hero.secondary.label}
          </a>
        </div>

        <div
          className="rise mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-ink-faint"
          style={{ animationDelay: "380ms" }}
        >
          {hero.meta.map((m) => (
            <span key={m} className="inline-flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-ochre" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
