import React, { Suspense, useEffect, useRef, useState } from 'react'
import { motion, MotionStyle, useScroll, AnimationProps, useTransform } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import { Canvas } from '@react-three/fiber'
import { Float, TrackballControls } from '@react-three/drei'
import SphereExpertise from '@/components/SphereExpertise/page'
import LenisProvider from '@/libs/react-lenis'
import { dataSkill } from '@/static/skillData'

export default function ExpertiseSection() {
   const terminalRef = useRef<HTMLDivElement>(null)
   const transition = {
      type: 'spring',
      stiffness: 300,
      damping: 50,
      restDelta: 0.001
   }
   
   const { scrollYProgress } = useScroll({
      target: terminalRef,
      offset: ['0', '1']
   })

   const style: MotionStyle = {
      rotateX: useSmooth(scrollYProgress, [0, 0.2], [2, 0]),
      scale: useSmooth(scrollYProgress, [0, 0.2], [0.9, 1])
   }

   const initial: AnimationProps['initial'] = { opacity: 0 }
   const animate: AnimationProps['animate'] = {
      opacity: 1,
      transition: {
         ease: 'easeInOut'
      }
   }
   const exit: AnimationProps['exit'] = {
      opacity: 0,
      transition: {
         ease: 'easeIn',
         duration: 0.2
      }
   }

   const listScroll: MotionStyle = {
      opacity: useTransform(scrollYProgress, [0.6, 1], [0, 1])
   }
   
   const data = [...dataSkill]

  return (
   <section className='relative'>
      <div style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 200, transition: { ...transition, delay: 0.4 } }}
            style={style}
            ref={terminalRef}
            className={`relative h-[32rem] w-full overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter p-10`}
            data-testid="terminal"
         >
            {/* <AnimatePresence>
               <div className='flex justify-center items-center'>
                  <div>
                     <div className='flex justify-center'>
                        <div className='relative'>
                           <div className='flex justify-center'>
                              <div className='card max-w-[330px] p-6'>
                                 <div className="flex items-center gap-3 mb-5">
                                    <img src={javascriptIcon.src} className='w-12 h-12' alt="" />
                                    <h2>Programming and Markup Languages</h2>
                                 </div>
                                 <h4 className='relative flex items-start'>Experienced in both functional and OOP: JavaScript, TypeScript, PHP, CSS, HTML.</h4>
                              </div>
                              <div className='card max-w-[330px] p-6'>
                                 <div className="flex items-center gap-3 mb-5 h-[64px]">
                                    <img src={gitIcon.src} className='w-12 h-12' alt="" />
                                    <h2>Development <br /> Tools</h2>
                                 </div>
                                 <h4 className='relative flex items-start'>Experienced in Git, GitLab, GitHub and VisualStudio Code.</h4>
                              </div>
                              <div className='card max-w-[330px] p-6'>
                                 <div className="flex items-center gap-3 mb-5">
                                    <img src={reactIcon.src} className='w-12 h-12' alt="" />
                                    <h2>Frameworks and Libraries</h2>
                                 </div>
                                 <h4 className='relative flex items-start'>Experienced in NodeJs, ReactJs, NextJs, Redux, VueJs, NuxtJs, Axios, Jest, React Test Library, NPM, Framer, Three, Bootstrap and Tailwind.</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </AnimatePresence> */}
            <span className='flex justify-center items-center text-white text-4xl'>My Skills</span>
            <div className='relative flex overflow-hidden h-full'>
               <motion.div
                  key="cloudSkills"
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  className="h-full w-full -translate-x-4 -translate-y-4 sm:flex-1"
               >
                  <Suspense
                     fallback={
                        <div className="grid h-full w-full animate-pulse place-content-center font-mono text-2xl">
                        {`re().rendering`}
                        </div>
                     }
                  >
                     <Canvas
                        dpr={[1, 2]}
                        camera={{ position: [0, 0, 35], fov: 90 }}
                        // resize={{ polyfill: ResizeObserver }}
                        data-testid="3d-canvas"
                     >
                        <fog attach="fog" args={['#0D0409', 0, 80]} />
                        <Float 
                           speed={2} // Animation speed, defaults to 1
                           rotationIntensity={5} // XYZ rotation intensity, defaults to 1
                           floatIntensity={1}
                        >
                           <SphereExpertise/>
                        </Float>
                        <TrackballControls rotateSpeed={5} noPan noZoom />
                     </Canvas>
                  </Suspense>
               </motion.div>
               <LenisProvider className='relative overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600 my-8'>
                  <motion.div
                     data-testid="skills-list"
                     key="skills-list"
                     // style={listScroll}
                     initial={initial}
                     animate={animate}
                     exit={exit}
                     className="overscroll-contain mb-8"
                  >
                     <ul className="flex flex-col gap-2">
                        {data.map((skillCategory, i) => (
                        <li key={i}>
                           <h2
                              data-testid="skill-categories"
                              className="text-lg font-bold leading-10"
                           >
                              {skillCategory.category}
                           </h2>
                           <ul>
                              {skillCategory.skillList.map((skill,j) => (
                              <li
                                 data-testid="skills"
                                 className="border-t border-white border-opacity-20 leading-10 text-white/75"
                                 key={j}
                              >
                                 {skill.name}
                              </li>
                              ))}
                           </ul>
                        </li>
                        ))}
                     </ul>
                  </motion.div>
               </LenisProvider>
            </div>
         </motion.div>
      </div>
   </section>
  )
}
