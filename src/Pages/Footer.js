import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3>Designed and Developed by Soumyajit Behera</h3>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3>Copyright © {year} SB</h3>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
