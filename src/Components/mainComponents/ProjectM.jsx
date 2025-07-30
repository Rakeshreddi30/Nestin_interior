import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import interior from "../../assets/Interior.png";
import service from "../../assets/service3.jpg"

const ProjectM = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Modern Living Room",
      description: "A blend of contemporary elegance with clean lines and premium design elements. Bold contrasts combined sleek furniture.",
      image: interior,
      category: "Interior Design"
    },
    {
      id: 2,
      title: "High-End Space for a Tech Startup",
      description: "A sleek, modern office designed to boost creativity and productivity. With minimalist aesthetics and functional layouts.",
      image: service,
      category: "Office Design"
    },
    {
      id: 3,
      title: "Exclusive Boutique Store Design",
      description: "For the high-end retail experience, we focused on luxurious shopping experience by using custom-built fixtures.",
      image: interior,
      category: "Retail Design"
    },
    {
      id: 4,
      title: "Contemporary Art Gallery",
      description: "Minimalist design approach to showcase artwork with perfect lighting and spatial composition for optimal viewing experience.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Gallery Design"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
            Explore Our Latest Projects, Where{' '}
            <span className="block">Innovation Meets Luxury</span>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 overflow-hidden ">
                  {/* Image Column - 75% width (3 cols) */}
                  <div
                    className={`relative overflow-hidden bg-white shadow-lg ${
                      isEven ? 'lg:col-span-3' : 'lg:col-span-3 lg:col-start-2'
                    }`}
                  >
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-[450px] flex items-center justify-center"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
                    </motion.div>
                  </div>

                  {/* Content Column - 25% width (1 col) */}
                  <motion.div
                    className={`bg-white p-8 lg:p-12 flex flex-col justify-center shadow-lg h-[450px] ${
                      isEven ? 'lg:col-span-1' : 'lg:col-span-1 lg:col-start-1 lg:row-start-1'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>
                      
                      <motion.button
                        className="inline-flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectM;