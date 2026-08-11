'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import V2SkillSphere from './SkillSphere'

export function V2HomeSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -220])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="home" ref={ref} className="v2-section v2-container overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-[44%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/[0.08] blur-[120px] sm:h-[46rem] sm:w-[46rem]"
      />
      <motion.div style={{ y, opacity }} className="mx-auto flex w-full max-w-7xl flex-col justify-center pt-24 sm:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for new projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-6xl text-left font-semibold tracking-[-0.04em] text-white"
          style={{ fontSize: 'clamp(4rem, 11vw, 9rem)' }}
        >
          I build systems
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            that make
          </span>
          <br />
          real operations feel simple.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl text-left text-sm uppercase tracking-[0.22em] text-white/62 sm:text-base"
        >
          Senior Front-end Engineer — Full-stack systems, Frappe customization, AI-assisted workflows.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-left text-sm text-white/45 sm:text-base"
        >
          5+ years building business dashboards, CRM, TMS, LMS, and internal platforms across frontend, backend, API, and workflow layers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]">
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1qqK0X0AgphDBRodsZDD_csYpQLjwkEyZ/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5">
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-white/30">
        Scroll
      </motion.div>
    </section>
  )
}

export function V2ExpertiseSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const labelY = useTransform(scrollYProgress, [0, 1], [48, -32])
  const titleY = useTransform(scrollYProgress, [0, 1], [72, -56])
  const bodyY = useTransform(scrollYProgress, [0, 1], [90, -24])
  const sphereY = useTransform(scrollYProgress, [0, 1], [90, -90])
  const groups = [
    { title: 'Frontend Engineering', items: ['TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Redux', 'Zustand'] },
    { title: 'Backend & API', items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST APIs', 'API design'] },
    { title: 'Data & Real-time', items: ['MySQL', 'Redis', 'WebSocket', 'Socket.IO', 'SQL query optimization'] },
    { title: 'Frappe & ERPNext', items: ['Frappe CRM', 'Custom apps', 'Overrides', 'Workflows', 'Reports'] },
  ]

  return (
    <section id="expertise" ref={ref} className="v2-section v2-container py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <motion.span style={{ y: labelY }} className="block font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/80">Expertise</motion.span>
          <motion.h2 style={{ y: titleY }} className="mt-4 max-w-xl text-4xl text-white sm:text-6xl">Interfaces, workflows, and systems shaped for daily use.</motion.h2>
          <motion.p style={{ y: bodyY }} className="mt-5 max-w-lg text-sm text-white/55 sm:text-base">
            My focus spans frontend systems, API integration, operational tooling, real-time experiences, and Frappe-based business workflow customization.
          </motion.p>
          <motion.div style={{ y: sphereY }} className="mt-6">
            <V2SkillSphere />
          </motion.div>
        </div>

        <div className="space-y-5">
          {groups.map(group => (
            <article key={group.title} className="border-t border-white/10 py-8 sm:py-10">
              <h3 className="text-xl text-white sm:text-2xl">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map(item => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
