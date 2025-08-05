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
import PropertySelection from "./Quote/PropertySelection";
import { Route, Routes } from "react-router-dom";
import ContactDetailsForm from "./Quote/ContactDetailsForm";

function App() {
  const [view, setView] = useState(true);

  return (
    <AnimatePresence mode="wait">
        {/* {view ? (
          <Intro onComplete={() => setView(false)} />
        ) : (
        )} */}
          <>
            <Routes>
              <Route
                path="/"
                element={

                  <div className="md:mx-10 overflow-hidden">
                    <LandingMain />
                    <Vision />
                    <Services />
                    <ProjectM />
                    <Testimonials />
                    <Footer />
                  </div>
                  
                }
              />
              <Route path="/quote" element={<PropertySelection />} />
              <Route path="/Contact" element={<ContactDetailsForm/>} />
            </Routes>
          </>
    </AnimatePresence>
  );
}

export default App;
