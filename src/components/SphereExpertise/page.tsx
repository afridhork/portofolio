import { Spherical, Vector3, type Group } from 'three'
import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import SphereIcon from '../SphereIcon/page'

const SphereExpertise = (): JSX.Element => {
  const group = useRef<Group>(null)
  const interacting = useRef(false)
  const { gl } = useThree()

  useEffect(() => {
    const element = gl.domElement
    const pause = () => { interacting.current = true }
    const resume = () => { interacting.current = false }
    element.addEventListener('pointerdown', pause)
    window.addEventListener('pointerup', resume)
    return () => {
      element.removeEventListener('pointerdown', pause)
      window.removeEventListener('pointerup', resume)
    }
  }, [gl])

  useFrame((_, delta) => {
    if (group.current && !interacting.current) group.current.rotation.y += delta * 0.12
  })

  const icons = useMemo(() => {
    const temp: Array<[Vector3, string]> = []
    const skills: string[] = [
      'Javascript',
      'Typescript',
      'Html5',
      'Css',
      'Git',
      'Github',
      'NodeJs',
      'Express',
      'ReactJs',
      'Redux',
      'NextJs',
      'VueJs',
      'NuxtJs',
      'Tailwind',
      'Bootstrap',
      'php',
      'laravel',
      'MySQL',
      'Redis',
      'Socketdotio',
      'Python',
      'Frappe',
      'ERPNext',
      'Three',
      'Framer'
    ]

    const isFloat = (number: number): boolean => {
      return Number(number) === number && number % 1 !== 0
    }

    const lengthSqrt = Math.sqrt(skills.length)
    const count = isFloat(lengthSqrt) ? Math.floor(lengthSqrt) + 1 : lengthSqrt

    const spherical = new Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    let currIndex = 0

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new Vector3().setFromSpherical(
            spherical.set(18, phiSpan * i, thetaSpan * j)
          ),
          skills[currIndex] !== undefined
            ? `/assets/${skills[currIndex]}.svg`
            : '/assets/lock.svg'
        ])
        currIndex++
      }
    }
    return temp
  }, [])

  return (
    <group ref={group} scale={0.9}>
      {icons.map(([pos, icon], index) => (
        <SphereIcon key={index} position={pos} icon={icon} />
      ))}
    </group>
  )
}
export default SphereExpertise
