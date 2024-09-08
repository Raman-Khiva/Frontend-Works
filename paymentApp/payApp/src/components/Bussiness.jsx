import React from 'react'
import Button from './Button';
import ServiceCard from './ServiceCard';
import { features } from '../constants';

const Bussiness = () => {
  return (
    <section className=' flex items-center px-32  py-8 max-md:flex-col'>
      <div className='flex flex-1 flex-col justify-between gap-8'>
        <h1 className='text-white text-5xl font-[600]'>You do the business, we'll handle the money.</h1>
        <p className=' text-lg text-gray-400 '>With the right credit card. you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button title="Get Started"/>
      </div>
      <div className='flex-1 flex flex-col items-end justify-between gap-2'>
        {features.map((feature)=>(
          <ServiceCard feature={feature}/>
        ))}
      </div>


    </section>
  )
}

export default Bussiness;
