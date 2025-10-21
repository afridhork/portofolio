'use client'

import LenisProvider from '@/libs/react-lenis'
import dynamic from 'next/dynamic'
import { Providers } from '@/app/providers'
import { useState } from 'react'

const Particles = dynamic(() => import('@/components/TsParticles/page'))

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isRendered, setIsRendered] = useState(false)
  const renderStatus = () => {
    setIsRendered(true)
  }

  return (
    <LenisProvider root>
      <Particles status={renderStatus} />
      {isRendered ? (
        <div className="flex justify-center overflow-x-auto">
          <Providers>{children}</Providers>
        </div>
      ) : null}
    </LenisProvider>
  )
}
