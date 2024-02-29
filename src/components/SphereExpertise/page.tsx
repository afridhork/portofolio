import { Spherical, Vector3 } from 'three'
import { useMemo } from 'react'
import SphereIcon from '../SphereIcon/page'
// import HomeSkillsIcon from './HomeSkillsIcon'
// import isFloat from '@/helpers/isFloat'

const SphereExpertise = (): JSX.Element => {
  const icons = useMemo(() => {
    const temp: Array<[Vector3, string]> = []
    const skills: string[] = [
      'Javascript',
      'php',
      'laravel',
      'Typescript',
      'Html5',
      'Css',
      'vsc',
      'Git',
      'Github',
      'Gitlab',
      'NodeJs',
      'Express',
      'NPM',
      'ReactJs',
      'Redux',
      'NextJs1',
      'VueJs',
      'NuxtJs',
      'Tailwind',
      'Bootstrap',
      'Framer',
      'Three',
      'React-Query',
      'Jest',
      'rtl'
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
    <group scale={0.9}>
      {icons.map(([pos, icon], index) => (
        <SphereIcon key={index} position={pos} icon={icon} />
      ))}
    </group>
  )
}
export default SphereExpertise