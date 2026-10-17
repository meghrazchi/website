import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/shared/container";
import type { SeoPage } from "@/lib/seo-pages";
import { seoPages, siteConfig } from "@/lib/site";

type SeoPageViewProps = {
  page: SeoPage;
};

export function SeoPageView({ page }: SeoPageViewProps) {
  const relatedPages = seoPages.filter((item) => item.path !== page.path);
  const pageUrl = `${siteConfig.url}${page.path.endsWith("/") ? page.path : `${page.path}/`}`;
  const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage ?? "/behzad-meghrazchi.webp"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.heading,
        description: page.metaDescription,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        image: [ogImageUrl],
        about: page.heading,
        author: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
          sameAs: [
            "https://www.linkedin.com/in/behzad-meghrazchi/",
            "https://github.com/meghrazchi",
          ],
        },
        publisher: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.heading,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="top">
        <Container className="space-y-10 py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  GET /
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-foreground">
                GET {page.path.replace(/^\//, "")}
              </li>
            </ol>
          </nav>

          <header className="max-w-3xl space-y-4">
            <h1 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl md:leading-[1.15]">
              {page.heading}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              {page.intro}
            </p>
          </header>

          <div className="max-w-3xl space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {section.heading}
                </h2>
                <p className="leading-7 text-muted-foreground">{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="list-inside list-disc space-y-2 pl-1 text-sm leading-7 text-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="max-w-3xl rounded border border-border bg-surface-lowest p-6">
            <h2 className="mb-3 font-mono text-xs font-bold uppercase text-muted-foreground">
              Related topics
            </h2>
            <ul className="flex flex-col gap-2">
              {relatedPages.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="font-mono text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    GET {item.path}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="font-mono text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  POST /#contact
                </Link>
              </li>
            </ul>
          </aside>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
