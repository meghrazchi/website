import type { ComponentType } from "react";

declare module "@/content/site.mdx" {
  export type MetricTone = "positive" | "neutral";
  export type HttpMethod = "GET" | "POST";

  export const siteConfig: {
    readonly name: string;
    readonly title: string;
    readonly role: string;
    readonly systemName: string;
    readonly location: string;
    readonly url: string;
    readonly description: string;
    readonly email: string;
    readonly image: string;
  };

  export const siteCopy: {
    readonly header: {
      readonly navLabel: string;
      readonly language: string;
      readonly themeLabel: string;
      readonly themeAriaLabel: string;
    };
    readonly hero: {
      readonly systemStatusPrefix: string;
      readonly processFile: string;
      readonly identityStatus: string;
      readonly primaryCta: {
        readonly label: string;
        readonly href: string;
      };
      readonly secondaryCta: {
        readonly label: string;
        readonly href: string;
      };
    };
    readonly metrics: {
      readonly ariaLabel: string;
    };
    readonly projects: {
      readonly title: string;
      readonly repositoryLabel: string;
      readonly featuredWatermark: string;
    };
    readonly profile: {
      readonly windowTitle: string;
      readonly codeComment: string;
      readonly philosophyTitle: string;
      readonly philosophyText: string;
      readonly statusTitle: string;
    };
    readonly skills: {
      readonly title: string;
      readonly command: string;
    };
    readonly timeline: {
      readonly title: string;
      readonly loadMoreLabel: string;
    };
    readonly footer: {
      readonly copyrightPrefix: string;
      readonly emailLabel: string;
    };
    readonly structuredData: {
      readonly addressLocality: string;
      readonly addressCountry: string;
      readonly knowsAbout: readonly string[];
    };
  };

  export const navItems: readonly {
    readonly label: string;
    readonly href: string;
  }[];

  export const metrics: readonly {
    readonly label: string;
    readonly value: string;
    readonly detail: string;
    readonly tone: MetricTone;
  }[];

  export const profileCode: {
    readonly identity: {
      readonly full_name: string;
      readonly expertise: readonly string[];
      readonly mission: string;
    };
    readonly bio: string;
    readonly stack_philosophy: string;
  };

  export const statusItems: readonly string[];

  export const highlights: readonly {
    readonly method: HttpMethod;
    readonly endpoint: string;
    readonly title: string;
    readonly description: string;
    readonly stack: readonly string[];
    readonly repositoryUrl?: string;
    readonly featured: boolean;
  }[];

  export const techStack: readonly {
    readonly label: string;
    readonly items: readonly string[];
  }[];

  export const timeline: readonly {
    readonly period: string;
    readonly title: string;
    readonly company: string;
    readonly description: string;
    readonly bullets: readonly string[];
    readonly tags?: readonly string[];
  }[];

  export const footerLinks: readonly {
    readonly label: string;
    readonly href: string;
  }[];

  export const heroContent: {
    readonly title: {
      readonly lead: string;
      readonly highlight: string;
      readonly suffix?: string;
    };
    readonly description: string;
  };

  const MDXContent: ComponentType;
  export default MDXContent;
}
