import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { projectsPage } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "FBM Yazılım'ın geliştirdiği web ve SaaS projelerinden bir seçki.",
  alternates: { canonical: "/projeler" },
};

export default function ProjelerPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <section className="shell pb-24 pt-36 sm:pt-44">
          <span className="eyebrow">{projectsPage.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl font-serif text-[2.7rem] font-medium leading-[1.06] tracking-[-0.02em] sm:text-6xl">
            {projectsPage.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {projectsPage.description}
          </p>

          <div className="mt-16">
            <Projects />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
