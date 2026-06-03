import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/shared/container";
import { HeroSection } from "@/components/portfolio/hero-section";
import { HighlightsSection } from "@/components/portfolio/highlights-section";
import { MetricsGrid } from "@/components/portfolio/metrics-grid";
import { ProfileSection } from "@/components/portfolio/profile-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { TimelineSection } from "@/components/portfolio/timeline-section";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.url,
  description: siteConfig.description,
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: `mailto:${siteConfig.email}`,
    image: siteConfig.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressCountry: "DE",
    },
    knowsAbout: [
      "Distributed systems",
      "Backend engineering",
      "Cloud architecture",
      "Microservices",
      "Observability",
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Container className="space-y-16 py-8 md:py-12">
          <HeroSection />
          <MetricsGrid />
          <ProfileSection />
          <HighlightsSection />
          <SkillsSection />
          <TimelineSection />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
