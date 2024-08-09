import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <h1
        data-aos="fade-right"
        className="text-4xl font-semibold mb-10 leading-normal uppercase text-teal-300"
      >
        CONTACT ME
      </h1>
      <div className="contact-icon" data-aos="fade-up" data-aos-duration="1000">
        <a
          href="https://www.github.com/Mdeba1998"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <CiLinkedin />
        </a>
        <a
          href="mailto:mdebashis627@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <SiGmail />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <CiFacebook />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-2 p-1 rounded-full border-emerald-400 text-[30px] text-white hover:bg-cyan-600 transition-colors duration-300 b_glow"
        >
          <FaSquareXTwitter />
        </a>
      </div>
      <div style={{ marginTop: '20px' }}></div> {/* This adds space below the contact icons */}
    </div>
  );
};

export default Contact;
