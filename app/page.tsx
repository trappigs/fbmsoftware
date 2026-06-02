import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Solutions } from "@/components/Solutions";
import { Approach } from "@/components/Approach";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a
        href="#cozumler"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-evergreen focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        İçeriğe geç
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Solutions />
        <Approach />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
