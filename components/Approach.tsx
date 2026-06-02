import { approach } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <section id="yaklasim" className="scroll-mt-24 bg-paper-2/50 py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">{approach.eyebrow}</span>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              {approach.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft lg:col-span-5">
            {approach.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 80}>
              <div className="flex h-full flex-col bg-paper p-7">
                <span className="font-serif text-3xl text-ochre">
                  {step.no}
                </span>
                <h3 className="mt-6 font-serif text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
