import { XCircle, RefreshCw, AlertTriangle, Mail, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Failure() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Failure Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-red-100/50 p-8  transform transition-all duration-100 hover:scale-105">
          {/* Failure Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse">
                <XCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Failure Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We couldn't submit your message right now. Don't worry, your information is safe and we're here to help.
            </p>
          </div>

          {/* Issue Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center p-3 bg-red-50 rounded-xl">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-gray-700 text-sm">Connection timeout error</span>
            </div>
            
            <div className="flex items-center p-3 bg-orange-50 rounded-xl">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <Mail className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-gray-700 text-sm">Message saved locally</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
              onClick={() => navigate("/Contact")}>
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
  
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-red-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-rose-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-red-200 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}