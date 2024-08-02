import Aos from "aos";
import React, { useEffect } from "react";
import skills from "./data/skills.json";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="Skills" className="p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        className="text-4xl font-semibold mb-10 leading-normal uppercase text-teal-300"
      >
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((data) => (
          <div
            key={data.key} // Use unique key from data
            data-aos="fade-up"
            className="flex flex-col items-center justify-center text-center rounded-lg p-4 border-2 border-emerald-500 shadow-md"
            style={{ minWidth: "250px", maxWidth: "400px", minHeight: "300px" }}
          >
            <h3 className="text-4xl font-bold text-teal-600 mt-0 mb-6">
              {data.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {data.technologies.map((tech) => (
                <span
                  key={tech.title} // Use unique title from tech
                  className="bg-transparent border border-blue-400 text-white py-1 px-3 rounded-lg text-sm font-bold flex items-center gap-2"
                >
                  <img
                    src={tech.imageSrc}
                    alt={tech.title}
                    className="h-5 w-5"
                  />
                  {tech.title}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
