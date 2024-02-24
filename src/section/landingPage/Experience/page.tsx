import React, { Suspense, useRef } from 'react'
import { AnimationProps, MotionStyle, motion, useScroll, useTransform } from 'framer-motion'
import useSmooth from '@/hooks/useSmooth'
import { Accordion } from '@chakra-ui/react'
import { AccordionItem } from '@chakra-ui/react'
import { AccordionButton } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { AccordionIcon } from '@chakra-ui/react'
import { AccordionPanel } from '@chakra-ui/react'
import LenisProvider from '@/libs/react-lenis'
import Link from 'next/link'

// import GitHub from '/assets/Github.svg'
// import Gmail from '/assets/Gmail.svg'
// import LinkedIn from '/assets/Gmail.svg'
// import Instagram from '/assets/Gmail.svg'


const Experience = () => {
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
   const contact = [
      {socialMedia: 'GitHub', img:'/assets/Github.svg', url: 'https://github.com/afridhork'},
      {socialMedia: 'Instagram', img:'/assets/Instagram.svg', url: 'https://www.instagram.com/pidorkartawiria/'},
      {socialMedia: 'LinkedIn', img:'/assets/Linkedin.svg', url: 'https://id.linkedin.com/in/afridho-r-kartawiria-aa8025182'},
      {socialMedia: 'Gmail', img:'/assets/Gmail.svg', url:'https://mail.google.com/mail/u/0/?fs=1&to=afridhorkartawiria@gmail.com&tf=cm'},
   ]
  return (
   <section className='relative pt-20 pb-44'>
      {/* <div style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 200, transition: { ...transition, delay: 0.4 } }}
            style={style}
            ref={terminalRef}
            className={`relative h-[32rem] w-full overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter p-10`}
            data-testid="terminal"
         >
            <span className='flex justify-center items-center text-white text-4xl'>My Experience</span>
            <div className='pt-24 px-20'>
               <Accordion allowToggle>
                  <AccordionItem>
                     <h2>
                        <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                           Educational Experience
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                        <h4>Computer Science University of Lampung (2019-2020)</h4>
                        <p>I am Graduated with a bachelor's degree and learning the basics of programming and IT-related concepts here.</p>
                     </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                     <h2>
                        <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                           Work Experience
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                        <h4>ATT Group (2021-present)</h4>
                        <p>Crafting websites as a front-end developer with Nuxt.js or React.js, serving as the JavaScript framework and library. Slicing the design from Figma with Bootstrap as the CSS library and seamlessly connecting to APIs with the power of Axios. While working here, I also delved into technologies beyond those used in the office, such as the latest versions of React.js, Next.js, Redux toolkit, Tailwind, and more.</p>
                     </AccordionPanel>
                  </AccordionItem>
               </Accordion>
            </div>
         </motion.div>
      </div> */}
      <div style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 200, transition: { ...transition, delay: 0.4 } }}
            style={style}
            ref={terminalRef}
            className={`relative h-[32rem] w-full overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter mb-20 p-10`}
            data-testid="terminal"
         >
            <span className='flex justify-center items-center text-white text-4xl'>About</span>
            <div className='grid grid-cols-2 pt-8 h-full'>
               <div className='relative col-span-1 align-center top-[15%]'>
                  <div>
                     <span className='text-4xl'>Afridho Rachmadi <br /> Kartawiria</span>
                     <h4>SOFTWARE ENGINEER AND FRONT END DEVELOPER</h4>
                  </div>
                  <div className='flex'>
                     {
                        contact.map((data,index)=>{
                           return(
                              <Link href={data.url} target='_blank' className='cursor-pointer' key={index}>
                                 <img src={data.img} alt="" className={`w-[30px] h-[22px] ${index === 0 ? 'pr-1' : index === contact.length+1 ? 'pl-1' : 'px-1' }`} />
                              </Link>
                           )
                        })
                     }
                  </div>
               </div>
               <div className="col-span-1 h-full overflow-hidden pb-12">
                  <LenisProvider className='h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600'>
                     <h5>Welcome to my portfolio! As a front-end web developer, I specialize in crafting engaging and intuitive user experiences. With expertise in technologies like HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I bring ideas to life and create dynamic web applications. Whether it's building responsive layouts, implementing sleek animations, or optimizing for performance, I strive to deliver high-quality solutions that exceed expectations. Take a look around to explore my projects and get in touch to discuss how we can collaborate on your next digital venture!</h5>
                     <h1 className='py-2'>Experience</h1>
                     <Accordion allowToggle>

                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                              <Box as="span" flex='1' textAlign='left'>
                                 Educational Experience
                              </Box>
                              <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              <h4>Computer Science University of Lampung (2019-2020)</h4>
                              <p>I am Graduated with a bachelor's degree and learning the basics of programming and IT-related concepts here.</p>
                           </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                           <h2>
                              <AccordionButton>
                              <Box as="span" flex='1' textAlign='left'>
                                 Work Experience
                              </Box>
                              <AccordionIcon />
                              </AccordionButton>
                           </h2>
                           <AccordionPanel pb={4}>
                              <h4>ATT Group (2021-present)</h4>
                              <p>Crafting websites as a front-end developer with Nuxt.js or React.js, serving as the JavaScript framework and library. Slicing the design from Figma with Bootstrap as the CSS library and seamlessly connecting to APIs with the power of Axios. While working here, I also delved into technologies beyond those used in the office, such as the latest versions of React.js, Next.js, Redux toolkit, Tailwind, and more.</p>
                           </AccordionPanel>
                        </AccordionItem>

                     </Accordion>
                  </LenisProvider>
               </div>
            </div>
         </motion.div>
      </div>
   </section>
  )
}

export default Experience