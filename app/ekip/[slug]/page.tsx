import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { team, getMember, initials } from "@/lib/team";
import { brand } from "@/lib/content";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return { title: "Üye bulunamadı" };
  const url = `/ekip/${member.slug}`;
  const images = member.image ? [member.image] : undefined;
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      url,
      title: `${member.name} — ${brand.name}`,
      description: member.bio,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: member.name,
      description: member.bio,
      images,
    },
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const { name, role, image, bio, about, expertise, email, links } = member;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <section className="shell pt-36 sm:pt-44">
          <Link href="/ekip" className="link-underline text-sm text-ink-soft">
            ← Tüm ekip
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-evergreen/[0.06]">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-grid">
                    <span className="font-serif text-8xl text-evergreen/20">
                      {initials(name)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-sm uppercase tracking-[0.16em] text-ochre">
                {role}
              </p>
              <h1 className="mt-3 font-serif text-[2.7rem] font-medium leading-[1.04] tracking-[-0.02em] sm:text-6xl">
                {name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {bio}
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
                {(about ?? []).map((p, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>

              {expertise && expertise.length > 0 ? (
                <div className="mt-10 border-t border-line pt-6">
                  <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                    Uzmanlık
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {expertise.map((e) => (
                      <span
                        key={e}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {(links && links.length > 0) || email ? (
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="link-underline text-sm font-medium text-evergreen"
                    >
                      {email}
                    </a>
                  ) : null}
                  {(links ?? []).map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="shell pb-24 pt-24 sm:pb-28 sm:pt-28">
          <div className="overflow-hidden rounded-3xl border border-line bg-paper-2/50 px-8 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Ekibimizle çalışmak ister misiniz?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-soft">
              Projenizi anlatın, birlikte hayata geçirelim.
            </p>
            <a href="/#iletisim" className="btn btn-primary mt-8">
              İletişime geç <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
