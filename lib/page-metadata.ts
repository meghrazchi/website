import type { Metadata } from "next";
import type { SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

export function createSeoPageMetadata(page: SeoPage): Metadata {
  const url = page.path.endsWith("/") ? page.path : `${page.path}/`;
  const ogImage = siteConfig.ogImage ?? "/behzad-meghrazchi.png";

  return {
    title: page.metadataTitle,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metadataTitle,
      description: page.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: `${page.heading} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadataTitle,
      description: page.metaDescription,
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: `${page.heading} | ${siteConfig.name}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
