import React from 'react'
import logo from "../assets/Logo.png"
const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full 
    z-[50] py-4 sm:py-4'>
    <div className='container '> 
      <div className='flex justify-around items-center gap-3 '>
        <div className='flex items-center gap-1 text-white text-2xl font-serif font-extralight'>
          <img src={logo} alt="Logo" className='w-[80px]'/>
          <span>NESTIN</span>
        </div>
        <div className=' text-white px-7 py-2 border-gray-500 border-1 
                        rounded-full bg-black/20 backdrop-blur-[1px]
                        '>
        <ul className='flex items-center gap-10 text-md py-4  sm:py-0 '>
          <li className='hover:bg-white/30 hover:px-4 hover:py-1 hover:rounded-full hover:border hover:border-white hover:scale-1000 transition duration-o.9'><a href='#'>Projects</a></li>
          <li className='hover:bg-white/30 hover:px-4 hover:py-1 hover:rounded-full hover:border hover:border-white hover:scale-100 transition duration-1000'><a href='#'>About Us</a></li>
          <li className='hover:bg-white/30 hover:px-4 hover:py-1 hover:rounded-full hover:border hover:border-white hover:scale-100 transition duration-1000'><a href='#'>Contact us</a></li> 
        </ul>
        </div>
        <div className='text-lg text-white border-2 border-black 
        rounded-2xl py-1 px-4 cursor-pointer hover:bg-teal-800 hover:scale-110 
          transition-all duration-1000 ease-in-out'>
        <butto>Get a Quote</butto>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
