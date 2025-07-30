import "./App.css";
import LandingMain from "./Components/mainComponents/LandingMain";
import Footer from "./Components/mainComponents/Footer";
import ProjectM from "./Components/mainComponents/ProjectM";
import Services from "./Components/mainComponents/Services";
import Testimonials from "./Components/mainComponents/Testimonials";
import Vision from "./Components/mainComponents/Vision";
import { useState } from "react";
import Intro from "./Components/mainComponents/Intro";
import { AnimatePresence } from "framer-motion";


function App() {
  const[view,setView]=useState(true);

  return (
    <AnimatePresence mode="wait">
      <div className="md:mx-10 overflow-hidden">
        {view ? (
          <Intro onComplete={()=>setView(false)}/>
         ) :
          ( <>
            <LandingMain/>
            <Vision/>
            <Services/>
            <ProjectM/>
           <Testimonials/>
            <Footer/>
         </> )
            
        }
      </div>
    </AnimatePresence>
  
  );
}

export default App;
