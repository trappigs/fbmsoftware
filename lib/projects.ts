// =============================================================
//  PROJELER. Yeni proje eklemek için aşağıdaki diziye obje ekleyin.
//  slug:  detay sayfası adresi -> /projeler/<slug> (benzersiz, türkçe-siz)
//  image: /public içine koyduğunuz dosya yolu (örn "/projeler/x.jpg")
//         ya da tam URL. Boş bırakılırsa otomatik placeholder gösterilir.
//  Aşağıdaki alanların çoğu opsiyoneldir; sadece dolduranlar gösterilir.
// =============================================================

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string; // kısa — kart için
  tags: string[];
  url?: string; // yayın adresi
  image?: string; // kapak görseli
  embedUrl?: string; // gömülecek içerik (krpano sanal tur, video vb. — https olmalı)
  // —— detay sayfası ——
  client?: string; // müşteri
  role?: string; // örn "Tasarım & Geliştirme"
  overview?: string[]; // uzun açıklama paragrafları
  services?: string[]; // verilen hizmetler
  highlights?: { label: string; value: string }[]; // sonuç/metik
  gallery?: string[]; // ek görseller (/public yolu ya da URL)
};

export const projectsPage = {
  eyebrow: "Projeler",
  title: "Hayata geçirdiğimiz işler",
  description:
    "Geliştirdiğimiz web ve SaaS ürünlerinden bir seçki. Detaylar veya benzer bir proje için bize ulaşın.",
};

export const projects: Project[] = [
  {
    slug: "drone-360-sanal-tur",
    name: "Drone 360° Sanal Tur",
    category: "Sanal Tur / 360°",
    year: "2026",
    description:
      "Drone ile çekilen 360° görüntülerden oluşturulan, krpano tabanlı interaktif sanal tur — arsa ve bölgeyi kuş bakışı gezdirir.",
    tags: ["krpano", "360°", "Sanal Tur", "Drone", "WebGL"],
    url: "https://bereketlitopraklar.com.tr/yenisehir-2-etap/",
    image: "",
    embedUrl: "https://bereketlitopraklar.com.tr/turlar/karakoy/index.html",
    client: "Bereketli Topraklar",
    role: "Çekim & Geliştirme",
    overview: [
      "Drone ile havadan çekilen 360° panoramik görüntülerden oluşturulan interaktif sanal tur. Kullanıcı; arsayı, parseli ve çevresini kuş bakışı, gerçek görüntüler üzerinden serbestçe gezebiliyor.",
      "Panoramalar krpano ile dikilip tek bir gezilebilir tura dönüştürüldü. WebGL tabanlı oynatıcı mobil ve masaüstünde akıcı çalışıyor; sahneler arası geçiş ve bilgi noktaları (hotspot) ekleniyor.",
    ],
    services: [
      "Drone Çekimi (360°)",
      "Panorama Dikiş (stitching) & İşleme",
      "krpano Tur Geliştirme",
      "Web Entegrasyonu",
    ],
    highlights: [
      { label: "Format", value: "360° Panorama" },
      { label: "Teknoloji", value: "krpano" },
      { label: "Cihaz", value: "Mobil + Masaüstü" },
    ],
    gallery: [],
  },
  {
    slug: "kurumsal-web-cms",
    name: "Kurumsal Web Sitesi & CMS",
    category: "Web Sitesi & CMS",
    year: "2025",
    description:
      "Çok dilli kurumsal web sitesi ve ona özel geliştirilen içerik yönetim paneli — blog, dinamik sayfa, proje, ekip ve medya yönetimi tek yerde.",
    tags: ["Next.js", "Supabase", "TipTap", "i18n", "SEO"],
    url: "",
    image: "",
    client: "Bereketli Topraklar",
    role: "Tasarım & Geliştirme",
    overview: [
      "Çok dilli kurumsal web sitesi ve ona özel geliştirilen içerik yönetim sistemi (CMS). Blog yazıları, dinamik sayfalar, projeler, ekip üyeleri ve medya kütüphanesi tamamen panel üzerinden yönetiliyor.",
      "Next.js App Router ve Supabase ile geliştirildi; TipTap zengin metin editörü, sürükle-bırak sıralama, SEO yönlendirme yönetimi, çok dilli içerik ve iletişim formu altyapısı içeriyor.",
    ],
    services: [
      "Web Tasarımı & Geliştirme",
      "Özel CMS / Admin Panel",
      "Çok Dilli İçerik (i18n)",
      "Blog & Sayfa Editörü",
      "SEO & Yönlendirme Yönetimi",
    ],
    highlights: [
      { label: "İçerik", value: "Tam CMS" },
      { label: "Dil", value: "Çok dilli" },
      { label: "SEO", value: "Yönlendirme + meta" },
    ],
    gallery: [],
  },
  {
    slug: "satis-crm",
    name: "Arsa Satış & Teklif CRM'i",
    category: "CRM / İç Platform",
    year: "2025",
    description:
      "Arsa ve parsel satış operasyonunu uçtan uca yöneten CRM — müşteri, stok, teklif, satış pipeline'ı, kampanya ve raporlama tek panelde.",
    tags: ["Next.js", "Supabase", "TanStack", "TypeScript", "Excel"],
    url: "",
    image: "",
    client: "Bereketli Topraklar",
    role: "Tasarım & Geliştirme",
    overview: [
      "Arsa ve parsel satış operasyonunu uçtan uca yöneten kurumsal CRM. Müşteriler, parsel envanteri (stok), teklifler, satış pipeline'ı, kampanyalar ve raporlama tek panelde toplanıyor.",
      "Next.js ve Supabase üzerine kurulu; rol/yetki matrisi ile çok kullanıcılı erişim, TanStack Table ile yüksek hacimli veri yönetimi, Excel dışa aktarım ve ifraz-tevhid gibi sektöre özel süreçler destekleniyor.",
    ],
    services: [
      "Ürün & UX Tasarımı",
      "Frontend (Next.js / React)",
      "Backend & Veritabanı (Supabase)",
      "Rol & Yetki Sistemi",
      "Raporlama & Excel Dışa Aktarım",
    ],
    highlights: [
      { label: "Modül", value: "20+" },
      { label: "Erişim", value: "Rol bazlı" },
      { label: "Veri", value: "Supabase" },
    ],
    gallery: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
