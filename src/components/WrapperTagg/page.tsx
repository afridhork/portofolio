import React from 'react'

const page = ({item}:{item: string} ) => {
  return (
    <div className='border rounded-lg bg-slate-800 p-1'>
      <div className='text-xs'>{item}</div>
    </div>
  )
}

export default page