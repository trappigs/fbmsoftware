import { about } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="hakkimizda" className="shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            {about.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="grid grid-cols-1 gap-1 border-t border-line py-5 sm:grid-cols-3 sm:gap-6">
                  <h3 className="font-serif text-lg font-medium tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-ink-soft sm:col-span-2">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
