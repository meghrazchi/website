import { profileCode, siteCopy, statusItems } from "@/lib/site";
import { IdentityJsonView } from "@/components/portfolio/identity-json-view";
import { TerminalDots } from "@/components/shared/terminal-dots";

export function ProfileSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch"
      aria-labelledby="about-title"
    >
      <div className="flex min-h-0 flex-col lg:col-span-7 lg:h-full lg:self-stretch">
        <CodeWindow />
      </div>
      <aside className="flex min-h-0 flex-col gap-6 lg:col-span-5 lg:h-full lg:self-stretch">
        <PhilosophyPanel />
        <StatusPanel />
      </aside>
    </section>
  );
}

function CodeWindow() {
  const { terminalBar } = siteCopy.profile;

  return (
    <article className="flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface-lowest shadow-lg ring-1 ring-border/20 lg:min-h-0">
      <div className="flex items-center justify-between border-b border-border/50 bg-surface/90 backdrop-blur-sm px-4 py-3.5">
        <h2
          id="about-title"
          className="font-mono text-xs font-medium tracking-tight text-muted-foreground"
        >
          <span className="text-muted-foreground/50">~/profile/</span>
          identity.json
        </h2>
        <TerminalDots />
      </div>
      <div className="custom-scrollbar min-h-0 flex-1 overflow-auto bg-surface-lowest p-5">
        <pre className="m-0 whitespace-pre-wrap break-words">
          <IdentityJsonView data={profileCode} />
        </pre>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/50 bg-surface p-4 px-4 font-mono text-[11px] text-muted-foreground select-none">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-emerald-400">❯</span>
          <span className="text-muted-foreground">jq</span>
          <span className="text-amber-300">{terminalBar.filter}</span>
          <span className="text-muted-foreground">{terminalBar.file}</span>
          <span
            className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-primary"
            aria-hidden
          />
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-muted-foreground">UTF-8</span>
          <span className="text-muted-foreground/50">•</span>
          <span className="text-primary">JSON</span>
          <span className="text-muted-foreground/50">•</span>
          <span className="text-emerald-400">git:(main) ✔</span>
          <span className="text-muted-foreground/50">•</span>
          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
            200 OK
          </span>
        </div>
      </div>
    </article>
  );
}

function PhilosophyPanel() {
  return (
    <article className="rounded-xl border border-primary/25 bg-primary-soft p-7 shadow-lg ring-1 ring-primary/20 lg:p-8">
      <h3 className="mb-3 font-display text-3xl font-bold tracking-tight text-primary-soft-foreground lg:text-[32px]">
        {siteCopy.profile.philosophyTitle}
      </h3>
      <p className="mb-5 text-[17px] font-medium leading-snug tracking-tight text-primary-soft-foreground/95">
        {siteCopy.profile.philosophyTagline}
      </p>
      <p className="text-[14.5px] font-normal leading-relaxed text-primary-soft-foreground/90">
        {siteCopy.profile.philosophyText}
      </p>
    </article>
  );
}

function StatusPanel() {
  return (
    <article className="flex min-h-0 flex-1 flex-col rounded-xl border border-border bg-surface-lowest p-7 shadow-lg ring-1 ring-border/20 lg:p-8">
      <header className="mb-4 flex items-center justify-between border-b border-border/50 pb-4">
        <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span
            className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
            aria-hidden
          />
          {siteCopy.profile.statusTitle}
        </span>
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
          {siteCopy.profile.statusLiveFeedLabel}
        </span>
      </header>
      <ul className="space-y-4 text-xs leading-relaxed">
        {statusItems.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
              aria-hidden
            />
            <p>
              <strong className="font-mono font-bold tracking-tight text-foreground">
                {item.label}:
              </strong>
              <span className="ml-1 font-normal text-muted-foreground">
                {item.description}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
