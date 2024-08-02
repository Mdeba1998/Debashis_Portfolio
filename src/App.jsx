import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BallTriangle, CirclesWithBar } from "react-loader-spinner";
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
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#3b82f6"
            innerCircleColor="#22d3ee"
            barColor="#38bdf8"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
