import React from 'react'
import { about } from '../assets'


const About = () => {
  return (
    <section className='flex md:flex-row flex-col xl:px-36 lg:px-28  md:px-6 sm:px-20 px-8 max-[480px]:px-4  mb-12 lg:gap-12 gap-5  '>
        <div className='flex-1 rounded-xl overflow-hidden'>
            <img  src={about} alt="about" />
        </div>

        <div className='flex flex-1 flex-col justify-center xl:gap-8 lg:gap-4 [480px]:gap-3 '>
            <h1 className='text-4xl font-[600] max-[480px]:text-[28px] '>OUR HISTORY</h1>
            <p className='xl:text-lg lg:text-[17px]  text-[15.6px] lg:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea assumenda voluptatibus officiis, provident totam ipsam maxime labore quisquam expedita quae, est velit! At explicabo quam optio blanditiis nisi molestias.</p>
            <div>
                <button className='bg-[#e7ac46] px-6 py-2 text-white text-lg font-bold rounded-lg [480px]:mt-0 mt-2'>Read More</button>
            </div>
        </div>

    </section>
  )
}

export default About
