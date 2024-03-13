import React, { Suspense, useEffect, useRef } from 'react'
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


const Experience = ({style, getAttribute}:{style: MotionStyle, getAttribute: (value:any)=>void}) => {
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

   const style1: MotionStyle = {
      rotateX: useSmooth(scrollYProgress, [0, 0.2], [2, 0]),
      scale: useSmooth(scrollYProgress, [0, 0.2], [0.9, 1])
   }

   useEffect(() => {
      getAttribute(currentRef.current?.offsetTop)
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
   const contact = [
      {socialMedia: 'GitHub', img:'/assets/Github.svg', url: 'https://github.com/afridhork'},
      {socialMedia: 'Instagram', img:'/assets/Instagram.svg', url: 'https://www.instagram.com/pidorkartawiria/'},
      {socialMedia: 'LinkedIn', img:'/assets/Linkedin.svg', url: 'https://id.linkedin.com/in/afridho-r-kartawiria-aa8025182'},
      {socialMedia: 'Gmail', img:'/assets/Gmail.svg', url:'https://mail.google.com/mail/u/0/?fs=1&to=afridhorkartawiria@gmail.com&tf=cm'},
   ]
  return (
   <section 
      className='relative pt-20'
      ref={currentRef}
   >
      <div className='flex justify-center' style={{ perspective: '10rem' }}>
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.4 } }}
            style={style}
            // ref={currentRef}
            className={`relative h-[32rem] w-[85%] overflow-hidden rounded-lg border border-white bg-opacity-50 font-mono text-sm text-gray-300 backdrop-blur-lg backdrop-filter mb-20 p-10`}
            data-testid="terminal"
         >
            <span className='flex justify-center items-center text-white text-4xl'>About</span>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 pt-8 h-full'>
               <div className='hidden sm:hidden lg:block relative col-span-1 align-center top-[15%]'>
                  <div>
                     <span className='block text-lg sm:text-2xl lg:text-4xl'>Afridho Rachmadi <br /> Kartawiria</span>
                     <span className='block'>SOFTWARE ENGINEER AND FRONT END DEVELOPER</span>
                     <div className='flex items-center cursor-pointer'>
                        <Link href={`https://drive.google.com/file/d/1gpWsVksiB-qi19I4st8wWbFSFWSzGr6m/view?usp=sharing`} target='_blank'><span className='block text-sm '>Resume</span></Link>
                        <svg fill="#e5e7eb" height="9" width="9" version="1.1" id="arrow_rightup" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                           <g>
                              <g>
                                 <path d="M511.894,19.228c-0.031-0.316-0.09-0.622-0.135-0.933c-0.054-0.377-0.098-0.755-0.172-1.13
                                    c-0.071-0.358-0.169-0.705-0.258-1.056c-0.081-0.323-0.152-0.648-0.249-0.968c-0.104-0.345-0.234-0.678-0.355-1.015
                                    c-0.115-0.319-0.22-0.641-0.35-0.956c-0.13-0.315-0.284-0.616-0.428-0.923c-0.153-0.324-0.297-0.651-0.467-0.969
                                    c-0.158-0.294-0.337-0.574-0.508-0.86c-0.186-0.311-0.362-0.626-0.565-0.93c-0.211-0.316-0.447-0.613-0.674-0.917
                                    c-0.19-0.253-0.366-0.513-0.568-0.76c-0.443-0.539-0.909-1.058-1.402-1.551c-0.004-0.004-0.007-0.008-0.011-0.012
                                    c-0.004-0.004-0.008-0.006-0.011-0.01c-0.494-0.493-1.012-0.96-1.552-1.403c-0.247-0.203-0.507-0.379-0.761-0.569
                                    c-0.303-0.227-0.6-0.462-0.916-0.673c-0.304-0.203-0.619-0.379-0.931-0.565c-0.286-0.171-0.565-0.35-0.859-0.508
                                    c-0.318-0.17-0.644-0.314-0.969-0.467c-0.307-0.145-0.609-0.298-0.923-0.429c-0.315-0.13-0.637-0.236-0.957-0.35
                                    c-0.337-0.121-0.669-0.25-1.013-0.354c-0.32-0.097-0.646-0.168-0.969-0.249c-0.351-0.089-0.698-0.187-1.055-0.258
                                    c-0.375-0.074-0.753-0.119-1.13-0.173c-0.311-0.044-0.617-0.104-0.933-0.135C492.072,0.037,491.37,0,490.667,0H213.333
                                    C201.551,0,192,9.551,192,21.333c0,11.782,9.551,21.333,21.333,21.333h225.83L6.248,475.582c-8.331,8.331-8.331,21.839,0,30.17
                                    c8.331,8.331,21.839,8.331,30.17,0L469.333,72.837v225.83c0,11.782,9.551,21.333,21.333,21.333S512,310.449,512,298.667V21.335
                                    C512,20.631,511.963,19.928,511.894,19.228z"/>
                              </g>
                           </g>
                        </svg>
                     </div>
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
                     <div className='block sm:block lg:hidden relative align-center mb-5'>
                        <div>
                           <span className='block text-2xl sm:text-2xl lg:text-4xl'>Afridho Rachmadi <br className='block' /> Kartawiria</span>
                           <span className='block'>SOFTWARE ENGINEER AND FRONT END DEVELOPER</span>
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
                     <h5>Welcome to my portfolio! As a front-end web developer, I specialize in crafting engaging and intuitive user experiences. With expertise in technologies like HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I bring ideas to life and create dynamic web applications. Whether it's building responsive layouts, implementing sleek animations, or optimizing for performance, I strive to deliver high-quality solutions that exceed expectations. Take a look around to explore my projects and get in touch to discuss how we can collaborate on your next digital venture!</h5>
                     <span className='block text-xl sm:text-xl lg:text-2xl py-2'>Experience</span>
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