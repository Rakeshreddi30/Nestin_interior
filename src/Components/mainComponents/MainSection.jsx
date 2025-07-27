import React from 'react'
import {motion} from "framer-motion";
import BackgroundImage from "../../assets/interior.png";
const MainSection = () => {
  return (
   <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Designing Your Dreams
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We create beautiful and functional spaces tailored to your lifestyle.
        </motion.p>
        <motion.button
          className="bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(239, 68, 68)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Get a Free Quote
        </motion.button>
      </div>
    </section>
  )
}

export default MainSection
