import React, { useEffect, useRef } from "react";
import img from "/profile/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import pdf from "/profile/Debashis_Java_Developer.pdf";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Java Developer",
        "Spring Boot Developer",
        "Database Developer",
        "Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="Home"
      data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-20 text-center lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
      style={{ marginTop: "60px" }} // Adjust margin top for small screens
    >
      <div className="h-full lg:py-30 flex flex-col justify-center lg:items-start items-center text-white">
      <h1
        data-aos="fade-right"
        className="text-[40px] font-semibold mb-8 leading-normal uppercase"
      >
        Welcome to my profile. I am a{" "}
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500"
          ref={typedRef}
        ></span>{" "}
      </h1>

      <div className="flex mt-3 gap-2">
        <a
          href={pdf}
          download="Debashis_Java_Developer.pdf"
          className="flex items-center justify-center border-2 p-1 rounded-full border-teal-300 text-[20px] text-white hover:bg-teal-600 transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-blue-400 img_glow"
        alt=""
      />
    </div>
  );
};

export default Home;
