import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      review: "The design team transformed our office space beyond our expectations. Their attention to detail and understanding of our brand was exceptional.",
      rating: 5,
      position: "CEO"
    },
    {
      id: 2,
      name: "Michael ",
      review: "Outstanding work on our retail store design. The modern aesthetic perfectly captures our brand identity and has significantly improved customer experience.",
      rating: 5,
      position: "Store Manager"
    },
    {
      id: 3,
      name: "Emily",
      review: "Professional, creative, and reliable. They delivered our dream home interior exactly as we envisioned. Highly recommend their services!",
      rating: 5,
      position: "Homeowner"
    },
    {
      id: 4,
      name: "David",
      review: "The team's innovative approach to our restaurant design created an amazing ambiance. Our customers love the new space and we've seen increased satisfaction.",
      rating: 4,
      position: "Restaurant Owner"
    },
    {
      id: 5,
      name: "Wang",
      review: "Exceptional quality and service. They understood our vision perfectly and brought it to life with stunning results. The project was completed on time and within budget.",
      rating: 5,
      position: "Marketing Director"
    },
    {
      id: 6,
      name: "James",
      review: "Creative solutions and professional execution. Our new office design has boosted team morale and productivity. Worth every penny!",
      rating: 5,
      position: "HR"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our clients trust us with their most important spaces
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee justify-center space-x-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Customer Name */}
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.position}
                </p>
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-center">
                <StarRating rating={testimonial.rating} />
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}/5
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;