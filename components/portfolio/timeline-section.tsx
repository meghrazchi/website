import { timeline } from "@/lib/site";

export function TimelineSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl space-y-12"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="text-center font-display text-3xl font-semibold text-foreground"
      >
        System_Evolution_Logs
      </h2>

      <div className="relative space-y-8">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />
        {timeline.map((item, index) => (
          <article key={`${item.period}-${item.company}`} className="relative pl-12">
            <span
              className={`absolute left-2.5 top-1 size-3 rounded-full border-4 border-background ${
                index === 0 ? "bg-primary" : "bg-border"
              }`}
            />
            <p className="mb-1 font-mono text-xs font-medium uppercase text-muted-foreground">
              {item.period}
            </p>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {item.title}
              {" // "}
              {item.company}
            </h3>
            <p className="mt-2 leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
