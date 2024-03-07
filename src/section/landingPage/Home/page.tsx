import React, { useRef } from 'react'
import ArrowAnimation from '@/components/ArrowAnimation/page'
import { 
  motion,
  useScroll,
  type MotionStyle
} from 'framer-motion';
import useSmooth from '@/hooks/useSmooth'

export default function HomeSection({getAttribute}: {getAttribute: (value:any)=> void}) {
  const currentRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: currentRef,
    offset: ['0', '1']
  })

  const text: MotionStyle = {
    opacity: useSmooth(scrollYProgress, [0, 0.2], [1, 0])
  }

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
      {/* <div style={{ perspective: '10rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 200, transition: { ...transition, delay: 0.4 } }}
          style={style}
          ref={terminalRef}
          onClick={() => promptRef.current?.focus()}
          className={`${className} h-[32rem] w-full  overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter`}
          data-testid="terminal"
        >
        </motion.div>
      </div> */}
      <motion.div style={{...text}}>
        <ArrowAnimation/>
      </motion.div>
    </section>
  )
}
