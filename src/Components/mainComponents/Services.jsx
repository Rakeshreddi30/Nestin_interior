import React from 'react'
import { FaDraftingCompass, FaPaintBrush, FaCouch } from 'react-icons/fa';
import { motion } from 'framer-motion';
 const servicesData = [
  { icon: <FaDraftingCompass size={40} />, title: "Interior Design", description: "Comprehensive design services from concept to completion." },
  { icon: <FaPaintBrush size={40} />, title: "Renovation", description: "High-quality renovation for homes and commercial spaces." },
  { icon: <FaCouch size={40} />, title: "Furniture Design", description: "Custom furniture solutions to fit your unique style." },
];
const Services = () => {

    const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  return (
     <section id="services" className="py-20 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"}}
            >
              <div className="text-red-400 mb-4 inline-block">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
