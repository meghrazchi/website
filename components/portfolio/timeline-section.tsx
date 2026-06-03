import { siteCopy, timeline } from "@/lib/site";
import { TimelineList } from "@/components/portfolio/timeline-list";

export function TimelineSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl space-y-12"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="text-center font-display text-[40px] font-semibold leading-[48px] text-foreground md:text-[56px] md:leading-[64px]"
      >
        {siteCopy.timeline.title}
      </h2>

      <TimelineList
        items={timeline}
        initialCount={3}
        loadMoreLabel={siteCopy.timeline.loadMoreLabel}
      />
    </section>
  );
}
