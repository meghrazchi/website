import { siteCopy, techStack } from "@/lib/site";

export function SkillsSection() {
  return (
    <section
      id="stack"
      className="rounded-lg border border-border bg-surface-low p-8"
      aria-labelledby="stack-title"
    >
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2
          id="stack-title"
          className="font-display text-3xl font-semibold text-foreground"
        >
          {siteCopy.skills.title}
        </h2>
        <p className="font-mono text-sm font-medium text-primary">
          {siteCopy.skills.command}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {techStack.map((group) => (
          <TechGroup key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}

type TechGroupData = (typeof techStack)[number];

function TechGroup({ group }: { group: TechGroupData }) {
  return (
    <div className="space-y-4">
      <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground">
        {group.label}
      </h3>
      <ul className="space-y-2 font-mono text-sm text-foreground">
        {group.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
