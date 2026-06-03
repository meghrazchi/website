type HeroTitleProps = {
  lead: string;
  highlight: string;
  suffix?: string;
};

type HeroDescriptionProps = {
  text: string;
};

export function HeroTitle({
  lead,
  highlight,
  suffix = ".",
}: HeroTitleProps) {
  return (
    <h1
      id="hero-title"
      className="max-w-3xl font-display text-[24px] font-semibold leading-[32px] text-foreground md:text-[40px] md:leading-[48px]"
    >
      {lead} <span className="text-primary">{highlight}</span>
      {suffix}
    </h1>
  );
}

export function HeroDescription({ text }: HeroDescriptionProps) {
  return (
    <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      {text}
    </p>
  );
}
