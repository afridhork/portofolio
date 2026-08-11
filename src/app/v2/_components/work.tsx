'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { v2Projects } from '../data'

function ProjectCard({ project, index }: { project: (typeof v2Projects)[number], index: number }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const reveal = useTransform(scrollYProgress, [0.12, 0.35], [0, 1])
  const contentY = useTransform(reveal, [0, 1], [84, 0])
  const contentOpacity = useTransform(reveal, [0, 1], [0, 1])
  const mediaY = useTransform(reveal, [0, 1], [110, 0])
  const mediaOpacity = useTransform(reveal, [0, 1], [0, 1])
  const mediaScale = useTransform(reveal, [0, 1], [1.14, 1])
  const mediaClip = useTransform(reveal, [0, 1], ['inset(18% 10% 18% 10% round 2.5rem)', 'inset(0% 0% 0% 0% round 2.5rem)'])
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <motion.article
      ref={ref}
      className="grid min-h-[92svh] items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className={index % 2 ? 'lg:order-2' : ''}
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300/70">{project.category}</span>
        <h3 className="mt-4 max-w-xl text-4xl tracking-[-0.04em] text-white sm:text-6xl">{project.name}</h3>
        <p className="mt-6 max-w-lg text-sm text-white/55 sm:text-base">{project.content}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">{tech}</span>
          ))}
        </div>
        <Link href={`/v2/project/${slug}`} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 hover:text-emerald-200">
          View case study <span aria-hidden>→</span>
        </Link>
      </motion.div>

      <motion.div
        style={{ y: mediaY, opacity: mediaOpacity }}
        className={index % 2 ? 'lg:order-1' : ''}
      >
        <Link href={`/v2/project/${slug}`} className="group relative block h-[26rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] sm:h-[34rem] lg:h-[42rem]">
          <motion.div
            style={{ clipPath: mediaClip, scale: mediaScale }}
            className="absolute inset-0"
          >
            <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0">
              <Image src={project.thumbnail} fill sizes="(min-width: 1024px) 50vw, 100vw" alt={`${project.name} preview`} className="object-cover opacity-70 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-90" />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/90 via-[#07090f]/20 to-transparent" />
        </Link>
      </motion.div>
    </motion.article>
  )
}

