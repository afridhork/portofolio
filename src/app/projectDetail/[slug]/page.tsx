'use client'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import {data} from '@/static/projectData'
import {projectData} from '@/types/projectData'
import ImageSlider from '@/components/chakraCarousel'

const page = ({params}: {params: {slug: string}}) => {
  const dataBreadcrumbs: string[] = ['Main', 'Project Detail', `${params.slug.replace(/%20/g, " ")}`]
  const [breadcrumbs, setBreadcrumbs] = useState([
    {goTo: '/', name: 'Main'},
    {goTo: `/projectDetail/${params.slug.replace(/%20/g, " ")}`, name: `${params.slug.replace(/%20/g, " ")}`},
  ])
  const [projectData, setProjectData] = useState<projectData>({
    name: '',
    techStack:[],
    category:'',
    content:"",
    link:'',
    thumbnail: '',
    images:[{image:''}]
  })
  
  useEffect(() => {
    const projectDatas = [...data]
    for(let i in projectDatas){
      if(projectDatas[i].name === params.slug.replace(/%20/g, " ")){
        setProjectData(projectDatas[i as keyof typeof projectDatas] as projectData)        
      }
    }
  }, [])

  const transition = {
    type: 'spring',
    stiffness: 300,
    damping: 50,
    restDelta: 0.001
 }
  
  return (
    <div>
      <div className='fixed flex justify-center left-0 z-10 w-full pt-4 pb-44'>
        <Breadcrumbs data={breadcrumbs} isDetail={true}/>
      </div>
      <div className='flex justify-center pt-40 pb-10'>
        <div className='border border-white backdrop-blur-lg backdrop-filter w-[85%] sm:w-[65%] p-5 rounded-lg'>
          <div>
            <h5>{projectData.category}</h5>
            <span className='text-2xl sm:text-6xl text-white'>{params.slug.replace(/%20/g, " ")}</span>
          </div>
          <div className='pt-10'>
            <p>{projectData.content}</p>
          </div>
          <div className='grid grid-cols-2 gap-x-4 pt-5 pb-8'>
            <div className='col-span-1'>
              <h4 className='text-center pb-2'>Tech Stack</h4>
              <div className={`grid grid-cols-4 gap-y-4 pb-2`}>
                {
                  projectData.techStack.map((tech,index)=>{
                    return(
                      <div className='flex justify-center' key={index}>
                        <img src={`/assets/${tech === 'NextJs' ? 'test' : tech}.svg`} className='w-[20px] sm:w-[30px] h-[15px] sm:h-[20px]'/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='col-span-1'>
              <h4 className='text-center'>Url Link</h4>
              <a aria-label='to-url-project' className='flex justify-center items-center pt-2' href={projectData.link} target='_blank'>
                <img src="/assets/link.svg" className='w-[20px] h-[20px]' alt="" />
                <span className='text-[8px] sm:text-xs text-white'>{projectData.link}</span>
              </a>
            </div>
          </div>
          <div>
            {
              <ImageSlider slides={projectData.images} />
              // projectData.images.map((item,index) => {
              //   return(
              //     <div key={index} className='pb-5'>
              //     </div>
              //   )
              // })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page