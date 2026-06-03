import { profileCode, statusItems } from "@/lib/site";
import { TerminalDots } from "@/components/shared/terminal-dots";

export function ProfileSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-6 lg:grid-cols-12"
      aria-labelledby="about-title"
    >
      <div className="lg:col-span-8">
        <CodeWindow />
      </div>
      <aside className="flex flex-col gap-6 lg:col-span-4">
        <PhilosophyPanel />
        <StatusPanel />
      </aside>
    </section>
  );
}

function CodeWindow() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-border bg-surface-lowest">
      <div className="flex items-center justify-between border-b border-border bg-surface-low px-4 py-2">
        <h2
          id="about-title"
          className="font-mono text-xs font-medium text-muted-foreground"
        >
          ~/profile/identity.json
        </h2>
        <TerminalDots />
      </div>
      <div className="overflow-x-auto p-6">
        <pre className="font-mono text-sm leading-6 text-foreground">
          <span className="text-code-comment">
            {"// Core profile data structure"}
          </span>
          {"\n"}
          {"{\n"}
          {'  "identity": {\n'}
          {`    "full_name": "${profileCode.identity.full_name}",\n`}
          {`    "expertise": ["${profileCode.identity.expertise.join('", "')}"],\n`}
          {`    "mission": "${profileCode.identity.mission}"\n`}
          {"  },\n"}
          {`  "bio": "${profileCode.bio}",\n`}
          {`  "stack_philosophy": "${profileCode.stack_philosophy}"\n`}
          {"}"}
        </pre>
      </div>
    </article>
  );
}

function PhilosophyPanel() {
  return (
    <article className="flex-1 rounded border border-primary bg-primary-soft p-6">
      <h3 className="mb-2 font-display text-3xl font-semibold text-primary-soft-foreground">
        Core Philosophy
      </h3>
      <p className="leading-7 text-primary-soft-foreground/80">
        Complexity is the enemy of reliability. I design systems that remain
        transparent and manageable at scale.
      </p>
    </article>
  );
}

function StatusPanel() {
  return (
    <article className="rounded border border-border bg-surface-high p-6">
      <h3 className="mb-4 font-mono text-xs font-bold uppercase text-muted-foreground">
        CURRENT_STATUS
      </h3>
      <ul className="space-y-3">
        {statusItems.map((item) => (
          <li key={item} className="flex items-center gap-3 font-mono text-sm">
            <span className="size-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
