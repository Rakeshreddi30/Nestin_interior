import React from "react";
import { FaDraftingCompass, FaPaintBrush, FaCouch } from "react-icons/fa";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";

import { motion } from "framer-motion";
const servicesData = [
  {
    image: service1 ,
    title: "Interior Design",
    description: "Comprehensive design services from concept to completion.",
  },
  {
    image: service2 ,
    title: "Renovation",
    description: "High-quality renovation for homes and commercial spaces.",
  },
  {
    image: service3 ,
    title: "Consultation and Planning",
    description: "Custom  solutions to fit your unique style.",
  },
];
const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <section id="services" className="py-20 px-10">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-[20%_1fr_1fr_1fr] place-items-center gap-2">
          <h2 className="text-4xl font-medium mb-12 font-saira">
            What We Offer
          </h2>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg shadow-lg text-center text-black"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              whileHover={{
                y: -40,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.2)",
              }}
            >
              <img src={service.image} alt={service.title} className="relative w-full h-full object-cover rounded-t-lg" />
              <div className="obsolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 p-6 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 font-saira">{service.title}</h3>
              <p className="text-gray-800 font-roboto">{service.description}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
