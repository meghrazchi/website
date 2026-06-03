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
  { label: "GET /experiences", href: "#experience" },
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
    endpoint: "/open-source/rudix",
    title: "Rudix",
    description:
      "Full-stack AI Document Q&A Assistant built with Retrieval-Augmented Generation. Rudix turns uploaded PDF, TXT, and DOCX files into searchable knowledge, then returns source-grounded answers with citations, confidence signals, and usage metrics.",
    stack: ["RAG", "FastAPI", "Next.js", "Qdrant", "Celery"],
    repositoryUrl: "https://gitlab.com/benza-group/rudix",
    featured: true,
  },
  {
    method: "GET",
    endpoint: "/open-source/bill-pilot",
    title: "BillPilot",
    description:
      "Workspace-first financial operations platform for teams to manage accounts, transactions, budgets, recurring activity, receipt intake, and reporting in one system.",
    stack: ["Spring Boot", "Kotlin", "Angular", "PostgreSQL", "OpenAI"],
    repositoryUrl: "https://gitlab.com/benza-group/bill-pilot",
    featured: false,
  },
] as const;

export const techStack = [
  {
    label: "LANGUAGES",
    items: ["Node.js", "Typescript", "Python", "Java"],
  },
  {
    label: "INFRASTRUCTURE",
    items: ["Kubernetes", "AWS / GCP", "Terraform", "Docker"],
  },
  {
    label: "DATABASE",
    items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Milvus"],
  },
  {
    label: "MESSAGING",
    items: ["Apache Kafka", "RabbitMQ", "NATS", "Mosquitto"],
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
    period: "2025-02 - Present",
    title: "Senior Backend Developer",
    company: "Arculus GmbH",
    description:
      "Leading backend platform work across performance, security, API integration, Kubernetes scalability, and practical LLM integrations.",
    bullets: [
      "Led data-driven performance optimization and reliability; reduced latency by 40%.",
      "Led backend architecture decisions to strengthen security with OAuth2 and policy enforcement.",
      "Integrated multiple APIs to ensure backward compatibility and platform stability.",
      "Increased scalability by tuning Kubernetes deployments and standardizing Helm charts.",
      "Integrated LLM into product features using embeddings and prompt engineering.",
      "Centralized authorization of microservices by integrating OPA, reducing duplicated auth logic.",
    ],
  },
  {
    period: "2024-06 - 2025-01",
    title: "Senior Backend Developer",
    company: "E.ON Digital Technology",
    description:
      "Delivered backend and cloud infrastructure for API facade work, authentication integration, quality review, and observability.",
    bullets: [
      "Led Infrastructure as Code for an API facade using AWS CDK, provisioning 3 accounts.",
      "Integrated Auth0 for multi-tenant applications, improving tenant isolation and auth flows.",
      "Reviewed backend code to maintain quality, consistency, and adherence to standards.",
      "Automated core functionalities and applied TDD to boost reliability.",
      "Collaborated with teams to improve observability with New Relic, reducing MTTR by 15%.",
    ],
  },
  {
    period: "2022-04 - 2024-06",
    title: "Technical Lead / Senior Backend Expert",
    company: "ONCARE GmbH",
    description:
      "Led backend architecture and platform quality work while moving teams toward NestJS, TypeScript, and stronger delivery practices.",
    bullets: [
      "Designed scalable backend architecture for healthcare product workflows.",
      "Improved query performance through schema, API, and caching refinements.",
      "Partnered with teams on CI/CD practices and migration to typed backend services.",
    ],
  },
  {
    period: "2020-01 - 2022-04",
    title: "Senior Backend Developer (Team Lead)",
    company: "Rahyab Telecom",
    description:
      "Created telecom EMS/NMS applications, scaled clustered systems, maintained OSS applications, and led backend delivery.",
    bullets: [
      "Created EMS and NMS applications for telecommunication companies.",
      "Scaled applications using clustering of databases and application servers.",
      "Optimized, monitored, refactored, and maintained OSS apps with 2M users.",
      "Containerized multiple applications and automated deployments.",
      "Led the backend team and drove delivery standards.",
    ],
  },
  {
    period: "2016-09 - 2020-01",
    title: "Senior MEAN Stack Developer (Team Lead)",
    company: "InnoTech",
    description:
      "Delivered secure APIs for web and mobile products, built streaming services, integrated third-party APIs, and led product teams.",
    bullets: [
      "Provided secure and scalable APIs for mobile and web applications.",
      "Created a streaming server for a VOD application.",
      "Integrated multiple third-party APIs and refactored legacy architectures.",
      "Led backend and mobile team.",
    ],
    tags: ["Docker", "GraphQL", "REST", "DevOps"],
  },
  {
    period: "2015-07 - 2016-09",
    title: "Senior MEAN Stack Developer / Android Developer",
    company: "Artatel",
    description:
      "Built a scalable messaging platform, implemented server-side microservices, clustered infrastructure, and shipped an XMPP Android app.",
    bullets: [
      "Implemented backend messaging services with Node.js, Redis, WebSocket, and Couchbase.",
      "Designed microservice and clustered infrastructure for messaging workloads.",
      "Delivered Android XMPP features tied to backend service capabilities.",
    ],
  },
] as const;

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/behzad-meghrazchi/" },
  { label: "Source Code", href: "https://github.com/meghrazchi" },
] as const;
