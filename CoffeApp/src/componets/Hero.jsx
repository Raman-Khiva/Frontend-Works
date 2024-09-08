import React from 'react'
import main from '../assets/main.png';

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col xl:px-28 lg:px-20 md:px-8 px-10 max-[480px]:px-4 xl:py-5 lg:py-10 md:py-16 xl:mt-[0.4rem] flex-wrap max-sm:pb-8 '>
        <div className='flex-1 flex flex-col justify-center md:pl-12 gap-4 md:px-0 sm:px-16 px-4'>
            <h1 className='xl:text-7xl lg:text-6xl md:text-4xl text-[40px] max-[480px]:text-3xl text-[#f4a460] font-[600] max-[480px]:font-[400] font-serif ' >Start Your Day With Coffee</h1>
            <p className='xl:text-lg lg:text-[16px] max-[480px]:text-[14px] max-[480px]:font-normal text-[15px] font-[500] text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur in dolor harum velit eveniet unde sed, rem, itaque repellendus dolores consequuntur quis earum doloribus vel rerum officia illo. Nisi, quod.</p>
            <div>
                <button className='text-white text-lg max-[480px]:text-[16px] font-[500] max-[480px]:px-4x px-6 bg-[#f4a460] hover:bg-[#6c3e16] py-2 max-[480px]:py-1 rounded-lg'>Shop Now</button>

            </div>
        </div>

        <div className='flex-1' >
            <img src={main} alt="" />
        </div>
    </section>
  )
}

export default Hero
