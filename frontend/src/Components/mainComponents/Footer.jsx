import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
   <footer id="contact" className="py-20 px-10 bg-black">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-8">Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you shortly.</p>
        </motion.div>
        
        <motion.form 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="text" placeholder="Location" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <motion.button 
            type="submit" 
            className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
        <p>&copy; 2025 Renovate. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
