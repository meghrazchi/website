import { highlights, siteCopy } from "@/lib/site";

export function HighlightsSection() {
  return (
    <section id="projects" className="space-y-8" aria-labelledby="projects-title">
      <h2
        id="projects-title"
        className="font-display text-3xl font-semibold text-foreground"
      >
        {siteCopy.projects.title}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map((project) => (
          <ProjectCard key={project.endpoint} project={project} />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof highlights)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-border bg-surface-lowest p-8 transition-colors hover:border-primary ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded px-2 py-1 font-mono text-xs font-semibold text-white ${
              project.method === "POST" ? "bg-method-post" : "bg-method-get"
            }`}
          >
            {project.method}
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            {project.endpoint}
          </span>
        </div>

        <h3 className="mb-3 font-display text-3xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="max-w-xl leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded border border-border bg-surface-high px-2 py-1 font-mono text-xs font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        {"repositoryUrl" in project ? (
          <a
            href={project.repositoryUrl}
            className="mt-6 inline-flex min-h-10 items-center justify-center rounded border border-border bg-surface-lowest px-4 py-2 font-mono text-sm font-semibold text-foreground transition-colors hover:bg-surface-high"
            target="_blank"
            rel="noreferrer"
          >
            {siteCopy.projects.repositoryLabel}
          </a>
        ) : null}
      </div>

      {project.featured ? (
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-4 font-mono text-8xl font-bold text-primary opacity-[0.04] transition-opacity group-hover:opacity-10"
        >
          {siteCopy.projects.featuredWatermark}
        </div>
      ) : null}
    </article>
  );
}
