import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TypewriterComponent from "./TypeWriter";
import Home2 from "./Home2";
import SkillScroll from "./SkillScroll";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div
        className="h-screen text-[#CD5FF8] flex md:flex-row flex-col items-center justify-center w-full bg-transparent"
        style={{ animation: "fadeIn 3s ease-in-out" }}
      >
        <div className="w-[40%] flex flex-col items-center justify-start">
          <div className="flex flex-col space-y-2 justify-start w-full text-4xl text-white">
            <p>Hi There!</p>
            <p>
              I'm <span className="text-[#CD5FF8]">Mukul Mayur</span>
            </p>
          </div>
          <div className="w-full flex items-start justify-start mt-4 text-4xl">
            <TypewriterComponent />
          </div>
        </div>
        <div className="card w-[60%] flex items-center justify-center">
          <div className="flex space-x-1 justify-betweeen items-center w-full">
            <div className="w-[30%] flex space-x-1.5">
              <div className="bg-red-500 rounded-full h-3 w-3"></div>
              <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
              <div className="bg-green-500 rounded-full h-3 w-3"></div>
            </div>
            <div className="w-[40%]">
              <div className="w-44 h-5 bg-slate-700 text-gray-300 rounded-3xl text-xs text-center flex items-center justify-center font-mono">
                MukulMayur/information/
              </div>
            </div>
            <div className="w-[30%] flex justify-end items-center space-x-2">
              <div className="flex font-mono items-center justify-center text-md text-gray-400">
                +
              </div>
              <div className="flex items-center justify-center space-x-0.5">
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-gray-700 p-0"></div>
          <div className="w-full font-mono">
            <div className="">
              <span className="text-green-600">const information</span> ={" "}
              <span>{"{"}</span>
            </div>
            <div className="flex justify-start items-start w-full flex-col">
              <div className="mx-10">
                <span className="text-blue-400">name : </span>
                <span className="text-yellow-300">'Mukul Mayur',</span>
              </div>
              <div className="mx-10">
                <span className="text-blue-400">role : </span>
                <span className="text-yellow-300">'Frontend Developer',</span>
              </div>
              <div className="mx-10 flex justify-center items-center">
                <span className="text-blue-400">location : </span>
                <span className="text-yellow-300">'Bengaluru , India',</span>
                <span className="mx-1">
                  <MdOutlineLocationOn size={20} />
                </span>
              </div>
              <div className="mx-10">
                <span className="text-blue-400">experienceYears : </span>
                <span className="text-yellow-300">'1.5 Year',</span>
              </div>
              <div className="mx-10">
                <span className="text-blue-400">skills : </span>
                <span className="text-yellow-300">['React','Tailwind'],</span>
              </div>
              <div className="mx-10">
                <span className="text-blue-400">accomplishments : </span>
                <span className="text-yellow-300">'Built a UI </span>
                <p className="mx-[30px] text-yellow-300">
                  to speed up development.'
                </p>
              </div>
              <div className="mx-10">
                <span>{"};"}</span>
              </div>
              <br />
              <div className="">
                <span className="text-blue-400">
                  export default <span className="text-white">information</span>
                  ;
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full space-x-4 mt-5">
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
      </div>
      <div>
        <Home2 />
      </div>
      <div>
        <SkillScroll />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
