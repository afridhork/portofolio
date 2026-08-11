import type { Metadata } from 'next'
import V2Styles from './styles'
import V2Navbar from './_components/Navbar'

export const metadata: Metadata = {
  title: 'Afridho R. Kartawiria — Senior Front-end Engineer',
  description: 'Senior Front-end Engineer | Full-stack & AI Integration. 5+ years building business platforms and real-time applications.',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-root">
      <V2Styles />
      <div className="v2-grid-bg" />
      <div className="v2-glow" />
      <V2Navbar />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
