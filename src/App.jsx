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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? 
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#5eead4"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
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
