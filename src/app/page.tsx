'use client'
import Breadcrumbs from '@/components/Breadcrumbs/page'
import HomeSection from '../section/landingPage/Home/page'
import ExpertiseSection from '../section/landingPage/Expertise/page'
import ProjectsSection from '../section/landingPage/Projects/page'
import ExperienceSection from '../section/landingPage/Experience/page'
import { useEffect, useRef, useState } from 'react'
import { MotionStyle, useScroll } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import { useRouter } from 'next/navigation'

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

  const [styleproject, setStyleproject] = useState({
    rotateX: '',
    scale:'' 
  })

  const [styleExperience, setStyleExperience] = useState({
    rotateX: '',
    scale:'' 
  })

  const [breadcrumbs, setBreadcrumbs] = useState([
    {goTo: 0, name: 'Home'},
    {goTo: 0, name: 'Expertise'},
    {goTo: 0, name: 'Project'},
    {goTo: 0, name: 'Experience'},
  ])

  const [isBreadcumbsDone, setIsBreadcumbsDone] = useState([{
    home:false,
    expertise:false,
    project:false,
    experience:false
  }])

  useEffect(() => {
    const breadcrumbsLocalStorage = JSON.parse(localStorage.getItem("breadcrumbs") as any);
    const allBreadcrumbsDone = isBreadcumbsDone.every(breadcrumb => breadcrumb.home && breadcrumb.expertise && breadcrumb.experience);
    if (allBreadcrumbsDone && !breadcrumbsLocalStorage) {
      localStorage.setItem("breadcrumbs", JSON.stringify(breadcrumbs));
    } else if(allBreadcrumbsDone && breadcrumbsLocalStorage) {
      setBreadcrumbs(breadcrumbsLocalStorage);
    }
  }, [isBreadcumbsDone])
  
  const fromHome = (value: any) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Home'){
        return {
          ...object,
          goTo: value,
        }
      }
      setIsBreadcumbsDone(prevState => prevState.map(object => {
        if(!object.home){
          return {
            ...object,
            home: true,
          }
        }
        return object
      }))
      return object
    }))
  }

  const fromrExpertise = (value: any, pos: number) => {
    setStyleproject(value)
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Expertise'){
        return {
          ...object,
          goTo: pos - 30,
        }
      }
      setIsBreadcumbsDone(prevState => prevState.map(object => {
        if(!object.expertise){
          return {
            ...object,
            expertise: true,
          }
        }
        return object
      }))
      return object
    }))
  }

  const fromProject = (value: any, pos: number) => {
    setStyleExperience(value)
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Project'){
        return {
          ...object,
          goTo: pos + 50,
        }
      }
      setIsBreadcumbsDone(prevState => prevState.map(object => {
        if(!object.project){
          return {
            ...object,
            project: true,
          }
        }
        return object
      }))
      return object
    }))
  }

  const fromExperience = (value: any) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Experience'){
        return {
          ...object,
          goTo: value + 50,
        }
      }
      setIsBreadcumbsDone(prevState => prevState.map(object => {
        if(!object.experience){
          return {
            ...object,
            experience: true,
          }
        }
        return object
      }))
      return object
    }))
  }

  // const dataBreadcrumbs: string[] = ['Home', 'Expertise', 'project', 'Experience']
  return (
    <div>
      {/* <ParticlesBackground/> */}
        <div className='fixed flex justify-center z-10 w-full pt-4'>
          <Breadcrumbs data={breadcrumbs} isDetail={false}/>
        </div>
        <div className='pt-60' ref={ref}>
          <div className='flex flex-col justify-center'>
            <HomeSection getAttribute={fromHome}/>
            <ExpertiseSection style={styleExpertise} getAttribute={fromrExpertise}/>
            <ProjectsSection style={styleproject} getAttribute={fromProject}/>
            <ExperienceSection style={styleExperience} getAttribute={fromExperience}/>
          </div>
        </div>
    </div>
  )
}
