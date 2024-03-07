'use client'
import Breadcrumbs from '@/components/Breadcrumbs/page'
import HomeSection from '../section/landingPage/Home/page'
import ExpertiseSection from '../section/landingPage/Expertise/page'
import WorkSection from '../section/landingPage/Work/page'
import ExperienceSection from '../section/landingPage/Experience/page'
import { useEffect, useRef, useState } from 'react'
import { MotionStyle, useScroll } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'

export default function Home() {
  const [styleWork, setStyleWork] = useState({
    rotateX: '',
    scale:'' 
  })

  const [styleExperience, setStyleExperience] = useState({
    rotateX: '',
    scale:'' 
  })

  const forStyleWork = (value: any) => {
    setStyleWork(value)
  }

  const forStyleExperience = (value:any) => {
    setStyleExperience(value)
  }

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  })

  const style: MotionStyle = {
    rotateX: useSmooth(scrollYProgress, [0, 0.1], [2, 0]),
    scale: useSmooth(scrollYProgress, [0, 0.1], [0.8, 1])
  }

  const dataBreadcrumbs: string[] = ['Home', 'Expertise', 'Work', 'Experience']
  return (
    <div>
      {/* <ParticlesBackground/> */}
        <div className='fixed flex justify-center z-10 w-full pt-4'>
          <Breadcrumbs data={dataBreadcrumbs}/>
        </div>
        <div className='pt-60' ref={ref}>
          <div className='flex flex-col justify-center'>
            <HomeSection/>
            <ExpertiseSection style={style} styleFor={forStyleWork}/>
            <WorkSection style={styleWork} styleFor={forStyleExperience}/>
            <ExperienceSection style={styleExperience}/>
          </div>
        </div>
    </div>
  )
}
