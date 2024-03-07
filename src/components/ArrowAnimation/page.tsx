import React from 'react'
import './index.css'

export default function ArrowAnimation() {
  return (
   <div className='fixed flex justify-center items-center w-full pt-32'>
      <div className='circle-style mr-[40px]'>
         <svg
            className='arrow-style'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
         </svg>
      </div>
   </div>
  )
}
