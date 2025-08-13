import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
  <motion.footer 
      id="contact" 
      className="py-16 px-6 bg-gray-200 border-t border-neutral-100 text-neutral-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 md:mb-12">
          {/* Brand and Tagline Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-center mb-2">Renovate.</h3>
            <p className=" max-w-md">Crafting elegant and functional spaces for modern living.</p>
          </div>
          
          {/* Social Links Section */}
          <div className="flex items-center space-x-6 ">
            <a href="#" className="hover:text-neutral-700 transition-colors">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> */}
            <FaFacebookF className='w-6 h-6'/>
            </a>
            <a href="#" className="hover:text-neutral-700 transition-colors">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg> */}
            <FaInstagram className='w-6 h-6'/>
            </a>
            <a href="#" className="hover:text-neutral-700 transition-colors">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.8-11.4 9.2 11.5-7.3 1.8-21.3 5.5-22.3 2.1-.6 4.4 1.7 6.4 2.8s7 10 7 10Z"/></svg> */}
             <FaWhatsapp className='w-6 h-6'/>
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center text-neutral-800 pt-6 border-t border-neutral-600">
          <p>&copy; 2025 Interior - Developed By Rakesh Reddy Gopidi.</p>
        </div>
      </div>
    </motion.footer>
  )
}
export default Footer
