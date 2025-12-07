import React from 'react'
import { projectData } from '../../types/projectData'
import ImageSlider from '../chakraCarousel'
import Image from 'next/image'

interface ProjectDetailProps {
  project: projectData;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className='h-full flex flex-col'>
      <div className='flex justify-between items-center pb-4 border-b border-gray-600'>
        <h3 className='text-white text-2xl'>{project.name}</h3>
        <button
          onClick={onClose}
          className='text-white hover:text-gray-300 text-3xl px-3 py-1 rounded transition-colors'
          aria-label="Close detail"
        >
          ×
        </button>
      </div>

      <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600 py-4'>
        <div>
          <h5 className='text-gray-400'>{project.category}</h5>
        </div>

        <div className='pt-4'>
          <p className='text-gray-300'>{project.content}</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 pb-6'>
          <div>
            <h4 className='text-center pb-3 text-white'>Tech Stack</h4>
            <div className='grid grid-cols-4 gap-y-4'>
              {project.techStack.map((tech, index) => (
                <div className='flex justify-center' key={index}>
                  <img
                    src={`/assets/${tech === 'NextJs' ? 'test' : tech}.svg`}
                    className='w-[25px] h-[20px]'
                    alt={tech}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-center pb-3 text-white'>URL Link</h4>
            <a
              aria-label='to-url-project'
              className='flex justify-center items-center gap-2'
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src="/assets/link.svg" className='w-[20px] h-[20px]' alt="" />
              <span className='text-xs text-blue-400 hover:text-blue-300 break-all'>
                {project.link}
              </span>
            </a>
          </div>
        </div>

        <div className='pt-4'>
          <ImageSlider slides={project.images} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
