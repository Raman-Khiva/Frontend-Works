import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
    <section className='flex items-center justify-between flex-wrap px-36 py-2 w-full'>
      {stats.map((stat)=>(
        <div key={stat.id} className='text-white flex items-center gap-3 my-8'>
          <h3 className='text-3xl font-bold'>{stat.value}</h3>
          <p className='text-xl font-[500] text-gradient'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
