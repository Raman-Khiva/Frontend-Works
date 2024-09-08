import React from 'react'
import { quotes } from '../../public'

const FeedbackCard = ({feedback}) => {
  return (
    <section className='flex flex-col justify-between feedback-card  p-8 rounded-2xl h-80 max-md:m-8 '>
      <div className='max-w-60 flex flex-col gap-8 h-16'>
        <img src={quotes} alt="quotes" width={40} />
        <p className='text-white text-[1.17rem]'>{feedback.content}</p>
      </div>

      <div className='flex items-center gap-4 pt-8'>
          <div>
            <img src={feedback.img} alt={feedback.img} width={60}/>
          </div>
          <div>
            <h2 className='text-white text-lg font-[500]'>{feedback.name}</h2>
            <p className='text-gray-400 text-[17px]'>{feedback.title}</p>
          </div>
      </div>
      
    </section>
  )
}

export default FeedbackCard
