import { metrics, siteCopy } from "@/lib/site";

export function MetricsGrid() {
  return (
    <section
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      aria-label={siteCopy.metrics.ariaLabel}
    >
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded border border-border bg-surface-lowest p-6"
        >
          <p className="mb-2 font-mono text-xs font-bold uppercase text-muted-foreground">
            {metric.label}
          </p>
          <p className="font-display text-3xl font-semibold text-foreground">
            {metric.value}
          </p>
          <p
            className={`mt-1 font-mono text-xs font-medium ${
              metric.tone === "positive"
                ? "text-metric-positive"
                : "text-muted-foreground"
            }`}
          >
            {metric.detail}
          </p>
        </article>
      ))}
    </section>
  );
}
