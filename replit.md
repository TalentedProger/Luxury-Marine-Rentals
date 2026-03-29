# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── yacht-rental/       # Yacht & boat rental website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Yacht Rental Website (artifacts/yacht-rental)

Premium yacht and boat rental website for Saint Petersburg, Russia.

### Pages
- `/` — Home page with video hero, services, fleet preview, routes, testimonials, CTA
- `/fleet` — Full fleet catalog with category filtering
- `/vessel/:slug` — Individual vessel detail page (with image gallery, specs, booking modal)
- `/routes` — Maritime route pages (Kronstadt forts, Peterhof, etc.)
- `/about` — Company story, team, values
- `/contacts` — Contact form and info

### Tech
- React + TypeScript + Vite
- Framer Motion animations
- TailwindCSS with dark navy theme
- Barlow / Barlow Condensed fonts (bold sans-serif)
- Glassmorphism UI elements
- Video hero background with image fallback

### Data
- Fleet data: `artifacts/yacht-rental/src/data/fleet.ts` — 6 vessels with full specs

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