function HorizontalProjectCard({ project, count }: { project: (typeof v2Projects)[number], count: number }) {
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const preview = project.images[0]?.image ?? project.thumbnail

  return (
    <article
      className="relative grid h-[74svh] shrink-0 grid-cols-[0.8fr_1.2fr] gap-8 overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:gap-12 lg:p-14"
      style={{ width: `calc((100% - ${(count - 1) * 2}rem) / ${count})` }}
    >
      <div className="relative z-10 flex min-w-0 flex-col justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300/75">{project.category}</span>
        <h3 className="mt-4 text-4xl tracking-[-0.04em] text-white lg:text-6xl">{project.name}</h3>
        <p className="mt-5 max-w-xl text-sm text-white/65 lg:text-base">{project.content}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/70">{tech}</span>
          ))}
        </div>
        <Link href={`/v2/project/${slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 hover:text-emerald-200">
          View case study <span aria-hidden>→</span>
        </Link>
      </div>

      <Link href={`/v2/project/${slug}`} className="group relative min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d111b]">
        <Image
          src={preview}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          alt={`${project.name} preview`}
          className="object-contain p-3 opacity-85 transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-100 lg:p-6"
        />
      </Link>
    </article>
  )
}

export function V2ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const labelY = useTransform(scrollYProgress, [0, 1], [56, -28])
  const titleY = useTransform(scrollYProgress, [0, 1], [88, -48])
  const linkY = useTransform(scrollYProgress, [0, 1], [110, -32])
  const desktopProjects = v2Projects.slice(0, 3)
  const desktopTrackX = useTransform(scrollYProgress, [0.18, 0.82], ['0%', `-${((desktopProjects.length - 1) / desktopProjects.length) * 100}%`])

  return (
    <section id="projects" ref={ref} className="v2-container py-28 lg:h-[320svh]">
      <div className="mx-auto max-w-7xl lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:overflow-hidden">
        <motion.span style={{ y: labelY }} className="block font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/80">Selected work</motion.span>
        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <motion.h2 style={{ y: titleY }} className="max-w-4xl text-4xl tracking-[-0.04em] text-white sm:text-6xl">Business platforms built around real operations.</motion.h2>
          <motion.div style={{ y: linkY }}>
            <Link href="/v2/project" className="shrink-0 text-sm text-white/55 hover:text-white">All projects →</Link>
          </motion.div>
        </div>

        <div className="mt-12 lg:hidden">
          {v2Projects.slice(0, 3).map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>

        <div className="relative mt-14 hidden overflow-hidden lg:block">
          <motion.div
            style={{ x: desktopTrackX, width: `${desktopProjects.length * 100}%` }}
            className="flex gap-8 will-change-transform"
          >
            {desktopProjects.map(project => <HorizontalProjectCard key={project.name} project={project} count={desktopProjects.length} />)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function V2ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const labelY = useTransform(scrollYProgress, [0, 1], [52, -28])
  const titleY = useTransform(scrollYProgress, [0, 1], [84, -40])
  const timelineY = useTransform(scrollYProgress, [0, 1], [110, -24])
  const metricsY = useTransform(scrollYProgress, [0, 1], [120, -18])
  const ctaY = useTransform(scrollYProgress, [0, 1], [132, -12])

  const experiences = [
    {
      period: 'Apr 2021 — Present',
      company: 'ATT Group',
      role: 'Senior Front-end Developer',
      points: [
        'Delivered features across frontend, backend, APIs, and database layers.',
        'Developed TMS workflows for air and ocean export operations.',
        'Built CRM dashboards and override-based Frappe/ERPNext customizations.',
        'Improved page rendering speed by 40% through API and state optimization.',
      ],
    },
    {
      period: '2022',
      company: 'Freelance / Self-employed',
      role: 'Full-stack Developer',
      points: [
        'Built custom applications with React.js and Express.js.',
        'Delivered database, API, UI, and initial deployment work.',
        'Worked directly with clients to turn requirements into working features.',
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="v2-container py-28 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.span style={{ y: labelY }} className="block font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/80">Experience</motion.span>
            <motion.h2 style={{ y: titleY }} className="mt-4 max-w-lg text-4xl tracking-[-0.04em] text-white sm:text-6xl">From interface details to operational systems.</motion.h2>
          </div>
          <motion.div style={{ y: timelineY }} className="relative border-l border-white/10 pl-7 sm:pl-10">
            {experiences.map((experience, index) => (
              <motion.article key={experience.company} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={index ? 'pb-4 pt-14' : 'pb-4'}>
                <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-[#07090f] bg-emerald-300" />
                <span className="font-mono text-xs text-white/40">{experience.period}</span>
                <h3 className="mt-3 text-2xl text-white">{experience.company}</h3>
                <p className="mt-1 text-sm text-emerald-300/75">{experience.role}</p>
                <ul className="mt-5 space-y-3">
                  {experience.points.map(point => <li key={point} className="text-sm leading-6 text-white/55">— {point}</li>)}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y: metricsY }} className="mt-28 grid grid-cols-2 overflow-hidden border-y border-white/10 lg:grid-cols-4">
          {[['5+', 'Years experience'], ['40%', 'Faster rendering'], ['5', 'Business platforms'], ['Full-stack', 'Feature delivery']].map(([value, label]) => (
            <div key={label} className="border-white/10 p-6 odd:border-r lg:border-r lg:last:border-r-0 sm:p-8">
              <strong className="block text-3xl text-white sm:text-5xl">{value}</strong>
              <span className="mt-2 block text-xs text-white/40 sm:text-sm">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: ctaY }} className="mt-28 border-t border-white/10 pt-12 text-center sm:pt-16">
          <h2 className="mx-auto max-w-4xl text-4xl tracking-[-0.04em] text-white sm:text-6xl">Let&apos;s build systems that simplify real operations.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/50 sm:text-base">Available for frontend, full-stack, Frappe customization, and workflow automation projects.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:afridhorkartawiria@gmail.com" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black">Email me</a>
            <a href="https://linkedin.com/in/afridho-r-kartawiria-aa8025182" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
