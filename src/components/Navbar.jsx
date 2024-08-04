import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import pdf from "/profile/Debashis_Java_Developer.pdf";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const content = (
    <div className="lg:hidden fixed top-16 w-full left-0 right-0 bg-slate-900 transition max-h-screen overflow-y-auto">
      <ul className="text-center text-xl p-20">
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="Home" spy={true} smooth={true} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="Skills" spy={true} smooth={true} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="Projects" spy={true} smooth={true} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="Education" spy={true} smooth={true} onClick={closeMenu}>
            Education
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="About" spy={true} smooth={true} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
          <Link to="Contact" spy={true} smooth={true} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 z-50 text-white lg:py-3 px-10 py-4 bg-slate-900 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold lg:px-10">Debashis</span>
          </div>
          <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="Home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="Skills" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="Projects" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="Education" spy={true} smooth={true}>
                  Education
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="About" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-transform transform hover:-translate-y-1 border-b-2 border-slate-900 hover:border-emerald-400 cursor-pointer">
                <Link to="Contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={pdf}
                  download
                  className="hover:bg-slate-800 px-4 py-2 border rounded border-slate-700 text-emerald-400 hover:text-emerald-500 transition-transform transform hover:-translate-y-1"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button className="block transition" onClick={handleClick}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
        </div>
        {click && content}
      </div>
    </nav>
  );
};

export default Navbar;
