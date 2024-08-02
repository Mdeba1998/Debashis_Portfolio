// src/components/About.jsx

import React from "react";
import img from "/profile/profile.jpg";
import pdf from "/profile/Debashis_Java_Developer.pdf";

const About = () => {
  return (
    <div
      id="About"
      className="px-4 py-8 lg:px-16 lg:py-20 text-center lg:text-left flex flex-col gap-8 lg:gap-16 items-center"
    >
      <h1
        data-aos="fade-left"
        className="text-4xl font-semibold mb-0 leading-normal uppercase text-teal-300"
      >
        About Me
      </h1>
      <div
        data-aos="fade-up"
        className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 border-2 border-emerald-500 shadow-md p-4 lg:p-7 mx-4 lg:mx-auto lg:w-[900px] max-w-full"
      >
        <div className="flex-shrink-0 w-full lg:w-1/3 flex flex-col items-center justify-center gap-4">
  <img
    data-aos="fade-up"
    src={img}
    className="w-full h-auto max-w-xs lg:max-w-full rounded b_glow object-cover max-w-[300px] lg:max-w-[600px]"
    alt="Profile"
  />
  <a
    href={pdf}
    download="Debashis_Java_Developer.pdf"
    className="flex items-center justify-center border-2 p-2 rounded-full border-teal-300 text-[20px] text-white hover:bg-teal-600 transition-colors duration-300 mt-[35px]"
  >
    Download Resume
  </a>
</div>

        <div className="w-full lg:w-2/3 text-white">
          <p
            data-aos="fade-right"
            className="text-lg lg:text-xl mb-4 text-justify"
          >
            Transitioned from a 2-year Electrical field role to a Java Developer
            position, leveraging a solid foundation in problem-solving and
            analytical skills to excel in software development.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-4 border border-none text-white">
              <tbody>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Father's Name:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    Suresh Mohapatra
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Mother's Name:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    Sushanti Mohapatra
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    D.O.B.:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    05-Jul-1998
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Marital Status:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    Single
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Languages Known:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    English, Hindi, Odia
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Permanent Address:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    21, Khadikapada, Basta, Balasore, Odisha - 756029
                  </td>
                </tr>
                <tr>
                  <td
                    data-aos="fade-left"
                    className="text-lg lg:text-xl font-semibold text-left"
                  >
                    Hobbies:
                  </td>
                  <td
                    data-aos="fade-right"
                    className="text-lg lg:text-xl text-left"
                  >
                    Playing Volley, Web Surfing, Playing Mobile Games
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
