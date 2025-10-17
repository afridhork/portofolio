import React from 'react'
import { useRouter } from 'next/navigation';
import {data} from '@/static/projectData'
import WrapperTag from '@/components/WrapperTagg/page'
import { Link } from '@chakra-ui/react';

const page = () => {   
   const Router = useRouter()
   const handleClick = (name: string) => {
      Router.push(`/projectDetail/${name}`)
   }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6'>
      {
         data.map((project,index) => {
            return(
               <div className='flex col-span-1 w-full py-3' key={index}>
                  <Link 
                     href={`/projectDetail/${project.name}`}
                     className="card border-1 max-w-[320px] cursor-pointer duration-500 ease-in-out hover:scale-105"
                     style={{ transformOrigin: index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right' }}
                  >
                     <div className="relative">
                        <div className="img-wrapper">
                           <img src={project.thumbnail} className='w-full' alt="" />
                        </div>
                     </div>
                     <div className="meta-wrapper overflow-hidden p-2 w-full">
                        <h4 className='py-1'>{project.name}</h4>
                        <div className='flex flex-wrap'>
                           {
                              project.techStack.map((item,j) => {
                                 return(
                                    <div className='m-1' key={j}>
                                       <WrapperTag item={item} />
                                    </div>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </Link>
               </div>
            )
         })
      }
    </div>
  )
}

export default page