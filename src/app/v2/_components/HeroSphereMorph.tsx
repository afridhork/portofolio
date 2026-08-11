'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Svg, type SvgProps } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { Spherical, Vector3, type Object3D } from 'three'
import type { MutableRefObject } from 'react'
import { motion, useTransform, type MotionValue } from 'framer-motion'

// Must match SphereExpertise so the handoff into the interactive sphere is seamless.
const SKILLS = [
  'Javascript', 'Typescript', 'Html5', 'Css', 'Git', 'Github',
  'NodeJs', 'Express', 'ReactJs', 'Redux', 'NextJs', 'VueJs',
  'NuxtJs', 'Tailwind', 'Bootstrap', 'php', 'laravel', 'MySQL',
  'Redis', 'Socketdotio', 'Python', 'Frappe', 'ERPNext',
]

type IconState = { scatter: Vector3; sphere: Vector3; src: string }

// Deterministic pseudo-random → stable scatter across renders.
function makeRandom(seed: number) {
  const s = Math.sin(seed * 999.13) * 43758.5453
  return s - Math.floor(s)
}

function buildIconStates(): IconState[] {
  const isFloat = (n: number) => Number(n) === n && n % 1 !== 0
  const lengthSqrt = Math.sqrt(SKILLS.length)
  const count = isFloat(lengthSqrt) ? Math.floor(lengthSqrt) + 1 : lengthSqrt
  const spherical = new Spherical()
  const phiSpan = Math.PI / (count + 1)
  const thetaSpan = (Math.PI * 2) / count

  const states: IconState[] = []
  let currIndex = 0
  for (let i = 1; i < count + 1; i++) {
    for (let j = 0; j < count; j++) {
      spherical.set(18, phiSpan * i, thetaSpan * j)
      const sphere = new Vector3().setFromSpherical(spherical)

      // Scatter widely across the hero viewport (world units; camera at z=35, fov=90).
      const sx = (makeRandom(currIndex + 1) - 0.5) * 96
      const sy = (makeRandom(currIndex + 2) - 0.5) * 52
      const sz = (makeRandom(currIndex + 3) - 0.5) * 24
      states.push({
        scatter: new Vector3(sx, sy, sz),
        sphere,
        src: SKILLS[currIndex] ? `/assets/${SKILLS[currIndex]}.svg` : '/assets/lock.svg',
      })
      currIndex++
    }
  }
  return states
}

function MorphIcon({
  iconState,
  progressRef,
  offsetRef,
  index,
}: {
  iconState: IconState
  progressRef: MutableRefObject<number>
  offsetRef: MutableRefObject<Vector3>
  index: number
}) {
  const ref = useRef<Object3D & SvgProps>(null)

  useFrame((fs) => {
    if (!ref.current) return
    const p = progressRef.current
    const t = fs.clock.elapsedTime

    // Idle drift fades out as icons converge.
    const drift = Math.max(0, 1 - p * 1.6)
    const dx = Math.sin(t * 0.6 + index) * 1.2 * drift
    const dy = Math.cos(t * 0.5 + index * 0.9) * 1.2 * drift

    // Sphere target = local spherical position + live offset (where SkillSphere sits on screen).
    const ox = offsetRef.current.x
    const oy = offsetRef.current.y
    const oz = offsetRef.current.z
    const tx = iconState.sphere.x + ox
    const ty = iconState.sphere.y + oy
    const tz = iconState.sphere.z + oz

    ref.current.position.x = iconState.scatter.x + (tx - iconState.scatter.x) * p + dx
    ref.current.position.y = iconState.scatter.y + (ty - iconState.scatter.y) * p + dy
    ref.current.position.z = iconState.scatter.z + (tz - iconState.scatter.z) * p

    ref.current.quaternion.copy(fs.camera.quaternion)
    const s = 0.18 + p * 0.14
    ref.current.scale.setScalar(s)
  })

  return (
    <Svg
      ref={ref}
      src={iconState.src}
      scale={0.18}
      fillMaterial={{ color: '#fff', transparent: true, opacity: 0.85 }}
    />
  )
}

function MorphScene({
  progressRef,
  offsetRef,
}: {
  progressRef: MutableRefObject<number>
  offsetRef: MutableRefObject<Vector3>
}) {
  const states = useMemo(buildIconStates, [])
  return (
    <group scale={0.9}>
      {states.map((s, i) => (
        <MorphIcon key={i} iconState={s} progressRef={progressRef} offsetRef={offsetRef} index={i} />
      ))}
    </group>
  )
}

export default function HeroSphereMorph({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const progressRef = useRef(0)
  // Fallback offset before measurement; updated to the actual SkillSphere screen center.
  const offsetRef = useRef(new Vector3(-20, -6, 0))

  // Convergence completes by the time Expertise is centered (~0.5 of the section travel).
  const morphProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  useTransform(morphProgress, (v) => {
    progressRef.current = v
    return v
  })
  const opacity = useTransform(scrollYProgress, [0.42, 0.5], [1, 0])

  // Measure where the interactive SkillSphere sits and map it to world coords.
  useEffect(() => {
    const compute = () => {
      const el = document.getElementById('v2-sphere-target')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const w = window.innerWidth
      const h = window.innerHeight
      const ndcX = (cx / w) * 2 - 1
      // Expertise sphere settles near viewport center when its section enters.
      const ndcY = 0
      const aspect = w / h
      const halfH = 35 // camera z=35, fov=90 → tan(45°)=1
      offsetRef.current.set(ndcX * halfH * aspect, ndcY * halfH, 0)
    }
    compute()
    window.addEventListener('resize', compute)
    const t = setTimeout(compute, 700) // re-measure after layout/fonts settle
    return () => {
      window.removeEventListener('resize', compute)
      clearTimeout(t)
    }
  }, [])

  return (
    <motion.div style={{ opacity }} className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#07090f', 55, 115]} />
        <MorphScene progressRef={progressRef} offsetRef={offsetRef} />
      </Canvas>
    </motion.div>
  )
}
