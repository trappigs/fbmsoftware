// =============================================================
//  EKİP. Üye eklemek için diziye obje ekleyin.
//  image: /public yolu (örn "/ekip/furkan.jpg") — boşsa baş harf placeholder.
//  Roller/biyolar örnektir — gerçek bilgilerle değiştirin.
// =============================================================

export type Member = {
  slug: string;
  name: string;
  role: string;
  image?: string;
  bio: string; // kısa — kart için
  about?: string[]; // detay paragrafları
  expertise?: string[];
  email?: string;
  links?: { label: string; href: string }[];
};

export const teamPage = {
  eyebrow: "Ekip",
  title: "Az ama doğru ekip",
  description:
    "Ürünü kendi ürünümüz gibi sahiplenen, kıdemli ve odaklı bir ekip. İşin tamamına birlikte sahip çıkıyoruz.",
};

export const team: Member[] = [
  {
    slug: "furkan-hosgor",
    name: "Furkan Hoşgör",
    role: "Kurucu Ortak & Yazılım Mimarı",
    image: "/ekip/furkan-hosgor.webp",
    bio: "Ürün mimarisi ve teknik yön. Fikirden ölçeklenebilir sisteme.",
    about: [
      "Ürünlerin teknik mimarisini ve yönünü belirler. Karmaşık ihtiyaçları sade, sürdürülebilir sistemlere dönüştürmeye odaklanır.",
      "Fikir aşamasından canlıya kadar mimari, kod kalitesi ve ekip koordinasyonunda aktif rol alır.",
    ],
    expertise: ["Sistem Mimarisi", "Next.js", "Backend", "Ürün Stratejisi"],
    email: "",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    slug: "burak-ferik",
    name: "Burak Ferik",
    role: "Yazılım Geliştirici",
    image: "/ekip/burak-ferik.webp",
    bio: "Uçtan uca geliştirme; arayüzden veritabanına.",
    about: [
      "Arayüzden veritabanına kadar uçtan uca geliştirme yapar. Temiz, test edilebilir ve bakımı kolay kod yazmaya önem verir.",
      "Kullanıcı deneyimini ve performansı birlikte gözeterek ürünleri hayata geçirir.",
    ],
    expertise: ["Frontend", "React", "API", "UI Geliştirme"],
    email: "",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    slug: "muhammed-hatay",
    name: "Muhammed Hatay",
    role: "Yazılım Geliştirici",
    image: "/ekip/muhammed-hatay.webp",
    bio: "Uygulama geliştirme ve veri tarafı.",
    about: [
      "Uygulama geliştirme ve veri tarafında çalışır. Süreçleri otomatikleştiren, ölçeklenebilir çözümler kurar.",
      "Veritabanı tasarımı, entegrasyonlar ve günlük operasyonu kolaylaştıran araçlar üzerinde yoğunlaşır.",
    ],
    expertise: ["Full-stack", "Supabase", "Veri", "Otomasyon"],
    email: "",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export function getMember(slug: string): Member | undefined {
  return team.find((m) => m.slug === slug);
}

export function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
