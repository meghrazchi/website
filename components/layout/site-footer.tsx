import Link from "next/link";
import { Container } from "@/components/shared/container";
import { footerLinks, siteConfig, siteCopy } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-20 border-t border-border bg-surface-lowest"
    >
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-xs font-medium text-foreground">
          {siteCopy.footer.copyrightPrefix} {siteConfig.name}
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs font-bold uppercase text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            {siteCopy.footer.emailLabel}
          </a>
          {footerLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const className =
              "font-mono text-xs font-bold uppercase text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary";
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
