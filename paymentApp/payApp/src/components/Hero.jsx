import React from 'react'

const Hero = () => {
  return (
    <section className='flex justify-end items-center pt-24 pb-4 max-lg:pt-16 max-lg:pb-12 max-md:flex-col'>



       <div className='flex flex-1 flex-col justify-center pl-36 pb-8'>

            <div className='bg-discount-gradient flex items-center text-white px-3 py-1 rounded-lg max-w-96'>
                <img src="Discount.svg" alt="img" className='mr-2'/>
                <p><b>20% </b>DISCOUNT FOR <b>1 MONTH </b> ACCOUNT </p>
            </div>

            <div>
               <h1 className='text-white text-[80px] leading-[80px] font-[550] my-4'>
                   The Next <br /> 
                   <span className='text-gradient'>Generation</span> <br />
                    Payment Method.
               </h1>
               <div className=' my-8 flex'>
                  <p className='text-white text-lg'>
                      Out team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage reaes, annual fees.
                  </p>
               </div>
               <button type='button' className=' border-2 px-6 py-2 border-[#10889b] rounded-md'><span className='text-lg font-[550] text-gradient'>Get Started</span></button>
            </div>

        </div>


        <div className=' flex-1 flex justify-end items-end'>
            <img width={602} src="robot.png" alt="img" />
        </div>



    </section>
  )
}

export default Hero
