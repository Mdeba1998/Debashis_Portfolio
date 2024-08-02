import React, { useEffect, useState } from "react";
import education from "../components/data/education.json";
import Aos from "aos";

const Education = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="Education" className="container mx-auto p-4 lg:w-[900px] lg:overflow-hidden">
      <h1 data-aos="fade-right" className="text-4xl md:text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6 text-center uppercase text-teal-300">
        Education
      </h1>
      <div className="overflow-hidden h-full">
        {education.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="bg-transparent text-white rounded-lg shadow-lg overflow-hidden mb-4 lg:mb-6 border-2 border-emerald-500 shadow-md mx-2 sm:mx-4 md:mx-6"
          >
            <div className="p-4 sm:p-4 lg:p-2">
              <div className="flex flex-col sm:flex-row items-start mb-4">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-full"
                />
                <div className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex flex-col">
                  <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
                    {item.school}
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-sm font-semibold">
                    {item.degree}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-sm font-semibold">
                    {item.date}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-sm font-semibold">
                    {item.grade}
                  </p>
                </div>
              </div>
              {expandedId === item.id && (
                <>
                <p className="text-lg sm:text-sm lg:text-md mb-4 font-semibold uppercase">
                   University: {item.university}
                </p>
                <p className="text-xs sm:text-sm lg:text-sm mb-4">
                  {item.desc}
                </p>
                </>
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-blue-400 hover:underline focus:outline-none text-xs sm:text-sm lg:text-xs"
                >
                  {expandedId === item.id ? "Show Less..." : "Read More..."}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
