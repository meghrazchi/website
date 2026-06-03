import { navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-bold text-primary md:text-base"
          aria-label={`${siteConfig.name} homepage`}
        >
          {siteConfig.systemName}
        </a>

        <nav
          aria-label="Primary navigation"
          className="flex gap-4 overflow-x-auto pb-1 text-sm md:gap-8 md:overflow-visible md:pb-0"
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

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <span className="font-mono text-xs font-medium text-muted-foreground">
            Language: EN/DE
          </span>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
