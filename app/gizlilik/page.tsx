import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gizlilik & KVKK Aydınlatma Metni",
  description:
    "FBM Yazılım gizlilik politikası ve KVKK aydınlatma metni — toplanan veriler, işleme amaçları ve haklarınız.",
  alternates: { canonical: "/gizlilik" },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "Veri Sorumlusu",
    body: (
      <>
        {brand.name}, bu metin kapsamında veri sorumlusudur. İletişim:{" "}
        <a href={`mailto:${brand.email}`} className="link-underline text-ink">
          {brand.email}
        </a>{" "}
        · {brand.location}.
      </>
    ),
  },
  {
    h: "Toplanan Veriler",
    body: (
      <>
        İletişim formu aracılığıyla ilettiğiniz <strong>ad-soyad</strong>,{" "}
        <strong>e-posta adresi</strong> ve <strong>mesaj içeriği</strong>.
        Ayrıca site kullanımına dair anonim ve toplu (kişiyi tanımlamayan)
        analitik veriler.
      </>
    ),
  },
  {
    h: "İşleme Amaçları",
    body: "Talep ve başvurularınıza yanıt vermek, sizinle iletişim kurmak, hizmetlerimizi sunmak ve sitenin performansını ölçmek.",
  },
  {
    h: "Hukuki Sebep",
    body: "Verileriniz; talebinize yanıt verilebilmesi için açık rızanıza, meşru menfaatimize ve gerektiğinde sözleşmenin kurulması/ifasına (KVKK md. 5) dayanılarak işlenir.",
  },
  {
    h: "Aktarım",
    body: "Verileriniz üçüncü kişilerle pazarlama amacıyla paylaşılmaz. Yalnızca barındırma (hosting) ve e-posta altyapısı gibi hizmet sağlayıcılarla, hizmetin gereği ölçüsünde işlenebilir.",
  },
  {
    h: "Saklama Süresi",
    body: "Veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuattaki süreler kadar saklanır; amaç ortadan kalktığında silinir veya anonimleştirilir.",
  },
  {
    h: "Çerezler",
    body: "Sitenin çalışması için zorunlu ve kişiyi tanımlamayan anonim analitik çerezler kullanılabilir. Tarayıcı ayarlarından çerezleri yönetebilirsiniz.",
  },
  {
    h: "Haklarınız (KVKK md. 11)",
    body: (
      <>
        Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme,
        düzeltilmesini veya silinmesini isteme, işlemeye itiraz etme ve zararın
        giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı{" "}
        <a href={`mailto:${brand.email}`} className="link-underline text-ink">
          {brand.email}
        </a>{" "}
        adresine iletebilirsiniz.
      </>
    ),
  },
];

export default function GizlilikPage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <section className="shell pb-24 pt-36 sm:pt-44">
          <span className="eyebrow">Yasal</span>
          <h1 className="mt-6 max-w-3xl font-serif text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            Gizlilik &amp; KVKK Aydınlatma Metni
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {brand.name} olarak kişisel verilerinizin gizliliğine önem veriyoruz.
            Bu metin, hangi verileri neden işlediğimizi ve haklarınızı açıklar.
          </p>

          <div className="mt-14 max-w-2xl divide-y divide-line border-t border-line">
            {sections.map((s) => (
              <div key={s.h} className="py-7">
                <h2 className="font-serif text-xl font-medium tracking-tight">
                  {s.h}
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-ink-faint">
            Bu metin bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği
            taşımaz; gerektiğinde güncellenebilir.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
