import type { MetadataRoute } from "next";
import { brand } from "@/lib/content";
import { projects } from "@/lib/projects";
import { team } from "@/lib/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${brand.domain}`;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projeler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ekip`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projeler/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const memberRoutes: MetadataRoute.Sitemap = team.map((m) => ({
    url: `${base}/ekip/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...memberRoutes];
}
