import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = `https://${brand.domain}`;
const SITE_DESC =
  "Web uygulamaları ve SaaS ürünleri geliştiren yazılım stüdyosu. Fikirden canlı ürüne kadar tasarım, geliştirme ve büyütme.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.role}`,
    template: `%s — ${brand.name}`,
  },
  description: SITE_DESC,
  applicationName: brand.name,
  authors: [{ name: brand.name, url: SITE_URL }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  keywords: [
    "yazılım",
    "SaaS",
    "web uygulaması",
    "yazılım geliştirme",
    "yazılım stüdyosu",
    "web tasarım",
    "Bursa yazılım",
    brand.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.role}`,
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.role}`,
    description: SITE_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: SITE_URL,
  email: brand.email,
  telephone: brand.phone,
  description: SITE_DESC,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bursa",
    addressCountry: "TR",
  },
  sameAs: brand.social
    .map((s) => s.href)
    .filter((href) => href && href !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
