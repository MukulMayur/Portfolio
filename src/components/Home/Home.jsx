import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TypewriterComponent from "./TypeWriter";

function Home() {
  return (
    <div className="h-screen text-[#CD5FF8] flex items-center justify-center w-full bg-transparent">
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
      <div class="card w-[60%] flex items-center justify-center">
        <div className="flex space-x-1 justify-start items-center w-full">
          <div className="bg-red-600 rounded-full h-3 w-3"></div>
          <div className="bg-yellow-600 rounded-full h-3 w-3"></div>
          <div className="bg-green-600 rounded-full h-3 w-3"></div>
        </div>
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
                export default <span className="text-white">information</span>;
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full space-x-4 mt-8">
          <span>
            <a
              href="https://in.linkedin.com/in/mukul-mayur-98497821b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="cursor-pointer" />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/MukulMayur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="cursor-pointer" />
            </a>
          </span>
          <span>
            <a
              href="https://x.com/mayur_muku91178"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} className="cursor-pointer" />
            </a>
          </span>
          <span>
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
  );
}

export default Home;
