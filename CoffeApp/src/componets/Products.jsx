import React from 'react'
import ProductCard from './ProductCard';
import { products } from '../constants';

const Products = () => {
  return (
    <section className=' py-24 max-[480px]:py-12 flex flex-col gap-12 max-[480px]:gap-6 items-center justify-center '>
        <div className='text-4xl px-2 font-[600] max-[480px]:text-[28px]'>
            <h1 >Our Famous Products</h1>
        </div>

        <div className='grid md:grid-rows-2 grid-rows-4    md:grid-cols-4  grid-cols-2   gap-4 xl:px-36 lg:px-28 sm:px-20 md:px-6 px-8  max-[480px]:px-4'>
            {products.map((product)=>(
                <ProductCard  imgUrl={product.imgUrl} title={product.title} price={product.price}/>
            ))}

        </div>
    </section>
  )
}

export default Products;
