import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return { title: project.name, description: project.description };
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-5 first:border-t-0 first:pt-0">
      <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">
        {label}
      </dt>
      <dd className="mt-2 text-ink">{value}</dd>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const {
    name,
    category,
    year,
    description,
    tags,
    url,
    image,
    imageFit,
    embedUrl,
    client,
    role,
    overview,
    services,
    highlights,
    gallery,
  } = project;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        {/* Intro */}
        <section className="shell pt-36 sm:pt-44">
          <Link
            href="/projeler"
            className="link-underline text-sm text-ink-soft"
          >
            ← Tüm projeler
          </Link>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-faint">
            <span>{category}</span>
            <span className="h-1 w-1 rounded-full bg-ochre" />
            <span>{year}</span>
          </div>

          <h1 className="mt-5 mx-auto max-w-4xl text-center font-serif text-[2.7rem] font-medium leading-[1.04] tracking-[-0.02em] sm:text-6xl">
            {name}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
            {description}
          </p>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-9"
            >
              Siteyi ziyaret et <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </section>

        {/* Cover / Gömülü içerik */}
        <section className="shell mt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-evergreen/[0.06]">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`${name} — sanal tur`}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking; magnetometer"
                allowFullScreen
              />
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={name}
                className={`h-full w-full ${
                  imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-grid">
                <span className="font-serif text-8xl text-evergreen/20">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          {embedUrl ? (
            <p className="mt-3 text-center text-xs text-ink-faint">
              360° turu fareyle sürükleyerek gezebilir, tam ekran için tur
              içindeki simgeyi kullanabilirsiniz.
            </p>
          ) : null}
        </section>

        {/* Body */}
        <section className="shell py-24 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 text-center">
              <span className="eyebrow">Genel Bakış</span>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
                {(overview ?? [description]).map((p, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <dl className="space-y-6 text-center sm:text-left">
                {client ? <Meta label="Müşteri" value={client} /> : null}
                {role ? <Meta label="Rol" value={role} /> : null}
                <Meta label="Yıl" value={year} />

                {services && services.length > 0 ? (
                  <div className="border-t border-line pt-5">
                    <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                      Hizmetler
                    </dt>
                    <dd className="mt-3 space-y-1.5">
                      {services.map((s) => (
                        <div key={s} className="text-ink">
                          {s}
                        </div>
                      ))}
                    </dd>
                  </div>
                ) : null}

                {tags.length > 0 ? (
                  <div className="border-t border-line pt-5">
                    <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                      Etiketler
                    </dt>
                    <dd className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        {gallery && gallery.length > 0 ? (
          <Gallery images={gallery} name={name} />
        ) : null}

        {/* Highlights */}
        {highlights && highlights.length > 0 ? (
          <section className="bg-evergreen text-paper">
            <div className="shell py-16 sm:py-20">
              <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
                {highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 70}>
                    <div className="border-l border-paper/20 pl-5 lg:pl-8">
                      <div className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                        {h.value}
                      </div>
                      <div className="mt-3 text-sm text-paper/70">{h.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="shell pb-24 pt-4 sm:pb-28">
          <div className="overflow-hidden rounded-3xl border border-line bg-paper-2/50 px-8 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Benzer bir proje mi düşünüyorsunuz?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-soft">
              Fikrinizi anlatın, birlikte hayata geçirelim.
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
