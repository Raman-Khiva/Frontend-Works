import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-12'>
        <div>
            <img src="logo.svg" alt="logo"  width={150} height={30}/>
        </div>
        <ul className='text-yellow-50 flex items-center gap-20 text-lg'>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Solution</li>
        </ul>

    </nav>
  )
}

export default Navbar
