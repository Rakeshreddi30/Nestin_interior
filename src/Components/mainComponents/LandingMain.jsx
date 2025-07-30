import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import interior from "../../assets/Logo.png";
import image from "../../assets/interior.png";
const LandingMain = () => {
  // const [animationStage, setAnimationStage] = useState(0);
  // const controls = useAnimation();
  // useEffect(() => {
  //   const timer1 = setTimeout(() => setAnimationStage(1), 1200);
  //   const timer2 = setTimeout(() => setAnimationStage(2), 2500);
  //   const timer3 = setTimeout(() => setAnimationStage(3), 3500);
  //   return () => {
  //     clearTimeout(timer1);
  //     clearTimeout(timer2);
  //     clearTimeout(timer3);
  //   };
  // }, []);

  return (
    <div className="min-h-auto  bg-white overflow-hidden shadow-2xl">
      
  

      {/* Main Content */}
      
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
            className="fixed top-0 z-40 backdrop-blur-xl border-b w-[1440px] border-gray-100"
          >
            <div className=" max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex items-center text-2xl font-serif font-bold text-gray-800">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                Nestin
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-10 text-black font-medium rounded-full">
                <a
                  href="#"
                  className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="hover:bg-black/70 px-4 py-2 rounded-full hover:border hover:text-white hover:scale-1200 transition duration-o.9"
                >
                  About Us
                </a>
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
          <div className="relative  min-h-[500px] mt-[72px] flex mflex items-center justify-center">
            {/* Main Heading */}
            <div className=" bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex-1 w-full">
              {/* Grid Container */}
              <div
                className="grid gap-5 max-w-7xl mx-auto "
                style={{ gridTemplateRows: "1fr 6fr" }}
              >
                {/* First Row - Full Width Headline */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center justify-center text-center px-4  "
                >
                  <div>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-serif font-light text-gray-800 mb-auto leading-tight">
                      Transform Your
                      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                       {' '} Living Space
                      </span>
                    </h1>

                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                      Create stunning interiors that reflect your unique style
                      with our expert design team
                    </motion.p>
                  </div>
                </motion.div>

                {/* Second Row - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
                  {/* Left Column - Image (75% width - 3 of 4 columns) */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="md:col-span-3 relative overflow-hidden rounded-2xl shadow-2xl h-[500px] flex items-center justify-center"
                  >
                      <img
                        src={image}
                        alt="Interior Design"
                        className="max-w-full h-auto object-contain opacity-80"
                      />
                  </motion.div>

                  {/* Right Column - Information (25% width - 1 of 4 columns) */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="md:col-span-1 flex items-center justify-center"
                  >
                    {/* Single Info Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg w-full h-full flex flex-col justify-center">
                      <div className="text-4xl mb-4 text-center">✨</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                        Premium Quality
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        High-end materials and craftsmanship in every project we
                        deliver.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [50, -70, 50],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-0 w-16 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-40 hidden lg:block"
            />

            <motion.div
              animate={{
                y: [0, 70, 0],
                rotate: [0, -50, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-40 hidden lg:block"
            />
          </div>
        </motion.div>
      
    </div>
  );
};

export default LandingMain;
