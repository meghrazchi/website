import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageView } from "@/components/seo/seo-page-view";
import { createSeoPageMetadata } from "@/lib/page-metadata";
import { seoPagePaths, seoPagesByPath } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ segments: string[] }>;
};

function getPage(segments: string[]) {
  const path = `/${segments.join("/")}`;
  return seoPagesByPath[path as keyof typeof seoPagesByPath];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return seoPagePaths.map((path) => ({
    segments: path.replace(/^\//, "").split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segments } = await params;
  const page = getPage(segments);
  if (!page) {
    return {};
  }
  return createSeoPageMetadata(page);
}

export default async function SeoContentPage({ params }: PageProps) {
  const { segments } = await params;
  const page = getPage(segments);
  if (!page) {
    notFound();
  }
  return <SeoPageView page={page} />;
}
