import React from 'react'

const page = ({item}:{item: string} ) => {
  return (
    <div className='border rounded-lg bg-slate-800 p-1'>
      <div>{item}</div>
    </div>
  )
}

export default page