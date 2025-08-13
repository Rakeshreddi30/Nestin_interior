import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DesignForm from "../../Quote/DesignForm";
import mainBg from "../../assets/landing.jpg"
// Main App Component

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls more than 10px, otherwise false
      setScrolled(window.scrollY > 10);
    };    
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  }, []);

  return (
    <div  className="relative min-h-screen bg-cover bg-center font-sans"
     style={{
    backgroundImage: `url(${mainBg})`
  }}>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        // Dynamic classes based on scroll state
        className={`fixed top-0 left-0 right-0 z-50 transition-all overflow-hidden duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-50">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-2">
              <div className="flex items-center text-3xl font-serif font-bold text-gray-800">
                <div className="w-9 h-9 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center mr-3 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                </div>
                <span className={scrolled ? "text-gray-900" : "text-white"}>
                  Nestin
                </span>
              </div>
            </div>
            {/* CTA Button */}
            <div className=" rounded-full bg-gradient-to-r from-orange-800 via-yellow-700 to-green-900">
                <Link to = "/quote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
       className="relative backdrop-blur-sm text-white px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent"              >
                Get a Quote
              </motion.button>
                </Link>
            </div>
          </div>
        </div>
      </motion.nav>
    
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center pt-[90px] flex items-center"
        
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Grid */}
        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-center md:text-left"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-center font-forum !leading-tight tracking-tight mb-4">
                Crafting Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Dream
                </span>{" "}
                Space
              </h1>
              <p className="text-lg md:text-2xl text-center font-italic backdrop-blur-sm text-gray-200 max-w-xl mx-auto md:mx-0">
                From concept to completion, we bring your vision to life with
                passion, precision, and a personal touch. Let's build something
                extraordinary together.
              </p>
            </motion.div>

            {/* Right Column: Form */}
            <DesignForm/>
          </div>
        </div>
      </div>
     
    </div>
  );
};
// State to track if the page has been scrolled
export default Landing;
