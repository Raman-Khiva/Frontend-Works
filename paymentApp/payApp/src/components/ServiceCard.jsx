import React from 'react'
import { features } from '../constants';

const ServiceCard = ({feature}) => {
  return (
    <div className='flex  items-center max-w-[480px] px-4 py-2 gap-4 rounded-2xl cursor-pointer feature-card'>
        <div className='bg-black-gradient p-3 rounded-full flex items-center justify-center '>
            <img src={feature.icon} width={40} alt="icon" />
        </div>
        <div>
            <h2 className='text-white text-xl font-[500]'>{feature.title}</h2>
            <p className='text-gray-400 text-lg'>{feature.content}</p>
        </div>
    </div>
  )
}

export default ServiceCard;
