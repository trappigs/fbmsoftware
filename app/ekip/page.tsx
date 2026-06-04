import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";
import { teamPage } from "@/lib/team";

const DESC = "FBM Yazılım ekibi — ürünleri geliştiren kişiler.";

export const metadata: Metadata = {
  title: "Ekip",
  description: DESC,
  alternates: { canonical: "/ekip" },
  openGraph: {
    type: "website",
    url: "/ekip",
    title: "Ekip",
    description: DESC,
  },
  twitter: { card: "summary_large_image", title: "Ekip", description: DESC },
};

export default function EkipPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <section className="shell pb-24 pt-36 sm:pt-44">
          <span className="eyebrow">{teamPage.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl font-serif text-[2.7rem] font-medium leading-[1.06] tracking-[-0.02em] sm:text-6xl">
            {teamPage.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {teamPage.description}
          </p>

          <div className="mt-16">
            <Team />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
