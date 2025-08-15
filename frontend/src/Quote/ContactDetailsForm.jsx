
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNum: '',
    email: '',
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
 const Navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try{
      const res = await axios.post("https://nestin-interior.onrender.com/api/contact/postContact", formData);
      if(res.status === 200){
        console.log("Success");
        Navigate("/success")
      }
    }
    catch(Error){
      Navigate("/failure")
      console.log("Sommething went wrong");
    }
    
    // Simulate form submission
    // await new Promise(resolve => setTimeout(resolve, 1500));    
    // Reset form
    setFormData({
      name: '',
      phoneNum: '',
      hasWhatsApp: false,
      email: '',
      location: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-black/70 bg-blend-overlay"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        className="w-full max-w-md"
      >
        <div className="backdrop-blur-md bg-white/40 rounded-2xl border border-white/20 shadow-2xl p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-black mb-2">Get In Touch</h2>
            <p className="text-black/80 text-sm">We'd love to hear from you</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/90 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/90 w-5 h-5" />
                <input
                  type="tel"
                  name="phoneNum"
                  value={formData.phoneNum}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all duration-300 "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="hasWhatsApp"
                  checked={formData.hasWhatsApp}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-green-400 bg-white/10 border-white/20 rounded focus:ring-green-400 focus:ring-2"
                />
                <span className="text-black/90 text-sm">I have WhatsApp</span>
                <FaWhatsapp/>
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/90 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/90 w-5 h-5" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600/90 hover:to-purple-600/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactDetailsForm;