import { seoPages } from "@/content/site.mdx";

export type SeoPage = (typeof seoPages)[number];

export const seoPagesByPath = Object.fromEntries(
  seoPages.map((page) => [page.path, page]),
) as Record<SeoPage["path"], SeoPage>;

export const seoPagePaths = seoPages.map((page) => page.path);
