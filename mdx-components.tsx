import type { MDXComponents } from "mdx/types";
import {
  HeroDescription,
  HeroTitle,
} from "@/components/portfolio/hero-mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    HeroDescription,
    HeroTitle,
    ...components,
  };
}
