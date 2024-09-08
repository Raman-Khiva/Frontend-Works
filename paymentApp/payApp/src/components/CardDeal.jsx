import React from 'react'
import Button from './Button'
import { card } from '../../public'

const CardDeal = () => {
  return (
    <section className=' flex items-center px-32  py-8 max-md:flex-col'>
      <div className='flex flex-1 flex-col justify-between gap-10'>
        <h1 className='text-white text-5xl font-[600]'>Find a better card deal in few easy steps.</h1>
        <p className=' text-lg text-gray-400 '>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.c Aliquet ultrices ac, ametau.</p>
        <Button title="Get Started"/>
      </div>
      <div className='flex-1 flex flex-col items-center justify-end'>
        <img src={card} alt="card" width={500} />
      </div>


    </section>
  )
}

export default CardDeal
