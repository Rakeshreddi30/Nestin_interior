import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
       
    <section id="about" className="py-20 px-10 bg-gray-800">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          We are a passionate team of designers and renovators dedicated to transforming spaces. With over a decade of experience, we bring creativity, precision, and a client-focused approach to every project, ensuring your vision comes to life exactly as you imagined.
        </p>
      </motion.div>
    </section>
  )
}

export default About
