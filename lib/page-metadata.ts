import type { Metadata } from "next";
import type { SeoPage } from "@/lib/seo-pages";

export function createSeoPageMetadata(page: SeoPage): Metadata {
  const url = page.path;
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
      type: "article",
    },
    twitter: {
      title: page.metadataTitle,
      description: page.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
