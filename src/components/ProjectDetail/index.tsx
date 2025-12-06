'use client'
import React from 'react'
import { projectData } from '../../types/projectData'
import ImageSlider from '../chakraCarousel'
import { motion } from 'framer-motion'

interface ProjectDetailProps {
  project: projectData;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600 z-20'
    >
      <div className='flex justify-center pt-10 pb-10 px-4'>
        <div className='border border-white backdrop-blur-lg backdrop-filter w-full max-w-4xl p-5 rounded-lg relative'>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-white hover:text-gray-400 text-2xl font-bold'
            aria-label='Close'
          >
            ✕
          </button>

          <div>
            <h5 className='text-gray-400'>{project.category}</h5>
            <span className='text-2xl sm:text-6xl text-white'>{project.name}</span>
          </div>

          <div className='pt-10'>
            <p className='text-gray-300'>{project.content}</p>
          </div>

          <div className='grid grid-cols-2 gap-x-4 pt-5 pb-8'>
            <div className='col-span-1'>
              <h4 className='text-center pb-2 text-white'>Tech Stack</h4>
              <div className='grid grid-cols-4 gap-y-4 pb-2'>
                {project.techStack.map((tech, index) => (
                  <div className='flex justify-center' key={index}>
                    <img
                      src={`/assets/${tech === 'NextJs' ? 'test' : tech}.svg`}
                      className='w-[20px] sm:w-[30px] h-[15px] sm:h-[20px]'
                      alt={tech}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='col-span-1'>
              <h4 className='text-center text-white'>URL Link</h4>
              <a
                aria-label='to-url-project'
                className='flex justify-center items-center pt-2'
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src="/assets/link.svg" className='w-[20px] h-[20px]' alt="" />
                <span className='text-[8px] sm:text-xs text-white ml-2 break-all'>{project.link}</span>
              </a>
            </div>
          </div>

          <div>
            <ImageSlider slides={project.images} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
