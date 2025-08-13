import { CheckCircle, ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-200 shadow-emerald-100/50 p-8 transform transition-all duration-500 hover:scale-100">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Success!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thank you for reaching out! Your message has been successfully submitted and we'll get back to you soon.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center p-3 bg-emerald-50 rounded-xl">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                <Mail className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-sm">Email confirmation sent</span>
            </div>
            
            <div className="flex items-center p-3 bg-teal-50 rounded-xl">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                <Phone className="w-4 h-4 text-teal-600" />
              </div>
              <span className="text-gray-700 text-sm">Response within 24 hours</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 flex flex-col">
            <button className=" bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 active:translate-y-0"
                    onClick={() => navigate("/")}>
              Continue to Dashboard
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            
            <button className=" border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium transition-all duration-300 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50"
                    onClick={() => navigate("/Contact")}>
              Send Another Message
            </button>
          </div>

        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-emerald-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-emerald-200 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}