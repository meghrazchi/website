import Link from "next/link";
import { Fragment } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Backend Architecture", href: "/backend-architecture/" },
  { label: "AI Engineering", href: "/ai-engineering/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg
        className="size-3.5 text-slate-400 transition-colors group-hover:text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/meghrazchi",
    icon: (
      <svg
        className="size-3.5 fill-current text-slate-400 transition-colors group-hover:text-primary"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/behzad-meghrazchi/",
    icon: (
      <svg
        className="size-3.5 fill-current text-slate-400 transition-colors group-hover:text-primary"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-20 w-full scroll-mt-24 border-t border-border bg-surface"
    >
      {/* Top decorative accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-6 sm:pt-16">
        {/* Top CTA / Availability Banner */}
        <div className="relative mb-12 overflow-hidden rounded-xl border border-border bg-surface-lowest p-6 shadow-sm sm:mb-14 sm:p-8">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="relative flex size-2.5 shrink-0">
                  <span className="inline-flex size-2.5 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  status: &quot;Open for Innovation &amp; Strategic Collaboration&quot;
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Ready to build or scale your distributed backend &amp; AI platform?
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Available for Senior/Lead architectural consulting, high-throughput distributed
                microservices, and enterprise LLM/RAG platform engineering.
              </p>
            </div>

            <div className="relative z-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded bg-primary px-6 py-2.5 font-mono text-sm font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
                href={`mailto:${siteConfig.email}`}
              >
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>POST /contact</span>
              </a>
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded border border-border bg-surface-lowest px-5 py-2.5 font-mono text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:bg-surface-high sm:w-auto"
                href="/#experience"
              >
                <svg
                  className="size-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>GET /resume.pdf</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive Footer Bar */}
        <div className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Signature: Order 3 on mobile/tablet, Order 1 on desktop */}
            <div className="order-3 flex items-center justify-center text-center text-xs text-muted-foreground lg:order-1 lg:justify-start lg:text-left">
              <span className="whitespace-normal sm:whitespace-nowrap">
                © 2026{" "}
                <span className="font-semibold text-primary">TERMINAL_ENGINEER</span>
                {" // "}
                <span className="font-semibold text-foreground">{siteConfig.name}</span>
              </span>
            </div>

            {/* Navigation links: Order 1 on mobile/tablet, Order 2 on desktop */}
            <nav
              aria-label="Footer navigation"
              className="order-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[11px] tracking-wider uppercase lg:order-2"
            >
              {navLinks.map((link, i) => (
                <Fragment key={link.label}>
                  <Link
                    key={link.label}
                    href={link.href}
                    className="whitespace-nowrap border-b border-transparent pb-0.5 transition-colors hover:border-primary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <span className="text-border/60" aria-hidden="true">
                      /
                    </span>
                  )}
                </Fragment>
              ))}
            </nav>

            {/* Contact chips: Order 2 on mobile/tablet, Order 3 on desktop */}
            <div className="order-2 flex flex-wrap items-center justify-center gap-2 lg:order-3 lg:justify-end">
              {contactLinks.map((link) => (
                <Fragment key={link.label}>
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-lowest px-2.5 py-1 font-mono text-[11px] text-muted-foreground shadow-sm transition-colors hover:border-primary hover:bg-surface-high hover:text-primary"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
