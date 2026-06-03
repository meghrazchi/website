export const siteConfig = {
  name: "Behzad Meghrazchi",
  title: "Senior Backend Engineer",
  role: "Principal Backend Architect",
  systemName: "SYS_PORTFOLIO_V2",
  location: "Munich, DE",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://behzadmeghrazchi.com",
  description:
    "Personal portfolio for Behzad Meghrazchi, a senior backend engineer focused on scalable distributed systems, cloud infrastructure, and resilient software architecture.",
  email: "behzad.meghrazchi@gmail.com",
  image:
    "https://www.gravatar.com/avatar/331345d18e3a3cb2d6723a23bd24839c?s=800&d=mp&r=g",
} as const;

export const navItems = [
  { label: "GET /about-me", href: "#about" },
  { label: "GET /projects", href: "#projects" },
  { label: "GET /stack", href: "#stack" },
  { label: "POST /contact", href: "#contact" },
] as const;

export const metrics = [
  {
    label: "TOTAL_UPTIME",
    value: "99.98%",
    detail: "+0.02% current quarter",
    tone: "positive",
  },
  {
    label: "CODE_SHIPPED",
    value: "142k+",
    detail: "LOC production grade",
    tone: "neutral",
  },
  {
    label: "API_LATENCY",
    value: "42ms",
    detail: "-5ms optimized path",
    tone: "positive",
  },
  {
    label: "PROJECTS_DEPLOYED",
    value: "24",
    detail: "Global scale systems",
    tone: "neutral",
  },
] as const;

export const profileCode = {
  identity: {
    full_name: siteConfig.name,
    expertise: ["Distributed Systems", "Cloud Architecture"],
    mission: "Building resilient digital backbones",
  },
  bio:
    "Senior engineer with a decade of experience optimizing heavy-load environments. I favor boring technology for mission-critical systems and careful experimentation where it creates durable advantage.",
  stack_philosophy:
    "Type safety, modularity, automated observability, and operational clarity.",
} as const;

export const statusItems = [
  "Refactoring legacy monoliths",
  "Cloud-native optimization",
  "Event-driven service design",
] as const;

export const highlights = [
  {
    method: "POST",
    endpoint: "/projects/fintech-gateway",
    title: "Global Payment Aggregator",
    description:
      "Architected a high-throughput payment gateway handling 50k+ transactions per second with zero-downtime deployments using Kubernetes and Kafka.",
    stack: ["Golang", "gRPC", "PostgreSQL"],
    featured: true,
  },
  {
    method: "GET",
    endpoint: "/projects/realtime-chat",
    title: "PubSub Mesh",
    description:
      "Low-latency messaging architecture for enterprise collaboration tools with resilient fanout and observability-first operations.",
    stack: ["Node.js", "Redis", "NATS"],
    featured: false,
  },
] as const;

export const techStack = [
  {
    label: "LANGUAGES",
    items: ["Golang", "Rust", "TypeScript", "Python"],
  },
  {
    label: "INFRASTRUCTURE",
    items: ["Kubernetes", "AWS / GCP", "Terraform", "Docker"],
  },
  {
    label: "DATABASE",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    label: "MESSAGING",
    items: ["Apache Kafka", "RabbitMQ", "NATS"],
  },
  {
    label: "MONITORING",
    items: ["Prometheus", "Grafana", "Datadog"],
  },
  {
    label: "SECURITY",
    items: ["OAuth2 / OIDC", "mTLS", "HashiCorp Vault"],
  },
] as const;

export const timeline = [
  {
    period: "2021 - Present",
    title: "Principal Backend Lead",
    company: "TechScale Inc.",
    description:
      "Spearheading transition from monolith to event-driven microservices while mentoring engineers across distributed teams.",
  },
  {
    period: "2018 - 2021",
    title: "Senior Software Architect",
    company: "DataGrid Systems",
    description:
      "Designed a petabyte-scale data ingestion engine and reduced infrastructure costs through container orchestration improvements.",
  },
  {
    period: "2015 - 2018",
    title: "Full Stack Developer",
    company: "Innovate Labs",
    description:
      "Led front-to-back delivery of enterprise CRM systems and introduced typed APIs into production services.",
  },
] as const;

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Source Code", href: "https://github.com/" },
  { label: "API Documentation", href: "#about" },
] as const;
