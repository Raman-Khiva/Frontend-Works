import React from 'react'
import { bill,apple,google } from '../../public'

const Billing = () => {
  return (
    <section  className='pl-32 pr-20 flex items-center justify-between gap-36'>
      <div className='flex-1'>
        <img src={bill} alt="bill" width={600} />
      </div>

      <div className='flex-1 flex flex-col  gap-8'>
        <h1 className='text-white text-6xl font-[600] leading-tight'>Easily cotrol your billing & invoicing.</h1>
        <p className='text-gray-400 text-xl '>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aeneam neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex gap-12'>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  )
}

export default Billing
