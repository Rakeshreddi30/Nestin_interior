import "./App.css";
import Landing from "./Components/Landing";
import LandingMain from "./Components/LandingMain";
import About from "./Components/mainComponents/About";
import Footer from "./Components/mainComponents/Footer";
import MainSection from "./Components/mainComponents/MainSection";
import Nav from "./Components/mainComponents/Nav";
import Projects from "./Components/mainComponents/Projects";
import Services from "./Components/mainComponents/Services";
import Motioneffect from "./Components/Motioneffect";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div className="mx-10 overflow-hidden">
        {/* <Landing/> */}
        {/* <Motioneffect/> */}
        {/* <Navbar/> */}

        {/* <Nav/> */}
        <LandingMain/>
        {/* <MainSection/> */}
        <About/>
        <Services/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
