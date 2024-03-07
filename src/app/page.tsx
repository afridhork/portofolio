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
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  })

  const styleExpertise: MotionStyle = {
    rotateX: useSmooth(scrollYProgress, [0, 0.1], [2, 0]),
    scale: useSmooth(scrollYProgress, [0, 0.1], [0.8, 1])
  }

  const [styleWork, setStyleWork] = useState({
    rotateX: '',
    scale:'' 
  })

  const [styleExperience, setStyleExperience] = useState({
    rotateX: '',
    scale:'' 
  })

  const [breadcrumbs, setBreadcrumbs] = useState([
    {topPos: 0, name: 'Home'},
    {topPos: 0, name: 'Expertise'},
    {topPos: 0, name: 'Work'},
    {topPos: 0, name: 'Experience'},
  ])

  
  const fromHome = (value: any) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Home'){
        return {
          ...object,
          topPos: value,
        }
      }
      return object
    }))
  }

  const fromrExpertise = (value: any, pos: number) => {
    setStyleWork(value)
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Expertise'){
        return {
          ...object,
          topPos: pos - 30,
        }
      }
      return object
    }))
  }

  const fromWork = (value: any, pos: number) => {
    setStyleExperience(value)
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Work'){
        return {
          ...object,
          topPos: pos + 50,
        }
      }
      return object
    }))
  }

  const fromExperience = (value: any) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Experience'){
        return {
          ...object,
          topPos: value + 50,
        }
      }
      return object
    }))
  }

  // const dataBreadcrumbs: string[] = ['Home', 'Expertise', 'Work', 'Experience']
  return (
    <div>
      {/* <ParticlesBackground/> */}
        <div className='fixed flex justify-center z-10 w-full pt-4'>
          <Breadcrumbs data={breadcrumbs}/>
        </div>
        <div className='pt-60' ref={ref}>
          <div className='flex flex-col justify-center'>
            <HomeSection getAttribute={fromHome}/>
            <ExpertiseSection style={styleExpertise} getAttribute={fromrExpertise}/>
            <WorkSection style={styleWork} getAttribute={fromWork}/>
            <ExperienceSection style={styleExperience} getAttribute={fromExperience}/>
          </div>
        </div>
    </div>
  )
}
