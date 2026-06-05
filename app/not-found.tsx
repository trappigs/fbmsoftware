import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top" className="flex min-h-[70vh] items-center">
        <section className="shell py-32 text-center">
          <div className="font-serif text-[5.5rem] leading-none text-evergreen sm:text-[9rem]">
            404
          </div>
          <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Sayfa bulunamadı
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">
              Ana sayfa
            </Link>
            <Link href="/projeler" className="btn btn-ghost">
              Projeler
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
