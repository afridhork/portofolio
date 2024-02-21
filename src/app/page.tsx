'use client'
import ParticlesBackground from '@/components/ParticlesBackground/page'
import Breadcrumbs from '@/components/Breadcrumbs/page'
import HomeSection from '../section/landingPage/Home/page'
import ExpertiseSection from '../section/landingPage/Expertise/page'
import WorkSection from '../section/landingPage/Work/page'
import ExperienceSection from '../section/landingPage/Experience/page'

export default function Home() {
  const dataBreadcrumbs: string[] = ['Home', 'Expertise', 'Work', 'Experience', 'Contact']
  return (
    <div>
      {/* <ParticlesBackground/> */}
        <div className='flex justify-center pt-4'>
          <Breadcrumbs data={dataBreadcrumbs}/>
        </div>
        <div className='flex justify-center pt-60'>
          <div className='px-20'>
            <HomeSection/>
            <ExpertiseSection/>
            <WorkSection/>
            <ExperienceSection/>
          </div>
        </div>
    </div>
  )
}
