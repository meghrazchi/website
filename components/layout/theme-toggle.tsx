"use client";

const storageKey = "portfolio-theme";

type ThemeToggleProps = {
  ariaLabel: string;
  label: string;
};

export function ThemeToggle({ ariaLabel, label }: ThemeToggleProps) {
  function toggleTheme() {
    const nextTheme = document.documentElement.classList.toggle("dark")
      ? "dark"
      : "light";
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-sm border border-border bg-surface-lowest px-3 font-mono text-xs font-semibold uppercase text-muted-foreground transition-colors hover:bg-surface-high"
      aria-label={ariaLabel}
    >
      <span className="relative size-4 rounded-full border border-current">
        <span
          className="absolute inset-1 -translate-x-1 rounded-full bg-current transition-transform dark:translate-x-1"
        />
      </span>
      {label}
    </button>
  );
}
