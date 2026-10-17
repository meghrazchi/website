import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { ThemeScript } from "@/components/layout/theme-script";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#101214" },
    { media: "(prefers-color-scheme: light)", color: "#f7f9fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Senior Backend Engineer",
    "AI Platform Engineer",
    "Distributed Systems Munich",
    "Cloud-native architecture",
    "RAG",
    "Agentic AI",
    "LLM applications",
    "Microservices",
    "Kubernetes",
    "Behzad Meghrazchi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage ?? "/behzad-meghrazchi.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage ?? "/behzad-meghrazchi.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.title}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
