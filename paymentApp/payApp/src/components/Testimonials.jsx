import React from 'react'
import { feedbacks } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section className='flex flex-col gap-20 max-md:gap-8 max-xl:px-36 max-lg:px-20  max-md:px-12 max-sm:px-12 px-4'>

      <div className='flex  pr-12 max-md:pr-0 items-center justify-between flex-wrap max-md:flex-col'>
        <div className='flex-1 flex max-md:w-full w-lg items-center justify-center max-md:my-8 max-md:text-center' >
          <h1 className='text-white text-5xl  font-[600] '>What people are saying about us</h1>
        </div>

        <div className='flex-1 flex  items-center justify-end w-md max-md:text-center max-md:w-full max-md:justify-center'>
          <p className='text-gray-400 text-lg font-[500] '>Everything you need to accept card payments and grow your business anywhere on the planet. </p>
        </div>
      </div>


      <div className='flex flex-wrap items-center justify-between xl:pr-12 max-md:justify-center'>
          {feedbacks.map((feedback)=>(
            <FeedbackCard feedback={feedback}/>
          ))}
      </div>

    </section>
  )
}

export default Testimonials
