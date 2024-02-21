import React, { useEffect, useRef, useState} from 'react'
import { motion, MotionStyle, useScroll, AnimationProps } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import LenisProvider from '@/libs/react-lenis'
import ProjectList from '@/components/ProjectList/page'
import FindWord from '@/components/Games/FindWord/page'
import MatchWord from '@/components/Games/MatchWord/page'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import MatchJson from '@/static/matchWordJson.json'

interface Choice {
   name: string;
   id: number;
 }
 
 interface Quiz {
   id: number;
   question: string;
   answer_id: number;
   isAnswered?: boolean;
   isMatched?: boolean;
 }


export default function ExpertiseSection() {
   const [matchWordData, setMatchWordData] = useState({
      gameType : 1,
      questionList: [
         {
            id: 1,
            question: "",
            answer_id: 1,
            isMatched: false,
            isAnswered:false
         }
      ],
      answerList: [
         {
            id: 1,
            name: ""
         },
      ]
      })
   useEffect(() => {
      const data = {...MatchJson}
      setMatchWordData(data)
   }, [])
   


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


  return (
   <section className='relative pt-20'>
      <div style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 200, transition: { ...transition, delay: 0.4 } }}
            style={style}
            ref={terminalRef}
            className={`rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter p-8`}
            data-testid="terminal"
         >
            <span className='flex justify-center items-center text-white text-4xl'>My Projects</span>
            <Tabs className="grid relative h-[26rem] w-full overflow-hidden ">
               <TabList>
                  <Tab>Project's</Tab>
                  <Tab>Mini Games</Tab>
               </TabList>

               <TabPanels className="h-full relative overflow-hidden  pb-8">
                  <TabPanel className="h-full">
                     <LenisProvider className='h-full overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600'>
                        <ProjectList/>
                     </LenisProvider>
                  </TabPanel>
                  <TabPanel>
                     <div className='grid grid-cols-2 gap-x-2'>
                        <div className='col-span-1 border border-white h-[85%]'>
                           <FindWord question='question' answer='answer' />
                        </div>
                        <div className='relative col-span-1 border border-white h-[85%]'>
                           <MatchWord question={matchWordData.questionList} answer={matchWordData.answerList} />
                        </div>
                     </div>
                  </TabPanel>
               </TabPanels>
            </Tabs>
                     
         </motion.div>
      </div>
   </section>
  )
}
