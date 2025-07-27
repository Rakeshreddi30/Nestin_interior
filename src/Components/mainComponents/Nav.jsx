import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = () => {
    const[isOpen, setIsOpen] = useState(false);

    const links = ["About", "Services", "Projects", "Contact"]; 

    const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.5 } },
     };

  const linkHover = {
    scale: 1.1,
    color: "#f87171",
    transition: { duration: 0.2 }
    };
  return (
    <motion.nav
      className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50 p-5 flex justify-between items-center"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-2xl font-bold text-white">
        <a href="#">Renovate</a>
      </div>
      <div className="hidden md:flex space-x-8">
        {links.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-gray-300 hover:text-white"
            whileHover={linkHover}
          >
            {link}
          </motion.a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 p-5 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Nav
