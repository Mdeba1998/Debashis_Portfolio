import React, { useEffect } from "react";
import Aos from "aos";
import projects from "./data/projects.json";
import "../styles/Projects.css"; // Ensure you have this file for custom styles

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-left"
        className="text-4xl font-semibold mb-10 leading-normal uppercase text-teal-300"
      >
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((data, index) => (
          <div
            key={index} // Ideally use a unique ID from data instead
            data-aos="fade-up"
            className="flex flex-col items-center justify-center text-center rounded-lg p-4 border-2 border-emerald-500 shadow-md"
            style={{ minWidth: "250px", maxWidth: "400px", minHeight: "300px" }}
          >
            <h3 className="text-3xl font-bold text-teal-600 mt-2 mb-3">
              {data.title}
            </h3>
            <img
              src={data.imageSrc}
              alt={data.title}
              className="h-40 mb-4 rounded-lg"
            />
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {data.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 text-blue-800 py-1 px-3 rounded-lg text-sm font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="description mb-4">
              {data.description}
            </p>
            <div className="flex gap-4">
              {data.view && (
                <a
                  href={data.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm transition duration-300 ease-in-out"
                >
                  Show More
                </a>
              )}
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-gray-900 text-white py-2 px-4 rounded-lg text-sm transition duration-300 ease-in-out"
                >
                  Show Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
