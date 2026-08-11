# Project Instructions

## Scope
- This repository is a personal portfolio built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Chakra UI, Three.js, and Framer Motion.
- Keep project-specific changes in `src/`; static portfolio content belongs in `src/static/`, shared types in `src/types/`, and reusable UI in `src/components/`.

## Working Rules
- Read the relevant file and trace its imports/usages before editing.
- Prefer the smallest working diff. Do not refactor unrelated code or overwrite existing user changes.
- Keep TypeScript strictness enabled; do not weaken `tsconfig.json` to bypass errors.
- Do not add dependencies unless an existing/native solution is insufficient.
- Keep secrets out of source control. Never read or print `.env` contents.
- Preserve the existing visual behavior unless the task explicitly requests UI changes.
- For project data, update `src/static/projectData.ts` and keep `ProjectData` in `src/types/projectData.ts` consistent.
- Use `next/image` for new local image usage when practical; preserve existing image behavior during unrelated changes.

## Verification
- Install with `npm ci` when dependencies need to be restored.
- Run `npm run lint` and `npm run build` after code changes.
- CodeGraph is initialized in `.codegraph/`; use it for symbol/call-path/impact exploration when relevant, then run `codegraph sync .` after source changes.
- Do not commit, push, or rewrite history unless explicitly requested.

## Known Constraints
- The AI chat endpoint requires `OPENROUTER_API_KEY` at runtime.
- Development runs on port 3005 (`npm run dev`).
- The working tree may contain user changes; inspect `git status` before editing and avoid unrelated files.
