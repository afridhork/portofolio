import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getV2ProjectBySlug } from '../../data'

export default function V2ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getV2ProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="v2-container pb-20 pt-36">
      <div className="mx-auto max-w-6xl">
        <Link href="/v2/project" className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white/70">
          ← Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/70">{project.category}</span>
            <h1 className="mt-4 text-4xl text-white sm:text-6xl">{project.name}</h1>
            <p className="mt-6 max-w-2xl text-sm text-white/55 sm:text-base">{project.content}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-lg bg-emerald-300 px-5 py-3 text-sm font-semibold text-black">
              Open link
            </a>
          </div>

          <div className="space-y-4">
            {project.images.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                <Image src={item.image} alt={`${project.name} screenshot ${index + 1}`} className="h-auto w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
