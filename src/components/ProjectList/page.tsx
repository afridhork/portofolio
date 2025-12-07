import React from 'react'
import {data} from '../../static/projectData'
import WrapperTag from '../../components/WrapperTagg/page'
import { projectData } from '../../types/projectData'
import Image from 'next/image';

interface ProjectListProps {
  onProjectClick?: (project: projectData) => void;
}

const page = ({ onProjectClick }: ProjectListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6'>
      {
         data.map((project,index) => {
            return(
               <div className='flex col-span-1 w-full py-3' key={index}>
                  <div
                     onClick={() => onProjectClick?.(project)}
                     className="card border-1 max-w-[320px] cursor-pointer duration-500 ease-in-out hover:scale-105"
                     style={{ transformOrigin: index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right' }}
                  >
                     <div className="relative">
                        <div className="img-wrapper">
                           <Image src={project.thumbnail} className='w-full' alt="" />
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
                  </div>
               </div>
            )
         })
      }
    </div>
  )
}

export default page