import { useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

interface breadcrumbs {
   goTo: number | string,
   name: string
}

export default function Breadcrumbs({data, isDetail}: {data:breadcrumbs[], isDetail: boolean}) {
   const length = data.length - 1
   const spring = useSpring(0, { damping: 100, stiffness: 100 });
   const Router = useRouter()

   useEffect(() => {
     spring.onChange(latest => {
       window.scrollTo(0, latest);
     });
   }, [spring]);

   const moveTo = (to: any) => {
      if(!isDetail){
         spring.set(window.pageYOffset, false);
         spring.set(to);
      }else{
         Router.push(`${to}`)
      }
   //    setTimeout(() => {
   //  }, 50);
}

  return (
      <ol className="flex items-center rounded-3xl border border-white backdrop-blur-lg backdrop-filter text-sm text-white">
         {data.map((data,index)=>{
            return(
               <div className='flex items-center p-2' key={index}>
                  <li className='cursor-pointer' key={index} onClick={() => moveTo(data.goTo)}>
                     <span className="block transition z-50 text-sm sm:text-xl hover:text-gray-700"> {data.name} </span>
                  </li>
                  {
                     index != length && (
                        <li className="rtl:rotate-180">
                           <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           >
                           <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                           />
                           </svg>
                        </li>
                     )
                  }
               </div> 
            )
         })}
      </ol>
   // <div className='fixed'>
   // </div>
// </nav>
  )
}
