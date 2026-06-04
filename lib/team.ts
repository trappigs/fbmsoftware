// =============================================================
//  EKİP. Üye eklemek için diziye obje ekleyin.
//  image: /public yolu (örn "/ekip/furkan.jpg") — boşsa baş harf placeholder.
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
    "Üç kişilik, genç ve odaklı bir ekibiz; ürün, geliştirme ve iş geliştirmeyi birlikte yürütüyoruz.",
};

export const team: Member[] = [
  {
    slug: "furkan-hosgor",
    name: "Furkan Hoşgör",
    role: "Kurucu Ortak · Ürün & İş Geliştirme",
    image: "/ekip/furkan-hosgor.webp",
    bio: "Ürün tarafını ve iş geliştirmeyi yürütür.",
    about: [
      "Ürünün ne olması gerektiğini kurgular; kullanıcı ihtiyacı ile iş hedefini bir araya getirir.",
      "İş geliştirme ve iletişimden sorumlu; ürünü doğru kişilerle buluşturur.",
    ],
    expertise: ["Ürün", "İş Geliştirme", "İletişim", "Pazarlama"],
    email: "",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/furkan-hosgor/" }],
  },
  {
    slug: "burak-ferik",
    name: "Burak Ferik",
    role: "Kurucu Ortak · Yazılım & İş Geliştirme",
    image: "/ekip/burak-ferik.webp",
    bio: "Hem geliştirir hem iş geliştirir; teknik ile müşteri arasındaki köprü.",
    about: [
      "Geliştirme ve iş geliştirme tarafında birlikte çalışır; müşteri ihtiyacını teknik çözüme çevirir.",
      "Teknik tarafı bilen biri olarak hem kod yazar hem müşteriyle konuşur.",
    ],
    expertise: ["Geliştirme", "Frontend", "İş Geliştirme", "Müşteri İlişkileri"],
    email: "",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/burak-ferik-294a34246/" }],
  },
  {
    slug: "muhammed-hatay",
    name: "Muhammed Hatay",
    role: "Kurucu Ortak · Yazılım Geliştirme",
    image: "/ekip/muhammed-hatay.webp",
    bio: "İşin teknik tarafını yürütür; kod ve altyapı onun alanı.",
    about: [
      "Geliştirme ve teknik altyapıya odaklanır; mimari ve kod kalitesinden sorumlu.",
      "Karmaşık işleri sade, çalışır çözümlere dönüştürür.",
    ],
    expertise: ["Yazılım", "Full-stack", "Backend", "Veritabanı"],
    email: "",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/muhammed-hatay-0196a5204/" }],
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
