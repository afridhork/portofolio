# AfridhoRK Portfolio

Personal portfolio for Afridho R Kartawiria, showcasing frontend and software engineering projects through an animated, interactive interface.

## Features

- Responsive landing page with Home, Expertise, Projects, and Experience sections
- Animated UI powered by Framer Motion and Lenis
- Interactive project gallery and detail pages
- Mini games and an OpenRouter-backed AI chatbot
- Three.js/React Three Fiber visuals and particle effects

## Tech Stack

- Next.js 14 App Router and React 18
- TypeScript
- Tailwind CSS and Chakra UI
- Framer Motion and Lenis
- Zustand
- React Three Fiber, Drei, and tsParticles

## Local Development

Requirements: Node.js 20 and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3005](http://localhost:3005).

The chatbot requires this environment variable:

```bash
OPENROUTER_API_KEY=your_key
```

Keep credentials in an ignored local environment file and never commit real keys.

## Verification

```bash
npm run lint
npm run build
```

## Production

The app uses Next.js standalone output and includes a multi-stage Docker build:

```bash
docker compose up --build
```

The container exposes port `3005`.

## Project Structure

- `src/app` — routes, layout, providers, and API handlers
- `src/components` — reusable UI components
- `src/section` — landing-page sections and feature UI
- `src/static` — portfolio content and static game data
- `src/assets`, `public/assets` — images, icons, and videos
