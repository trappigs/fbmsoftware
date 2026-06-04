import Link from "next/link";
import { team, initials, type Member } from "@/lib/team";
import { Reveal } from "@/components/Reveal";

function Card({ member }: { member: Member }) {
  const { slug, name, role, bio, image } = member;
  return (
    <Link href={`/ekip/${slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-evergreen/[0.06]">
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
              {initials(name)}
            </span>
          </div>
        )}
      </div>
      <div className="mt-5">
        <h3 className="font-serif text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-evergreen">
          {name}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-[0.12em] text-ochre">
          {role}
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
          {bio}
        </p>
        <span className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-evergreen">
          Profili gör
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function Team() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member, i) => (
        <Reveal key={member.slug} delay={(i % 3) * 80}>
          <Card member={member} />
        </Reveal>
      ))}
    </div>
  );
}
