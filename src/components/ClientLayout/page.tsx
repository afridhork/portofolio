'use client'

import LenisProvider from '../../libs/react-lenis'
import dynamic from 'next/dynamic'
import { Providers } from '../../app/providers'
import { useEffect, useState } from 'react'
import { useCheckDevice } from '../../app/store/store'

const Particles = dynamic(() => import('../../components/TsParticles/page'))

export default function ClientLayout({ children, device }: { children: React.ReactNode, device: string }) {
  const [isRendered, setIsRendered] = useState(false)
  const renderStatus = () => {
    setIsRendered(true)
  }
  const { updateDevice } = useCheckDevice()

  useEffect(() => {
    if(device){
      updateDevice(device)
    }
  }, [device])
  

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
