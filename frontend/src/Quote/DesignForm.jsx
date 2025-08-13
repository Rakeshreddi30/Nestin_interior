import React, { useState } from 'react'
import { motion } from "framer-motion";
import { User,Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import axios from 'axios';


const DesignForm = () => {

     const [designForm, setDesignForm] = useState({
        name: '',
        email: '',
        phone: '',
      });
      const[isSubmitting, setIsSubmitting] = useState(false);
      const[isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
       e.preventDefault();
       setIsSubmitting(true);
        try{
           const response =  await axios.post("http://localhost:8081/api/contact/postDesign", designForm);
           setIsSuccess(true);
           setTimeout(()=>setIsSuccess(false),5000);
           console.log(response);
        }catch(error){
            alert("Something went wrong")
        }
        setDesignForm({
            name:"",
            email:"",
            phone:"",
        })
        setIsSubmitting(false);
    }

    const handleChange = (e) => {
        const{name, value} = e.target;
        setDesignForm(prev =>({
            ...prev,
            [name]:value,
        })
          );
    }

  return (
     <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 md:mx-10  rounded-2xl shadow-2xl border border-white/20">
                <h2 className="text-white text-3xl font-bold font-saira text-center mb-6">
                  Request a 3D Design
                </h2>
                <form className="space-y-6"
                   onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      name='name'
                      value={designForm.name}
                      required
                      onChange={handleChange}
                      className="w-full bg-white/20 text-white placeholder-gray-300 rounded-full py-3 pr-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name='email'
                      value={designForm.email}
                      required
                      onChange={handleChange}
                      className="w-full bg-white/20 text-white placeholder-gray-300 rounded-full py-3 pr-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                  </div>
                  {/* Phone Input */}
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={20}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name='phone'
                      value={designForm.phone}
                      required
                      onChange={handleChange}
                      className="w-full bg-white/20 text-white placeholder-gray-300 rounded-full py-3 pr-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                  </div>
                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-4 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2
                              ${isSuccess ? "bg-gradient-to-r from-green-600 to-green-400" : "bg-gradient-to-r from-orange-700 to-orange-500"}
                              `} >
                     {isSubmitting ? (
                                      <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                      />
                                    ) : (
                                <>
                                {
                                  isSuccess ? (
                                    <>
                                    <span>Request sent successful</span>
                                    <CheckCircle size={20}/>
                                    </>
                                  ) : (
                                    <>
                                    <span>Get Free 3D design</span>
                                    <ArrowRight size={20} />
                                    </>
                                  )
                                }
                              
                                </>
                                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
  )
}

export default DesignForm