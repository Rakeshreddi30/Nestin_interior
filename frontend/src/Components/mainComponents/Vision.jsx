import React from "react";
import { useState, useEffect } from "react";
import vision1 from "../../assets/vision1.jpg";
import vision2 from "../../assets/vision2.jpg";
import { motion }  from "framer-motion";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-2 md:space-y-8">
      {/* First Row - Full Width Header */}
      <div className="w-full">
        <div className="text-center  grid md:grid-cols-[20%_80%]  gap-3 justify-center items-center text-black py-6 px-3 rounded-2xl shadow-sm">
          <h3 className="text-lg md:text-md w-full text-center text-gray-700 m-4 whitespace-nowrap shrink-0 px-4">
            Our Vision
          </h3>
          <p className="text-2xl md:text-3xl opacity-90  mx-4  font-light">
            Transform Your Space into Innovative Interior Design for a
            Modern,Luxurious Lifetyle
          </p>
        </div>
      </div>

      {/* Second Row - Two Columns */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* First Column - Image then Info */}
        <div className="space-y-4">
          {/* Image Row - Vision Image (Top to Bottom reveal animation) */}
          <motion.div
            className="w-full h-64 md:h-auto mb-6 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl"
            initial={{ opacity: 0, scaleY: 0.1 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1, ease: "easeOut" }}

            style={{ transformOrigin: "top" }} // mimic reveal from top
          >
            <div className="w-full h-80 flex items-center justify-center">
              <img
                src={vision1}
                alt="Interior Design"
                className="max-w-full h-auto object-contain opacity-80"
              />
            </div>
          </motion.div>
        

          {/* Info Row */}
          <div
            className={`bg-white p-4 rounded-xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation Focus</h3> */}
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe in pushing boundaries and exploring new possibilities.
              Our commitment to innovation drives us to create solutions that
              make a meaningful impact.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Learn More</span>
            </div>
          </div>
        </div>

        {/* Second Column - Info then Image */}
        <div className="space-y-4">
          {/* Info Row */}
          <div
            className={`bg-white p-5 rounded-xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence Driven</h3> */}
            <p className="text-gray-600 leading-relaxed mb-4">
              Quality is at the heart of everything we do. We strive for
              excellence in every project, ensuring that our solutions exceed
              expectations and deliver lasting value.
            </p>
            <div className="flex items-center space-x-2 text-purple-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Learn More</span>
            </div>
          </div>

          {/* Image Row - Excellence Image (Bottom to Top reveal animation) */}
           <motion.div
            className="w-full h-64 md:h-auto mb-6 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl"
            initial={{ opacity: 0, scaleY: 0.1 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }} // mimic reveal from top
          >
            <div className="w-full h-72 flex items-center justify-center">
              <img
                src={vision2}
                alt="Interior Design"
                className="max-w-full h-auto object-contain opacity-80"
              />
            </div>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default Vision;
