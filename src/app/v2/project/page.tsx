import Image from 'next/image'
import Link from 'next/link'
import { v2Projects } from '../data'

export default function V2ProjectsPage() {
  return (
    <main className="v2-container pb-20 pt-36">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/80">Projects</span>
        <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-6xl">Selected platforms and product work.</h1>
        <p className="mt-5 max-w-2xl text-sm text-white/50 sm:text-base">A focused set of projects that reflect operational software, workflow tooling, and product execution.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {v2Projects.map(project => {
            const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            return (
              <Link key={project.name} href={`/v2/project/${slug}`} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <div className="relative h-72">
                  <Image src={project.thumbnail} fill sizes="(min-width: 768px) 50vw, 100vw" alt={`${project.name} preview`} className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/10 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/70">{project.category}</span>
                  <h2 className="mt-3 text-2xl text-white">{project.name}</h2>
                  <p className="mt-3 text-sm text-white/55">{project.content}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
