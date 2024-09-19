import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full p-4 flex md:flex-row flex-col md:justify-between justify-start items-center mt-10 transition-colors duration-300 backdrop-blur-[4px] md:space-y-0 space-y-2 md:pb-4 pb-8">
      <div className="text-white md:w-[33%] flex items-center justify-center space-x-2">
        <span>Design & Development :</span>
        <strong className="text-[#C16DE9]">Mukul Mayur</strong>
      </div>
      <div className="text-white md:w-[33%] flex md:justify-center justify-start items-center">
        © 2024 Mukul Mayur
      </div>
      <div className="flex space-x-6 text-white items-center md:w-[34%] w-full justify-center">
        <span className="transition-transform duration-200 transform hover:scale-110">
          <a
            href="https://in.linkedin.com/in/mukul-mayur-98497821b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="cursor-pointer" />
          </a>
        </span>
        <span className="transition-transform duration-200 transform hover:scale-110">
          <a
            href="https://github.com/MukulMayur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="cursor-pointer" />
          </a>
        </span>
        <span className="transition-transform duration-200 transform hover:scale-110">
          <a
            href="https://x.com/mayur_muku91178"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} className="cursor-pointer" />
          </a>
        </span>
        <span className="transition-transform duration-200 transform hover:scale-110">
          <a
            href="mailto:mukulmayur000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={24} className="cursor-pointer" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
