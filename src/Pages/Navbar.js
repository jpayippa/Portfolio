import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition duration-300 ${
        navColour ? "bg-gray-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 w-8" alt="brand" />
        </Link>
        <button
          className="text-white md:hidden"
          onClick={() => setExpand(!expand)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div
          className={`${
            expand ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="text-center md:flex md:justify-end md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="text-white" onClick={() => setExpand(false)}>
                <AiOutlineHome className="inline-block mb-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white" onClick={() => setExpand(false)}>
                <AiOutlineUser className="inline-block mb-1" /> About
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white" onClick={() => setExpand(false)}>
                <AiOutlineFundProjectionScreen className="inline-block mb-1" /> Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-white" onClick={() => setExpand(false)}>
                <CgFileDocument className="inline-block mb-1" /> Resume
              </Link>
            </li>
            <li>
              <a
                href=""
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog className="inline-block mb-1" /> Blogs
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                target="_blank"
                rel="noreferrer"
              >
                <CgGitFork className="mr-2" /> <AiFillStar />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
