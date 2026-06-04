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
    "Üç ortak; strateji, geliştirme ve iş geliştirmeyi birlikte yürütüyoruz. İşin tamamına sahip çıkan, küçük ve odaklı bir ekip.",
};

export const team: Member[] = [
  {
    slug: "furkan-hosgor",
    name: "Furkan Hoşgör",
    role: "Kurucu Ortak · CEO",
    image: "/ekip/furkan-hosgor.webp",
    bio: "Strateji, ürün vizyonu ve iş geliştirme.",
    about: [
      "Şirketin vizyonunu ve ürün yönünü belirler; pazar ihtiyacı ile iş hedeflerini buluşturur.",
      "Müşteri ilişkileri, iş geliştirme ve marka konumlandırmasını yöneterek ürünleri doğru kitleyle buluşturur.",
    ],
    expertise: ["Strateji", "Ürün Vizyonu", "İş Geliştirme", "Müşteri İlişkileri"],
    email: "",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/furkan-hosgor/" }],
  },
  {
    slug: "burak-ferik",
    name: "Burak Ferik",
    role: "Kurucu Ortak · İş Geliştirme Direktörü",
    image: "/ekip/burak-ferik.webp",
    bio: "Teknik bilgiyi iş geliştirmeyle birleştirir; müşteri ile ürün arasındaki köprü.",
    about: [
      "Hem geliştirme hem iş geliştirme tarafında yer alır; müşteri ihtiyacını doğru teknik çözüme çevirir.",
      "Teknik altyapıyı bilen biri olarak uygulama ve iş geliştirme süreçlerini uçtan uca yönetir; ekip ile saha arasında köprü kurar.",
    ],
    expertise: ["İş Geliştirme", "Çözüm Mimarisi", "Geliştirme", "Müşteri İlişkileri"],
    email: "",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/burak-ferik-294a34246/" }],
  },
  {
    slug: "muhammed-hatay",
    name: "Muhammed Hatay",
    role: "Kurucu Ortak · CTO",
    image: "/ekip/muhammed-hatay.webp",
    bio: "Teknik liderlik; mimari, kod ve altyapının sahibi.",
    about: [
      "Ürünlerin teknik mimarisini ve geliştirme süreçlerini yönetir; kod kalitesi ve altyapıdan sorumludur.",
      "Karmaşık problemleri sade, ölçeklenebilir çözümlere dönüştürür; ekibin teknik omurgasıdır.",
    ],
    expertise: ["Yazılım Mimarisi", "Full-stack", "Backend", "Altyapı"],
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
