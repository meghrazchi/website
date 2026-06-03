"use client";

import { useState } from "react";
import type { timeline } from "@/lib/site";

type TimelineItem = (typeof timeline)[number];

type TimelineListProps = {
  items: readonly TimelineItem[];
  initialCount?: number;
  loadMoreLabel: string;
};

export function TimelineList({
  items,
  initialCount = 3,
  loadMoreLabel,
}: TimelineListProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleItems = items.slice(0, visibleCount);
  const hiddenCount = Math.max(items.length - visibleCount, 0);

  function showMore() {
    setVisibleCount(items.length);
  }

  return (
    <div className="relative space-y-8">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />
      {visibleItems.map((item, index) => (
        <TimelineRole
          key={`${item.period}-${item.company}`}
          item={item}
          index={index}
        />
      ))}

      {hiddenCount > 0 ? (
        <div className="relative pl-12">
          <button
            type="button"
            onClick={showMore}
            className="inline-flex min-h-11 items-center justify-center rounded border border-border bg-surface-lowest px-4 py-2 font-mono text-sm font-semibold text-foreground transition-colors hover:bg-surface-high"
          >
            {loadMoreLabel} ({hiddenCount})
          </button>
        </div>
      ) : null}
    </div>
  );
}

function TimelineRole({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <article className="relative pl-12">
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
      <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-primary">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {"tags" in item && item.tags ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-surface-high px-2 py-1 font-mono text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
