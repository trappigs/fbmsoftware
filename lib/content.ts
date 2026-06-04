// =============================================================
//  TÜM SİTE METİNLERİ BURADA. İçeriği değiştirmek için bu dosyayı düzenleyin.
//  Ürün adları/açıklamaları örnektir — kendi yazılımlarınızla değiştirin.
// =============================================================

export const brand = {
  name: "FBM Yazılım",
  short: "FBM",
  role: "Yazılım Stüdyosu",
  domain: "fbmyazilim.com",
  email: "iletisim@fbmyazilim.com",
  phone: "+90 544 588 65 42",
  location: "Bursa, Türkiye",
  year: new Date().getFullYear(),
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "X", href: "#" },
  ],
};

export const nav = [
  { label: "Çözümler", href: "/#cozumler" },
  { label: "Yaklaşım", href: "/#yaklasim" },
  { label: "Projeler", href: "/projeler" },
  { label: "Ekip", href: "/ekip" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "İletişim", href: "/#iletisim" },
];

export const hero = {
  eyebrow: "Yazılım & Ürün Stüdyosu",
  // Vurgulu kelimeler { em: true } ile işaretlenir (serif italik gösterilir).
  title: [
    { text: "Karmaşık fikirleri " },
    { text: "sade", em: true },
    { text: ", hızlı ve ölçeklenebilir yazılımlara dönüştürürüz." },
  ],
  description:
    "Web uygulamaları ve SaaS ürünleri tasarlar, geliştirir ve büyütürüz. Fikirden canlı ürüne kadar tek bir ekiple ilerlersiniz.",
  primary: { label: "Projenizi konuşalım", href: "#iletisim" },
  secondary: { label: "Çözümleri gör", href: "#cozumler" },
  meta: ["Web & SaaS", "Bulut altyapısı", "Tasarımdan canlıya"],
};

export const marquee = [
  "Web Uygulamaları",
  "SaaS Platformları",
  "API & Entegrasyon",
  "Bulut Altyapısı",
  "Mobil",
  "Otomasyon",
  "Veri & Analitik",
  "UI / UX Tasarım",
];

export const solutions = {
  eyebrow: "Çözümler",
  title: "Uçtan uca yazılım yetkinliği",
  description:
    "Tek bir ürün ekibiyle keşiften canlıya. Her çözüm; ölçeklenebilir mimari, temiz arayüz ve sürdürülebilir kod ile teslim edilir.",
  items: [
    {
      index: "01",
      name: "Akış",
      kicker: "İş Süreçleri & Otomasyon",
      description:
        "Tekrarlayan işleri otomatikleştiren, ekipleri tek panelde buluşturan süreç yönetim platformu.",
      tags: ["Workflow", "Otomasyon", "Roller & İzinler"],
    },
    {
      index: "02",
      name: "Panel",
      kicker: "Veri & Analitik",
      description:
        "Dağınık verileri tek noktada toplayan, gerçek zamanlı gösterge panelleri ve raporlama çözümü.",
      tags: ["Dashboard", "Raporlama", "Gerçek zamanlı"],
    },
    {
      index: "03",
      name: "Bağla",
      kicker: "Entegrasyon & API",
      description:
        "Mevcut sistemlerinizi birbirine bağlayan, güvenli ve belgelenmiş API katmanı ve entegrasyonlar.",
      tags: ["REST", "Webhook", "Güvenlik"],
    },
    {
      index: "04",
      name: "Saha",
      kicker: "Mobil & Saha Yönetimi",
      description:
        "Çevrimdışı çalışabilen, saha ekipleri için tasarlanmış hızlı ve sade mobil uygulama.",
      tags: ["iOS & Android", "Çevrimdışı", "Konum"],
    },
  ],
};

export const approach = {
  eyebrow: "Yaklaşım",
  title: "Net bir süreç, öngörülebilir teslim",
  description:
    "Sürprizleri sevmiyoruz. Her adımı sizinle birlikte planlar, kısa döngülerle ilerler ve düzenli olarak çalışan yazılım gösteririz.",
  steps: [
    {
      no: "01",
      title: "Keşif",
      text: "İhtiyacı, kullanıcıyı ve hedefleri netleştiririz. Kapsamı ve önceliği birlikte belirleriz.",
    },
    {
      no: "02",
      title: "Tasarım",
      text: "Akışları ve arayüzü tasarlar, prototip üzerinden erken geri bildirim alırız.",
    },
    {
      no: "03",
      title: "Geliştirme",
      text: "Kısa sprintlerle, test edilmiş ve ölçeklenebilir kod yazarız. İlerlemeyi şeffaf paylaşırız.",
    },
    {
      no: "04",
      title: "Büyütme",
      text: "Canlıya alır, izler ve veriye göre geliştiririz. Bakım ve destekte yanınızdayız.",
    },
  ],
};

export const stats = {
  items: [
    { value: "120+", label: "Tamamlanan proje" },
    { value: "8", label: "Yıl deneyim" },
    { value: "%99.9", label: "Çalışma süresi" },
    { value: "40+", label: "Mutlu müşteri" },
  ],
};

export const about = {
  eyebrow: "Hakkımızda",
  title: "Küçük, kıdemli ve odaklı bir ekip",
  paragraphs: [
    "FBM Yazılım; web ve SaaS ürünleri geliştiren bir yazılım stüdyosudur. İşin tamamına sahip çıkan, az ama doğru kişiden oluşan bir ekibiz.",
    "Gösterişten çok işe yarayan yazılıma inanırız. Sade arayüzler, sağlam mimari ve uzun ömürlü kod ile kalıcı değer üretmeyi hedefleriz.",
  ],
  values: [
    { title: "Sadelik", text: "En iyi çözüm, çoğu zaman en az parçadan oluşandır." },
    { title: "Şeffaflık", text: "İlerlemeyi ve kararları açıkça paylaşırız." },
    { title: "Sahiplenme", text: "Ürünü kendi ürünümüz gibi sahipleniriz." },
  ],
};

export const contact = {
  eyebrow: "İletişim",
  title: "Bir sonraki ürününüzü birlikte kuralım",
  description:
    "Fikrinizi anlatın; size kapsam, süre ve yaklaşım hakkında net bir geri dönüş yapalım. Genellikle 1 iş günü içinde yanıtlıyoruz.",
};
