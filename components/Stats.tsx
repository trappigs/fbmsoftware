import { stats } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="bg-evergreen text-paper">
      <div className="shell py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="border-l border-paper/20 pl-5 lg:pl-8">
                <div className="font-serif text-5xl font-medium tracking-tight sm:text-6xl">
                  {item.value}
                </div>
                <div className="mt-3 text-sm text-paper/70">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
