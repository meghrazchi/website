# Personal Website

Static-first personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
pnpm lint
pnpm build
```

`pnpm build` uses Next.js static export and writes the production site to `out/`.

## Docker

Build the image:

```bash
docker compose build personal-website
```

Run the container:

```bash
docker compose up -d personal-website
```

Open `http://localhost:3000`.

If port `3000` is already in use:

```bash
HOST_PORT=3002 docker compose up -d personal-website
```

Open `http://localhost:3002`.

Stop the container:

```bash
docker compose down
```

## Deployment

The Docker image builds the static Next.js export in a Node 22 Alpine stage and serves the generated `out/` directory with Nginx. This is suitable for a VPS behind Caddy or Nginx.

## License

This project is released under the MIT License. You can use, copy, modify, and redistribute it for personal or commercial projects. See `LICENSE` for the full terms.
