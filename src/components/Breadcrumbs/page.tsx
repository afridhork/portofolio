import React from 'react'

export default function Breadcrumbs({data}: {data:string[]}) {
   const length = data.length - 1
  return (
   <div className='fixed'>
      <ol className="flex items-center gap-1 text-sm text-white">
         {data.map((data,index)=>{
            return(
               <div className='flex items-center' key={index}>
                  <li key={index}>
                     <a href="#" className="block transition text-2xl hover:text-gray-700"> {data} </a>
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
   </div>
// </nav>
  )
}