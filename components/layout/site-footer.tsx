import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Backend Architecture", href: "/backend-architecture/" },
  { label: "AI Engineering", href: "/ai-engineering/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 w-full overflow-hidden border-t border-slate-800/80 bg-[#090d14] subtle-grid"
    >
      {/* Top decorative accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6">
        {/* Top CTA / Availability Banner */}
        <div className="relative mb-14 overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0d131d]/90 p-8 shadow-2xl shadow-black/60 backdrop-blur">
          <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="glow-dot relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  status: &quot;Open for Innovation &amp; Strategic Collaboration&quot;
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Ready to build or scale your distributed backend &amp; AI platform?
              </h2>
              <p className="max-w-2xl text-sm text-slate-400">
                Available for Senior/Lead architectural consulting, high-throughput distributed
                microservices, and enterprise LLM/RAG platform engineering.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-150 hover:bg-sky-400 hover:shadow-sky-500/30"
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
            </div>
          </div>
        </div>

        {/* Main Footer Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-8 font-mono text-xs text-slate-400 md:flex-row">
          <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="glow-dot relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-slate-400">
              © 2026 <span className="font-semibold text-sky-400">TERMINAL_ENGINEER</span> {"//"}{" "}
              <span className="font-semibold text-white">{siteConfig.name}</span>
            </span>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-2.5 text-[11px] tracking-wider text-slate-400 sm:gap-3"
          >
            {navLinks.map((item, index) => {
              const isExternal = item.href.startsWith("mailto:") || item.href.startsWith("http");
              const linkClasses =
                item.label === "AI Engineering"
                  ? "transition-colors uppercase hover:text-teal-400"
                  : "transition-colors uppercase hover:text-sky-400";

              return (
                <span key={item.label} className="inline-flex items-center gap-2.5 sm:gap-3">
                  {isExternal ? (
                    <a href={item.href} className={linkClasses}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClasses}>
                      {item.label}
                    </Link>
                  )}
                  {index < navLinks.length - 1 ? <span className="text-slate-700">/</span> : null}
                </span>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
            <a
              className="group inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 shadow-sm transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              href={`mailto:${siteConfig.email}`}
              aria-label="Send email"
            >
              <svg
                className="size-3.5 text-slate-400 transition-colors group-hover:text-sky-400"
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
              <span>Email</span>
            </a>

            <a
              className="group inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 shadow-sm transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              href="https://github.com/meghrazchi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <svg
                className="size-3.5 fill-current text-slate-400 transition-colors group-hover:text-sky-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              className="group inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 shadow-sm transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              href="https://www.linkedin.com/in/behzad-meghrazchi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg
                className="size-3.5 fill-current text-slate-400 transition-colors group-hover:text-sky-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
