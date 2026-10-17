import type { MetadataRoute } from "next";
import { seoPagePaths } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-16");

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...seoPagePaths.map((path) => ({
      url: `${siteConfig.url}${path.endsWith("/") ? path : `${path}/`}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
