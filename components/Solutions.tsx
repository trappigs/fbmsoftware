import { solutions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Solutions() {
  return (
    <section id="cozumler" className="shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">{solutions.eyebrow}</span>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            {solutions.title}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-ink-soft lg:col-span-5">
          {solutions.description}
        </p>
      </div>

      <div className="mt-16 border-b border-line">
        {solutions.items.map((item, i) => (
          <Reveal key={item.index} delay={i * 70}>
            <div className="group -mx-4 grid grid-cols-1 gap-4 border-t border-line px-4 py-8 transition-colors duration-300 hover:bg-paper-2/50 lg:grid-cols-12 lg:items-center lg:gap-6">
              <div className="font-serif text-2xl text-ink-faint lg:col-span-1">
                {item.index}
              </div>

              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-evergreen">
                    {item.name}
                  </h3>
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ochre">
                    {item.kicker}
                  </span>
                </div>
                <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 lg:col-span-5 lg:justify-end">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className="ml-1 hidden text-evergreen transition-transform duration-300 group-hover:translate-x-1.5 lg:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
