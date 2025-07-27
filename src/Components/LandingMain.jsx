import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import interior from "../assets/Logo.png"
const LandingMain = () => {
    const[animationStage, setAnimationStage] = useState(0);
    const controls = useAnimation();
    useEffect(()=>{
      const timer1 = setTimeout(() => setAnimationStage(1), 1200);
      const timer2 = setTimeout(() => setAnimationStage(2), 2500);
      const timer3 = setTimeout(() => setAnimationStage(3), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
    },[])

  return (
       <div className="min-h-screen bg-white overflow-hidden">
      <AnimatePresence>
        {/* Initial Animation Stage - Company Name */}
        {animationStage < 3 && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center text-6xl md:text-8xl font-serif text-gray-800">
              <motion.span
                initial={{ opacity: 0, y: -50, x:0 }}
                animate={{opacity: 1, y: 0 , x:animationStage >= 1 ? -15 : 0}}
                transition={{ duration: 1, ease: "easeOut"}}
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
                        animate={{ scale: [0, 0.4,0.4, 1], opacity: [0, 1, 1] }}
                        transition={{
                          duration: 2,         // total duration in seconds
                          times: [0, 0.250,0.583, 1],  // keyframe percentages
                          ease: "easeInOut",
                          delay: 0,  
                      
                        }}
                    />
              )}
              
              <motion.span
                initial={{ opacity: 0, y: 50 , x:0}}
                animate={{ opacity: 1, y: 0,x:animationStage >= 1? 15 : 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Interior
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {animationStage >= 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Navigation Bar */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="fixed top-0 z-40 backdrop-blur-xl border-b max-w-7xl border-gray-100"
          >
            <div className=" max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex items-center text-2xl font-serif font-bold text-gray-800">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                Nestin
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-10 text-black font-medium rounded-full">
                <a href="#" className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9">Products</a>
                <a href="#" className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9">Pricing</a>
                <a href="#" className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9">About Us</a>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white-400 to-gray-500 text-black px-6 py-2 rounded-full font-medium shadow-lg 
                           hover:shadow-xl hover:bg-teal-800 hover:text-white hover:transition-shadow"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute inset-0 z-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-amber-50">
                <div 
                  className="w-full h-full opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 text-center px-6 max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Living Space
                </span>
              </h1>
              
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                Create stunning interiors that reflect your unique style with our expert design team
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                >
                  Start Your Project
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-amber-400 hover:text-amber-500 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 hidden lg:block"
            />
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 hidden lg:block"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default LandingMain
