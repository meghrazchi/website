import { navItems, siteConfig, siteCopy } from "@/lib/site";
import { Container } from "@/components/shared/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-bold text-primary md:text-base"
          aria-label={`${siteConfig.name} homepage`}
        >
          {siteConfig.systemName}
        </a>

        <nav
          aria-label={siteCopy.header.navLabel}
          className="hidden gap-4 overflow-x-auto pb-1 text-sm md:flex md:gap-8 md:overflow-visible md:pb-0"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border-b-2 border-transparent py-1 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-between gap-4 md:flex md:justify-end">
          <span className="font-mono text-xs font-medium text-muted-foreground">
            {siteCopy.header.language}
          </span>
          <ThemeToggle
            ariaLabel={siteCopy.header.themeAriaLabel}
            label={siteCopy.header.themeLabel}
          />
        </div>

        <MobileMenu
          closeMenuLabel={siteCopy.header.closeMenuLabel}
          language={siteCopy.header.language}
          links={navItems}
          menuAriaLabel={siteCopy.header.menuAriaLabel}
          menuLabel={siteCopy.header.menuLabel}
          navLabel={siteCopy.header.navLabel}
          themeAriaLabel={siteCopy.header.themeAriaLabel}
          themeLabel={siteCopy.header.themeLabel}
        />
      </Container>
    </header>
  );
}
