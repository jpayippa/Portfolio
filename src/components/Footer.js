import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-2 w-full absolute bottom-0">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <p className="m-0 text-center">Designed and Developed by Joel</p>
        <p>Copyright © {year} jps</p>
        <div className="flex space-x-4">
          <a href="https://github.com/jpayippa" className="text-white hover:text-gray-400">
            <AiFillGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/joel-payippara-shibu/" className="text-white hover:text-gray-400">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.instagram.com/joel_ps_/" className="text-white hover:text-gray-400">
            <AiFillInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
