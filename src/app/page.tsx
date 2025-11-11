'use client'
import Breadcrumbs from '@/components/Breadcrumbs/page'
import HomeSection from '../section/landingPage/Home/page'
import ExpertiseSection from '../section/landingPage/Expertise/page'
import ProjectsSection from '../section/landingPage/Projects/page'
import ExperienceSection from '../section/landingPage/Experience/page'
import { useState } from 'react'

export default function Home() {    
  const [breadcrumbs, setBreadcrumbs] = useState([
    {goTo: 0, name: 'Home'},
    {goTo: 0, name: 'Expertise'},
    {goTo: 0, name: 'Project'},
    {goTo: 0, name: 'Experience'},
  ])

  const fromHome = (value: any) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Home'){
        return {
          ...object,
          goTo: value,
        }
      }
      return object
    }))
  }

  const fromExpertise = (pos: number) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Expertise'){
        return {
          ...object,
          goTo: pos - 30,
        }
      }
      return object
    }))
  }

  const fromProject = (pos: number) => {
    setBreadcrumbs(prevState => prevState.map(object => {
      if(object.name === 'Project'){
        return {
          ...object,
          goTo: pos + 50,
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
          goTo: value + 50,
        }
      }
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
        <div className='pt-60'>
          <div className='flex flex-col justify-center'>
            <HomeSection getAttribute={fromHome}/>
            <ExpertiseSection getAttribute={fromExpertise}/>
            <ProjectsSection getAttribute={fromProject}/>
            <ExperienceSection getAttribute={fromExperience}/>
          </div>
        </div>
    </div>
  )
}
