import React, { useEffect, useRef } from 'react'
import ArrowAnimation from '../../../components/ArrowAnimation/page'
import { 
  motion,
  useScroll,
  type MotionStyle
} from 'framer-motion';
import useSmooth from '../../../hooks/useSmooth'
import { useStore } from '../../../app/store/store'

export default function HomeSection() {
  const currentRef = useRef<HTMLDivElement>(null)
  const { updateBreadcrumbGoTo } = useStore()
  
  const { scrollYProgress } = useScroll({
    target: currentRef,
    offset: ['0', '1']
  })

  const text: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.2], [1, 0])
  }

  useEffect(() => {
    if(currentRef.current){
       updateBreadcrumbGoTo('Home', 0)
    }
  }, [updateBreadcrumbGoTo])

  return (
    <section ref={currentRef} className='relative'>
      <motion.div 
        className='relative min-h-[140px] flex justify-center items-center pb-5' 
        style={{
          display: 'flex',
          ...text
        }}
      >
        <div className='fixed'>
          <span className='flex justify-center text-white text-3xl sm:text-5xl lg:text-8xl'>Afridho R Kartawiria</span>
          <span className='flex justify-center text-white text-sm sm:text-lg lg:text-2xl mt-0 sm:mt-3'>SOFTWARE ENGINEER AND FRONT END DEVELOPER</span>
        </div>
      </motion.div>
      <motion.div style={{...text}}>
        <ArrowAnimation/>
      </motion.div>
    </section>
  )
}
