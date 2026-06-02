import { marquee } from "@/lib/content";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="border-y border-line bg-paper-2/60 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap font-serif text-xl text-ink-soft"
            >
              <span className="px-7">{item}</span>
              <span className="text-ochre" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
