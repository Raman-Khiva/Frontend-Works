import React from 'react'
// import p1 from '../assets/p1.png';

const ProductCard = ({imgUrl,title,price}) => {
  return (
    <div className='flex flex-1 flex-col box-shadow p-3 max-[480px]:p-2 rounded-lg  sm:rounded-2xl  justify-between bg-[rgba(117,108,108,0.3)]'>
      
      <div className='flex flex-1 items-center justify-center bg-gray-200 rounded-lg'>
        <img className='w-[50%] max-[480px]:w-full' src={imgUrl} alt="p1" />
      </div>

      <div className='mt-3 max-[480px]:mt-1 flex flex-col gap-1 max-[480px]:gap-0'>
        <h1 className='lg:text-lg text-[16px] lg:font-[700] font-[700] max-[480px]:text-[13px]'>{title}</h1>
        <div className='flex lg:gap-8 gap-4 max-[480px]:gap-4'>
             <div className='text-lg max-[480px]:text-[11px] text-white font-[500] bg-[#f4a460] rounded-md px-2 max-[480px]:px-1 max-[480px]:leading-4' >{price}</div>
             <button className='max-[480px]:text-[12px]'>Add to Cart</button>
        </div>   
      </div>
    </div>
  )
}

export default ProductCard
