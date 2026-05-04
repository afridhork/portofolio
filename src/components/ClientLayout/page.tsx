'use client'

import LenisProvider from '../../libs/react-lenis'
import dynamic from 'next/dynamic'
import { Providers } from '../../app/providers'
import { useEffect, useState } from 'react'
import { useStore } from '../../app/store/store'
import { motion, AnimatePresence } from 'framer-motion'

const Particles = dynamic(() => import('../../components/TsParticles/page'))

export default function ClientLayout({ children, device }: { children: React.ReactNode, device: string }) {
  const [isRendered, setIsRendered] = useState(false)
  const renderStatus = () => {
    setIsRendered(true)
  }
  const { updateDevice } = useStore()

  useEffect(() => {
    if(device){
      updateDevice(device)
    }
  }, [device])
  

  return (
    <LenisProvider root>
      <Particles status={renderStatus} />
      <AnimatePresence>
        {isRendered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex justify-center overflow-x-auto"
          >
            <Providers>{children}</Providers>
          </motion.div>
        )}
      </AnimatePresence>
    </LenisProvider>
  )
}
