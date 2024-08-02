import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BallTriangle } from "react-loader-spinner";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? 
        <div className="loading-screen">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#5eead4"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
       : 
        <div className="bg-slate-900">
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <Education />
          <About />
          <Contact />
          <Footer />
        </div>
      }
    </>
  );
};

export default App;
