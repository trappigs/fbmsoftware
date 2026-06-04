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
  imageFit?: "cover" | "contain"; // "contain" = kırpma yok (hazır kapak tasarımı için)
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
    slug: "whatsapp-panel",
    name: "WhatsApp Omnichannel Panel",
    category: "Web Uygulaması / SaaS",
    year: "2026",
    description:
      "WhatsApp tabanlı omnichannel müşteri iletişim paneli — çoklu sohbet yönetimi, hazır şablonlar, hızlı yanıtlar ve raporlama.",
    tags: ["Next.js", "WhatsApp API", "SaaS", "Gerçek Zamanlı", "Dashboard"],
    url: "",
    image: "/projeler/whatsapp-panel/whatsapp-panel-4.png",
    client: "FBM Yazılım",
    role: "Tasarım & Geliştirme",
    overview: [
      "WhatsApp üzerinden gelen müşteri mesajlarını tek panelde yöneten omnichannel iletişim aracı. Çoklu temsilci, sohbet atama, etiketleme ve bot ile otomatik yanıt.",
      "Hazır mesaj şablonları, '/' ile hızlı yanıtlar, müşteri kartı ve detaylı raporlama (sohbet hacmi, yanıt süresi, dönüşüm) ile satış ve destek süreçlerini hızlandırır. (Ekran görüntülerinde kişisel veriler bulanıklaştırılmıştır.)",
    ],
    services: [
      "Ürün & UX Tasarımı",
      "Frontend (Next.js)",
      "WhatsApp Entegrasyonu",
      "Gerçek Zamanlı Sohbet",
      "Raporlama",
    ],
    highlights: [
      { label: "Kanal", value: "WhatsApp" },
      { label: "Mod", value: "Omnichannel" },
      { label: "Özellik", value: "Bot + Şablon" },
    ],
    gallery: [
      "/projeler/whatsapp-panel/whatsapp-panel-kapak.png",
      "/projeler/whatsapp-panel/whatsapp-panel-4.png",
      "/projeler/whatsapp-panel/whatsapp-panel-1.png",
      "/projeler/whatsapp-panel/whatsapp-panel-2.png",
      "/projeler/whatsapp-panel/whatsapp-panel-3.png",
    ],
  },
  {
    slug: "lots-gayrimenkul",
    name: "Lots Gayrimenkul",
    category: "Web Sitesi",
    year: "2026",
    description:
      "Premium emlak deneyimi sunan Lots Gayrimenkul için kurumsal web sitesi — ilan yönlendirme, blog ve kurumsal sayfalar.",
    tags: ["Web Sitesi", "Gayrimenkul", "Next.js", "Vercel", "Responsive"],
    url: "https://lotsgayrimenkul.com",
    image: "/projeler/lots-gayrimenkul/lots-kapak.png",
    client: "Lots Gayrimenkul",
    role: "Tasarım & Geliştirme",
    overview: [
      "Lots Gayrimenkul için premium bir emlak deneyimi sunan kurumsal web sitesi. Lüks ve konforu öne çıkaran, modern ve sade bir arayüz tasarlandı.",
      "Anasayfadan ilan platformlarına yönlendirme, blog/içerik bölümü, kurumsal sayfalar (hakkımızda, ekip, misyon, vizyon) ve iletişim/harita; tamamen mobil uyumlu.",
    ],
    services: [
      "Web Tasarımı & Geliştirme",
      "Blog & İçerik",
      "Kurumsal Sayfalar",
      "Responsive Arayüz",
    ],
    highlights: [
      { label: "Sektör", value: "Gayrimenkul" },
      { label: "Tür", value: "Kurumsal Site" },
      { label: "Durum", value: "Yayında" },
    ],
    gallery: [
      "/projeler/lots-gayrimenkul/lots-d-1.png",
      "/projeler/lots-gayrimenkul/lots-d-2.png",
      "/projeler/lots-gayrimenkul/lots-d-3.png",
      "/projeler/lots-gayrimenkul/lots-d-4.png",
      "/projeler/lots-gayrimenkul/lots-m-1.png",
      "/projeler/lots-gayrimenkul/lots-m-2.png",
      "/projeler/lots-gayrimenkul/lots-m-3.png",
    ],
  },
  {
    slug: "vekarer",
    name: "Vekarer",
    category: "Web Sitesi & Platform",
    year: "2024",
    description:
      "Türkiye'nin ilk paylaşımlı gayrimenkul satış platformu Vekarer için kurumsal web sitesi ve üyelik/tanıtım arayüzü.",
    tags: ["Web Sitesi", "Gayrimenkul", "Platform", "Responsive", "UI/UX"],
    url: "https://vekarer.com",
    image: "/projeler/vekarer/vekarer-kapak.png",
    client: "Dortage A.Ş.",
    role: "Tasarım & Geliştirme",
    overview: [
      "Vekarer, Türkiye'nin ilk paylaşımlı gayrimenkul satış platformu. Ziyaretçileri üyeliğe ve yatırım fırsatlarına yönlendiren kurumsal web sitesi ve tanıtım arayüzü geliştirildi.",
      "Güven veren, modern bir tasarım; net adım anlatımı (üye ol → yatırım getir → komisyon kazan), kayıt ve randevu akışları, mobil uyumlu arayüz.",
    ],
    services: [
      "Web Tasarımı & Geliştirme",
      "Üyelik & Kayıt Akışı",
      "Randevu Sistemi",
      "Responsive Arayüz",
    ],
    highlights: [
      { label: "Sektör", value: "Gayrimenkul" },
      { label: "Tür", value: "Platform Sitesi" },
      { label: "Durum", value: "Yayında" },
    ],
    gallery: [
      "/projeler/vekarer/vekarer-1.png",
      "/projeler/vekarer/vekarer-2.png",
      "/projeler/vekarer/vekarer-3.png",
      "/projeler/vekarer/vekarer-5.png",
    ],
  },
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
    url: "https://bereketlitopraklar.com.tr",
    image: "/projeler/kurumsal-web-cms/kurumsal-kapak.png",
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
    gallery: [
      "/projeler/kurumsal-web-cms/kurumsal-d-1.png",
      "/projeler/kurumsal-web-cms/kurumsal-d-2.png",
      "/projeler/kurumsal-web-cms/kurumsal-d-3.png",
      "/projeler/kurumsal-web-cms/kurumsal-d-4.png",
      "/projeler/kurumsal-web-cms/kurumsal-m-1.png",
      "/projeler/kurumsal-web-cms/kurumsal-m-2.png",
      "/projeler/kurumsal-web-cms/kurumsal-m-3.png",
    ],
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
    image: "/projeler/satis-crm/kapak.png",
    imageFit: "contain",
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
    gallery: [
      "/projeler/satis-crm/satis-1.png",
      "/projeler/satis-crm/satis-2.png",
      "/projeler/satis-crm/satis-3.png",
      "/projeler/satis-crm/satis-4.png",
      "/projeler/satis-crm/satis-5.png",
      "/projeler/satis-crm/satis-6.png",
      "/projeler/satis-crm/satis-7.png",
      "/projeler/satis-crm/satis-8.png",
      "/projeler/satis-crm/satis-9.png",
    ],
  },
  {
    slug: "gayrimenkul-crm",
    name: "Gayrimenkul CRM (EspoCRM)",
    category: "CRM / Kurulum",
    year: "2025",
    description:
      "Gayrimenkul satış ekibi için EspoCRM tabanlı, Türkçeleştirilmiş ve markalanmış müşteri ilişkileri yönetimi kurulumu.",
    tags: ["EspoCRM", "CRM", "Kurulum", "Özelleştirme", "Self-hosted"],
    url: "",
    image: "/projeler/gayrimenkul-crm/gayrimenkul-crm-kapak.png",
    client: "Bereketli Topraklar",
    role: "Kurulum & Özelleştirme",
    overview: [
      "Gayrimenkul satış ekibi için açık kaynak EspoCRM üzerine kurulan, Türkçeleştirilmiş ve kurumsal kimliğe göre markalanmış müşteri ilişkileri yönetimi sistemi.",
      "Potansiyel müşteri, fırsat, firma ve aktivite (toplantı, arama, görev) takibi; rol/yetki yönetimi ve gösterge paneli ile satış sürecinin merkezî yönetimi. (Ekran görüntülerinde kişisel veriler bulanıklaştırılmıştır.)",
    ],
    services: [
      "EspoCRM Kurulumu",
      "Türkçeleştirme & Markalama",
      "Modül & Alan Özelleştirme",
      "Kullanıcı & Yetki Yönetimi",
    ],
    highlights: [
      { label: "Taban", value: "EspoCRM" },
      { label: "Tür", value: "Self-hosted" },
      { label: "Dil", value: "Türkçe" },
    ],
    gallery: [
      "/projeler/gayrimenkul-crm/gayrimenkul-crm-kapak.png",
      "/projeler/gayrimenkul-crm/gayrimenkul-crm-1.png",
      "/projeler/gayrimenkul-crm/gayrimenkul-crm-2.png",
      "/projeler/gayrimenkul-crm/gayrimenkul-crm-3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
