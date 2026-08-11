'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { label: 'Home', href: '/v2#home' },
  { label: 'Expertise', href: '/v2#expertise' },
  { label: 'Work', href: '/v2#projects' },
  { label: 'About', href: '/v2#experience' },
]

export default function V2Navbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-emerald-300"
        style={{ scaleX }}
      />
      <header className="fixed inset-x-0 top-0 z-50 v2-container">
        <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between border-b border-white/10 px-0 py-4 backdrop-blur-sm">
          <a href="/v2#home" className="font-mono text-sm font-semibold text-white">
            ARK<span className="text-emerald-300">.</span>
          </a>
          <div className="flex items-center gap-4 sm:gap-7">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white sm:text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
