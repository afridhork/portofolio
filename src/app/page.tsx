'use client'
import Breadcrumbs from '../components/Breadcrumbs'
import HomeSection from '../section/landingPage/Home/page'
import ExpertiseSection from '../section/landingPage/Expertise/page'
import ProjectsSection from '../section/landingPage/Projects/page'
import ExperienceSection from '../section/landingPage/Experience/page'
import { useStore } from '../app/store/store'

export default function Home() {    
  const { breadcrumbs } = useStore()

  return (
    <div>
      <div className='fixed flex justify-center z-10 w-full pt-4'>
        <Breadcrumbs data={breadcrumbs} isDetail={false}/>
      </div>
      <div className='pt-60'>
        <div className='flex flex-col justify-center'>
          <HomeSection />
          <ExpertiseSection />
          <ProjectsSection />
          <ExperienceSection />
        </div>
      </div>
    </div>
  )
}
