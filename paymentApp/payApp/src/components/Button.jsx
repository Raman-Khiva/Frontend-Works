import React from 'react'

export default function Button({title}) {
  return (
    <div>
      <button type='button' className='bg-blue-gradient px-6 py-2 rounded-md text-lg font-[500]'>{title}</button>
    </div>
  )
}