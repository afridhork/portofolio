'use client'

/**
 * Scoped dark theme + design tokens for the /v2 portfolio redesign.
 * Imported only by v2 routes so the legacy `/` look is untouched.
 */
export default function V2Styles() {
  return (
    <style jsx global>{`
      :root {
        --v2-bg: #07090f;
        --v2-text: #e6e8ee;
        --v2-text-muted: #8b8f9f;
        --v2-border: rgba(255, 255, 255, 0.08);
        --v2-accent: #6ee7b7;
        --v2-accent-rgb: 110, 231, 183;
      }

      .v2-root {
        background: var(--v2-bg);
        color: var(--v2-text);
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        min-height: 100vh;
        overflow-x: clip;
        -webkit-font-smoothing: antialiased;
      }
      .v2-root h1, .v2-root h2, .v2-root h3, .v2-root h4 {
        color: var(--v2-text);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -0.02em;
      }
      .v2-root p {
        color: var(--v2-text-muted);
        line-height: 1.7;
      }
      .v2-section {
        position: relative;
        min-height: 100svh;
        display: flex;
        align-items: center;
      }
      .v2-root ::selection {
        background: rgba(var(--v2-accent-rgb), 0.3);
        color: #fff;
      }

      .v2-grid-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
        background-size: 64px 64px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
        pointer-events: none;
      }
      .v2-glow {
        position: fixed;
        top: -20%;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        height: 60vh;
        background: radial-gradient(ellipse at center, rgba(var(--v2-accent-rgb), 0.08) 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
        filter: blur(24px);
      }
      .v2-container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      @media (min-width: 640px) { .v2-container { padding-left: 2.5rem; padding-right: 2.5rem; } }
      @media (min-width: 1024px) { .v2-container { padding-left: 4rem; padding-right: 4rem; } }

      @media (prefers-reduced-motion: reduce) {
        .v2-root * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  )
}
