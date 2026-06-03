import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { TerminalDots } from "@/components/shared/terminal-dots";

const identityRows = [
  { key: "name", value: siteConfig.name },
  { key: "role", value: siteConfig.role },
  { key: "status", value: "Open for innovation" },
] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-12 lg:gap-6"
      aria-labelledby="hero-title"
    >
      <div className="space-y-6 lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-high px-3 py-1">
          <span className="size-2 rounded-full bg-method-get motion-safe:animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            System Active: {siteConfig.location}
          </span>
        </div>

        <div className="space-y-4">
          <h1
            id="hero-title"
            className="max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
          >
            Senior Backend Engineer Architecting{" "}
            <span className="text-primary">Scalable Distributed Systems</span>.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Specializing in high-performance microservices, cloud
            infrastructure, and turning complex technical requirements into
            elegant, maintainable codebases.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            View Project Repository
          </a>
          <a
            href="#experience"
            className="inline-flex min-h-12 items-center justify-center rounded border border-border px-6 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:bg-surface-high"
          >
            GET /resume.pdf
          </a>
        </div>
      </div>

      <div className="relative pb-20 lg:col-span-5">
        <div className="relative aspect-square rounded-lg border border-border bg-surface-lowest p-2 shadow-sm">
          <div className="relative h-full overflow-hidden rounded">
            <Image
              src={siteConfig.image}
              alt={`${siteConfig.name} portrait`}
              fill
              priority
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-x-6 bottom-0 z-10 translate-y-1/2 rounded border border-border bg-surface/90 p-4 shadow-sm backdrop-blur">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold text-primary">
                process_identity.exe
              </span>
              <TerminalDots />
            </div>
            <dl className="space-y-1 font-mono text-xs leading-5 text-muted-foreground">
              {identityRows.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[max-content_minmax(0,1fr)] gap-2"
                >
                  <dt className="whitespace-nowrap">&gt; {row.key}:</dt>
                  <dd className="min-w-0 break-words">
                    {JSON.stringify(row.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
