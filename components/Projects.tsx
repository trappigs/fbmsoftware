import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

function Card({ project }: { project: Project }) {
  const { slug, name, category, year, description, tags, image } = project;
  return (
    <Link
      href={`/projeler/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-2/30 transition-colors duration-300 hover:bg-paper-2/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-evergreen/[0.06]">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-grid">
            <span className="font-serif text-6xl text-evergreen/25">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-xs text-ink-soft backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-evergreen">
            {name}
          </h3>
          <span className="shrink-0 text-sm text-ink-faint">{year}</span>
        </div>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="link-underline mt-7 inline-flex items-center gap-1.5 self-start text-sm font-medium text-evergreen">
          Detayları gör
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function Projects() {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-12 text-center text-ink-soft">
        Yakında yeni projeler eklenecek.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Reveal key={project.slug} delay={0}>
          <Card project={project} />
        </Reveal>
      ))}
    </div>
  );
}
