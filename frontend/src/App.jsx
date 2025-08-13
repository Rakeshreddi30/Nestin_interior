import "./App.css";

import Footer from "./Components/mainComponents/Footer";
import ProjectM from "./Components/mainComponents/ProjectM";
import Services from "./Components/mainComponents/Services";
import Testimonials from "./Components/mainComponents/Testimonials";
import Vision from "./Components/mainComponents/Vision";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PropertySelection from "./Quote/PropertySelection";
import { Route, Routes } from "react-router-dom";
import ContactDetailsForm from "./Quote/ContactDetailsForm";
import Success from "./Status/Success";
import Failure from "./Status/Failure";
import Landing from "./Components/mainComponents/Landing";

function App() {
  const [view, setView] = useState(true);

  return (
    <AnimatePresence mode="wait">
          <>
            <Routes>
              <Route
                path="/"
                element={

                  <div>
                    <Landing/>
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
              <Route path="/success" element={<Success/>}/>
              <Route path="/failure" element={<Failure/>}/>
              <Route path="/landing" element={<Landing/>}/>
            </Routes>
          </>
    </AnimatePresence>
  );
}

export default App;
