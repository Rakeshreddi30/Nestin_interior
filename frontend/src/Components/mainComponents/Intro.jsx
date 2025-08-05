import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import interior from "../../assets/Logo.png";


const Intro = ({onComplete}) => {
   const [animationStage, setAnimationStage] = useState(0);
//   const controls = useAnimation();
    useEffect(() => {
       const timer1 = setTimeout(() => setAnimationStage(1), 1200);
       const timer = setTimeout(()=>{
          onComplete()
        },2800);
        return ()=>{
            clearTimeout(timer1);
            clearTimeout(timer);
        };
      },[onComplete])
  return (
  
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            >
              {/* Initial Animation Stage - Company Name */}
            <div className="flex items-center text-6xl md:text-8xl font-serif text-gray-800">
              <motion.span
                initial={{ opacity: 0, y: -50, x: 0 }}
                animate={{ opacity: 1, y: 0, x: animationStage >= 1 ? -15 : 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                NESTIN
              </motion.span>

              {/* Animated Image */}
              {animationStage >= 1 && (
                <motion.img
                  src={interior}
                  alt="Interior Design"
                  className="w-full md:w-1/2 rounded-xl"
                  // Framer motion animation
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 0.4, 0.4, 1], opacity: [0, 1, 1] }}
                  transition={{
                    duration: 1, // total duration in seconds
                    times: [0, 0.25, 0.583, 1], // keyframe percentages
                    ease: "easeInOut",
                    delay: 0,
                  }}
                />
              )}

              <motion.span
                initial={{ opacity: 0, y: 50, x: 0 }}
                animate={{ opacity: 1, y: 0, x: animationStage >= 1 ? 15 : 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Interior
              </motion.span>
            </div>
          </motion.div>
    
  )
}

export default Intro
