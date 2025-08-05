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
  };
  const handleProperty = (name) => {
    if (propertyType == name) setPropertyType("");
    else setPropertyType(name);
  };
  const handleContinue = () => {
    if (selectedRoom && propertyType) {
      setIsContinue(false);
      navigate("/Contact");
    } else setIsContinue(true); //   set
  };
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="border p-12 m-6 md:p-20  border-gray-600 rounded-lg shadow-lg">
        <div className="flex flex-col gap-10">
          <div>
            <p className="mb-5 font-semibold flex justify-center">
              {" "}
              Number of Bedrooms{" "}
            </p>
            <div className="flex flex-wrap justify-evenly gap-5">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  className={`border rounded-md p-2 transition 
                ${
                  selectedRoom === room.name
                    ? "bg-green-600 text-white"
                    : "text-black border-red-800 hover:bg-red-600 hover:text-white"
                }`}
                  onClick={() => handleRoom(room.name)}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 font-semibold flex justify-center">
              {" "}
              Property Type{" "}
            </p>
            <div className="flex flex-wrap justify-evenly gap-5">
              {propertyTypee.map((property) => (
                <button
                  key={property.id}
                  className={`border rounded-md p-2 transition 
                ${
                  propertyType === property.name
                    ? "bg-green-600 text-white"
                    : "text-black border-red-800 hover:bg-red-600 hover:text-white"
                }`}
                  onClick={() => handleProperty(property.name)}
                >
                  {property.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-red-600 text-white p-2 rounded-md"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
          {isContinue && (
            <p className="text-red-600 text-center">
              {" "}
              Please select Bedrooms and Proprty Type{" "}
            </p>
          )}
        </div>
      </div>
    
    </div>
  );
};

export default PropertySelection;
