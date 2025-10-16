import React, { RefObject, Suspense, useEffect, useRef } from 'react'
import { motion, MotionStyle, useScroll, AnimationProps, useTransform } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import { Canvas } from '@react-three/fiber'
import { Float, TrackballControls } from '@react-three/drei'
import SphereExpertise from '@/components/SphereExpertise/page'
import LenisProvider from '@/libs/react-lenis'
import { dataSkill } from '@/static/skillData'

export default function ExpertiseSection({style, getAttribute}:{style: MotionStyle, getAttribute: (value:any, pos: number)=>void}) {
   const currentRef = useRef<HTMLDivElement>(null)
   const transition = {
      type: 'spring',
      stiffness: 300,
      damping: 50,
      restDelta: 0.001
   }
   
   const { scrollYProgress } = useScroll({
      target: currentRef,
      offset: ['0', '1']
   })

   const styleForWork: MotionStyle = {
      rotateX: useSmooth(scrollYProgress, [0, 1], [2, 0]),
      scale: useSmooth(scrollYProgress, [0, 1], [0.8, 1])
   }
   useEffect(() => {
      if(currentRef.current){
         setTimeout(() => {
            const rect = currentRef.current?.getBoundingClientRect();
            if(rect){
               getAttribute(styleForWork, rect.top)
            }
         }, 500);
      }
   }, [])
   
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
   <section 
      className='relative'
      ref={currentRef}
   >
      <div className='flex justify-center' style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.4 } }}
            style={style}
            // ref={currentRef}
            className={`relative h-[32rem] w-[85%] overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter p-10`}
            data-testid="terminal"
         >
            <span className='flex justify-center items-center text-white text-4xl'>My Skills</span>
            <div className='relative flex overflow-hidden h-full'>
               <motion.div
                  key="cloudSkills"
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  className="hidden sm:block lg:block h-full w-full -translate-x-4 -translate-y-4 sm:flex-1"
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
