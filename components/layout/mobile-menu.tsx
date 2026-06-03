"use client";

import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

type MobileMenuLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  closeMenuLabel: string;
  language: string;
  links: readonly MobileMenuLink[];
  menuAriaLabel: string;
  menuLabel: string;
  navLabel: string;
  themeAriaLabel: string;
  themeLabel: string;
};

export function MobileMenu({
  closeMenuLabel,
  language,
  links,
  menuAriaLabel,
  menuLabel,
  navLabel,
  themeAriaLabel,
  themeLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(min-width: 768px)");

    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    tabletQuery.addEventListener("change", handleViewportChange);

    return () => {
      tabletQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-sm border border-border bg-surface-lowest px-3 font-mono text-xs font-semibold uppercase text-muted-foreground transition-colors hover:bg-surface-high"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={menuAriaLabel}
        onClick={() => setIsOpen(true)}
      >
        <span className="flex size-4 flex-col justify-center gap-1" aria-hidden="true">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
        {menuLabel}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            aria-label={closeMenuLabel}
            onClick={() => setIsOpen(false)}
          />

          <aside
            id={menuId}
            className="absolute right-0 top-0 flex h-screen w-[min(20rem,calc(100vw-2rem))] flex-col border-l border-border bg-surface p-6 shadow-2xl"
            aria-label={navLabel}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-sm font-bold text-primary">
                {menuLabel}
              </span>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-border bg-surface-lowest font-mono text-lg font-semibold text-muted-foreground transition-colors hover:bg-surface-high"
                aria-label={closeMenuLabel}
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-border pb-3 font-mono text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4 border-t border-border pt-6">
              <span className="block font-mono text-xs font-medium text-muted-foreground">
                {language}
              </span>
              <ThemeToggle ariaLabel={themeAriaLabel} label={themeLabel} />
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
