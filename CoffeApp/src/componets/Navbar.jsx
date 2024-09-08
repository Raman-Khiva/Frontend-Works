import React from 'react'
import logo from '../assets/logo.png';
import { Links } from '../constants';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between lg:px-20 px-8 py-2 max-[480px]:px-3 '>
        <div className=''>
            <img src={logo} alt="logo" className='w-16' />
        </div>

        <div className=' md:flex hidden lg:text-lg text-[17px] text-white  font-[600] justify-between xl:gap-16 lg:gap-10 md:gap-6 '>
            {Links.map((link)=>(
                <a className='hover:text-[#f4a460]' href={link.url}>{link.title}</a>
            ))}
        </div>

        <div className=' flex items-center justify-end'>
            <button className='bg-[#f4a460] px-4 py-2'>Sign in</button>
        </div>



    </nav>
  )
}

export default Navbar
