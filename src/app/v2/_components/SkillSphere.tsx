'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, TrackballControls } from '@react-three/drei'

const SphereExpertise = dynamic(() => import('../../../components/SphereExpertise/page'), { ssr: false })

export default function V2SkillSphere() {
  return (
    <div id="v2-sphere-target" className="relative hidden h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.08),transparent_65%)]" />
      <Suspense fallback={<div className="grid h-full place-content-center font-mono text-xs text-white/30">Rendering sphere...</div>}>
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#07090f', 45, 85]} />
          <Float speed={1.5} rotationIntensity={3} floatIntensity={1}>
            <SphereExpertise />
          </Float>
          <TrackballControls rotateSpeed={3} noPan noZoom />
        </Canvas>
      </Suspense>
      <span className="pointer-events-none absolute bottom-5 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
        Drag to explore
      </span>
    </div>
  )
}
