import React, { useState } from 'react';


const ProjectM = () => {

const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Apartment',
      description: 'A complete redesign of a downtown apartment, focusing on clean lines, natural light, and a minimalist aesthetic. The space was opened up to create a seamless flow between the living, dining, and kitchen areas, using a muted color palette to enhance the sense of tranquility.',
      images: [
        'https://placehold.co/800x600/1e293b/ffffff?text=Apartment+Interior+1',
        'https://placehold.co/800x600/1e293b/ffffff?text=Living+Room+View',
        'https://placehold.co/800x600/1e293b/ffffff?text=Bedroom+Design',
        'https://placehold.co/800x600/1e293b/ffffff?text=Kitchen+Renovation',
      ],
    },
    {
      id: 2,
      title: 'Cozy Rustic Cabin',
      description: 'An interior design project for a rustic cabin retreat. We incorporated natural materials like reclaimed wood and stone, along with warm textiles and a fireplace to create a cozy and inviting atmosphere. The design balances rustic charm with modern comforts.',
      images: [
        'https://placehold.co/800x600/4a4a4a/ffffff?text=Cabin+Interior+1',
        'https://placehold.co/800x600/4a4a4a/ffffff?text=Stone+Fireplace',
        'https://placehold.co/800x600/4a4a4a/ffffff?text=Rustic+Kitchen',
        'https://placehold.co/800x600/4a4a4a/ffffff?text=Cozy+Bedroom',
      ],
    },
    {
      id: 3,
      title: 'Luxury Office Space',
      description: 'A high-end commercial design for a corporate office. The goal was to create a productive yet luxurious environment. The design features open-plan workspaces, private meeting rooms, and a sophisticated lounge area, all integrated with smart technology.',
      images: [
        'https://placehold.co/800x600/4f46e5/ffffff?text=Office+Space+1',
        'https://placehold.co/800x600/4f46e5/ffffff?text=Meeting+Room',
        'https://placehold.co/800x600/4f46e5/ffffff?text=Lounge+Area',
        'https://placehold.co/800x600/4f46e5/ffffff?text=Reception+Design',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 font-sans p-4 md:p-10">
      <h1 className="text-3xl md:text-5xl font-bold font-forum text-center mb-12 text-slate-900">Our  Projects</h1>
      
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

// A component for a single project row, handling the layout and image slider
const ProjectRow = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image with infinite loop
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image with infinite loop
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Determine the order of columns based on the index
  const isImageFirst = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row shadow-xl rounded-2xl md:h-[400px] md:mx-10  overflow-hidden">
      {/* First Column: The image slider */}
      <div className={`relative w-full md:w-2/3 min-h-[100px] flex-shrink-0 ${isImageFirst ? 'order-1' : 'order-2'}`}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        
        {/* Navigation arrows */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="p-2 bg-slate-900/50 hover:bg-slate-900/70 transition rounded-full text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="p-2 bg-slate-900/50 hover:bg-slate-900/70 transition rounded-full text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Column: Project details */}
      <div className={`w-full md:w-1/2 p-8 flex flex-col justify-center text-center bg-white ${isImageFirst ? 'order-2' : 'order-1'}`}>
        <h2 className="text-3xl font-semibold mb-4 text-slate-800">{project.title}</h2>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectM;