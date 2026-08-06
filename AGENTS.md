# AGENTS.md

## Project Summary
- Stack: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Chakra UI, Framer Motion, Zustand.
- App runs on port `3005` in development (`npm run dev`).
- Production build uses Next standalone output (`next.config.js`).

## Repo Structure
- `src/app`: App Router pages, layout, providers, API routes.
- `src/components`: reusable UI building blocks.
- `src/section`: landing page sections and feature-specific UI.
- `src/static`: portfolio data and static JSON.
- `src/assets` and `public/assets`: images, SVGs, videos.

## Working Rules
- Read the target files first; keep diffs minimal.
- Prefer existing dependencies and native Next/React patterns; do not add packages unless necessary.
- Match the current style: semicolon-light TS/TSX, functional components, local types when small.
- Do not touch `.env` contents or expose secrets.
- Do not commit or rewrite history unless explicitly asked.

## Verification
- Install dependencies first if `node_modules` is missing: `npm install`.
- Main checks:
  - `npm run lint`
  - `npm run build`
- If a command fails because dependencies are not installed, report that clearly instead of guessing.

## Project-Specific Notes
- Chatbot UI posts to `src/app/api/chat/route.ts`.
- There is also `src/app/api/ai/route.ts`; verify which API route is actually used before editing chatbot behavior.
- Media-heavy assets live in-repo; avoid broad scans over binary files when inspecting.

## Known Review Findings
- `.codegraph/` is initialized; use CodeGraph first for symbol relationships and impact analysis.
- `npm run lint` uses Next.js ESLint config from `.eslintrc.json`; keep `eslint` and `eslint-config-next` installed.
- `.env` is tracked in git in this repo; treat it as sensitive and avoid printing or modifying it unless the user explicitly asks.
- Next.js `14.0.1` has published security advisories; upgrade it separately and verify the UI before deployment.
