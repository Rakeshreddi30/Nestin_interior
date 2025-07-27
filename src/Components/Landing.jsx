import React from 'react'
import interior from "../assets/home.mp4"
import Navbar from './Navbar'
const Landing = () => {
  return (
    <div >
        <div className=' h-[700px] relative'>
            <video
            autoPlay
            loop
            muted
            className='fixed right-0 top-0 w-full object-fill z[-1]'>
              <source src={interior} type = "video/mp4"/>
            </video>
        </div>
        <Navbar/>
    </div>
  )
}

export default Landing
