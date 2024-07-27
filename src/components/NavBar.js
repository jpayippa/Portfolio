import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navClass, setNavClass] = useState("black");
  const [blurContent, setBlurContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavClass("translucent shadow-md");
        setBlurContent(true);
      } else {
        setNavClass("black");
        setBlurContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-20 top-0 transition duration-300 ${navClass}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="brand" className="h-8 w-8 mr-2" />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setExpand(!expand)} className="text-white">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          <div className={`w-full md:flex md:items-center md:w-auto ${expand ? "block" : "hidden"}`}>
            <ul className="text-center md:flex md:justify-end md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-gray-400" onClick={() => setExpand(false)}>
                  <AiOutlineHome size={24} className="inline-block mb-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400" onClick={() => setExpand(false)}>
                  <AiOutlineUser size={24} className="inline-block mb-1" /> About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-gray-400" onClick={() => setExpand(false)}>
                  <AiOutlineFundProjectionScreen size={24} className="inline-block mb-1" /> Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-white hover:text-gray-400" onClick={() => setExpand(false)}>
                  <CgFileDocument size={24} className="inline-block mb-1" /> Resume
                </Link>
              </li>
              <li>
                <a href="https://github.com/jpayippa/Portfolio" target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  <CgGitFork className="mr-2" /> <AiFillStar />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`blurred-content ${blurContent ? "blurred" : ""}`}>
        {/* Your page content goes here */}
      </div>
      {blurContent && <div className="blur-overlay"></div>}
    </>
  );
}

export default NavBar;
