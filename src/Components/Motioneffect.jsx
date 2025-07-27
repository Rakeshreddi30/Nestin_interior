import React from 'react'
import { motion as Motion } from "framer-motion";
import interior from "../assets/Logo.png"
const Motioneffect = () => {
  return (
       <Motion.img
      src={interior}
      alt="Interior Design"
      className="w-full md:w-1/2 rounded-xl"
      
      // Framer motion animation
       initial={{ scale: 0 }}
        animate={{ scale: [0, 0.4,0.4, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 2,         // total duration in seconds
          times: [0, 0.250,0.583, 1],  // keyframe percentages
          ease: "easeInOut",
          delay: 0,  
          repeat: Infinity,
        }}
    />
  )
}

export default Motioneffect
