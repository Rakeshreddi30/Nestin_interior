import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySelection = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isContinue, setIsContinue] = useState(false);

  const navigate = useNavigate();
  const rooms = [
    { id: 1, name: "1BHK" },
    { id: 2, name: "2BHK" },
    { id: 3, name: "3BHK" },
    { id: 4, name: "4BHK" },
  ];

  const propertyTypee = [
    { id: 1, name: "House" },
    { id: 2, name: "Apartment" },
    { id: 3, name: "Villa" },
    { id: 4, name: "Office Space" },
  ];
  useEffect(() => {
    console.clear();
    console.log(selectedRoom);
  }, [selectedRoom]);
  const handleRoom = (name) => {
    if (selectedRoom == name) setSelectedRoom("");
    else setSelectedRoom(name);
    setIsContinue(false);
  };
  const handleProperty = (name) => {
    if (propertyType == name) setPropertyType("");
    else setPropertyType(name);
    setIsContinue(false);
  };
  const handleContinue = () => {
    if (selectedRoom && propertyType) {
      setIsContinue(false);
      navigate("/Contact");
    } else setIsContinue(true); //   set
  };
  return (
    <div className="bg-gradient-to-br from-slate-200 to-blue-200 flex justify-center items-center min-h-screen">
  <div className="backdrop-blur-lg bg-white/90 border border-white/50 p-5 md:p-8 m-5  max-w-2xl w-full rounded-2xl shadow-2xl shadow-blue-500/10">
    <div className="flex flex-col gap-7">
      {/* Bedrooms Section */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Number of Bedrooms</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <button
              key={room.id}
              className={`relative overflow-hidden rounded-xl p-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                ${
                  selectedRoom === room.name
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-red-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25"
                }`}
              onClick={() => handleRoom(room.name)}
            >
              <span className="relative z-10">{room.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Property Type Section */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Property Type</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {propertyTypee.map((property) => (
            <button
              key={property.id}
              className={`relative overflow-hidden rounded-xl p-3 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                ${
                  propertyType === property.name
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-red-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25"
                }`}
              onClick={() => handleProperty(property.name)}
            >
              <span className="relative z-10">{property.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center mt-3">
        <button
          className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 group"
          onClick={handleContinue}
        >
          <span className="relative z-10 flex items-center gap-2">
            Continue
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Error Message */}
      {isContinue && (
        <div className="flex justify-center">
          <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-3 rounded-lg text-center font-medium shadow-sm animate-pulse">
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {`Please select ${selectedRoom ? "Property Type" : "BedRooms"}.`}
          </div>
        </div>
      )}
    </div>
  </div>
</div>
    // <div className="bg-white flex justify-center items-center min-h-screen">
    //   <div className="border p-12 m-6 md:p-20  border-gray-600 rounded-lg shadow-lg">
    //     <div className="flex flex-col gap-10">
    //       <div>
    //         <p className="mb-5 font-semibold flex justify-center">
    //           {" "}
    //           Number of Bedrooms{" "}
    //         </p>
    //         <div className="flex flex-wrap justify-evenly gap-5">
    //           {rooms.map((room) => (
    //             <button
    //               key={room.id}
    //               className={`border rounded-md p-2 transition 
    //             ${
    //               selectedRoom === room.name
    //                 ? "bg-green-600 text-white"
    //                 : "text-black border-red-800 hover:bg-red-600 hover:text-white"
    //             }`}
    //               onClick={() => handleRoom(room.name)}
    //             >
    //               {room.name}
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //       <div>
    //         <p className="mb-5 font-semibold flex justify-center">
    //           {" "}
    //           Property Type{" "}
    //         </p>
    //         <div className="flex flex-wrap justify-evenly gap-5">
    //           {propertyTypee.map((property) => (
    //             <button
    //               key={property.id}
    //               className={`border rounded-md p-2 transition 
    //             ${
    //               propertyType === property.name
    //                 ? "bg-green-600 text-white"
    //                 : "text-black border-red-800 hover:bg-red-600 hover:text-white"
    //             }`}
    //               onClick={() => handleProperty(property.name)}
    //             >
    //               {property.name}
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="flex justify-center mt-6">
    //         <button
    //           className="bg-red-600 text-white p-2 rounded-md"
    //           onClick={handleContinue}
    //         >
    //           Continue
    //         </button>
    //       </div>
    //       {isContinue && (
    //         <p className="text-red-600 text-center">
    //           {" "}
    //           Please select Bedrooms and Proprty Type{" "}
    //         </p>
    //       )}
    //     </div>
    //   </div>
    
    // </div>
  );
};

export default PropertySelection;
