import React from "react";
import Service_1 from "/src/assets/Services_1.png";
import Service_2 from "/src/assets/Services_2.png";
import Service_3 from "/src/assets/Services_3.png";
import react from "../../assets/techIcons/react.svg";
import html from "../../assets/techIcons/html.svg";
import css from "../../assets/techIcons/css.svg";
import tailwind from "../../assets/techIcons/tailwind.svg";
import npm from "../../assets/techIcons/npm.svg";
import figma from "../../assets/techIcons/figma.svg";
import git from "../../assets/techIcons/git.svg";
import github from "../../assets/techIcons/github.svg";
import js from "../../assets/techIcons/js.svg";
import vscode from "../../assets/techIcons/vscode.svg";
import node from "../../assets/techIcons/node.svg";

const Services = () => {
  return (
    <div className="flex space-x-2 items-center w-full justify-center mt-24 flex-col space-y-8 h-[90%] pb-20">
      <div
        className="w-[60%] h-[250px] border-2 hover:border-red-500  rounded-xl flex items-center justify-between space-x-4 p-10 transition-transform duration-200 transform hover:scale-110 hover:bg-[#00194B]"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <div className="w-[30%]">
          <img src={Service_1} className="w-lg" />
        </div>
        <div className="text-white w-[40%]">
          <p className="text-justify">
            Building user-friendly, responsive layouts to ensure a smooth and
            easy user experience on any device. The design adjusts to fit all
            screens, from phones to computers, keeping everything clear and easy
            to use.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-red-500">Tech Stack</h1>
          <ul className="space-y-1 mt-2 text-slate-300">
            <li className="flex items-center justify-start gap-2">
              <p>HTML</p>
              <img src={html} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>CSS</p>
              <img src={css} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Javascript</p>
              <img src={js} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>React.js</p>
              <img src={react} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Tailwind css</p>
              <img src={tailwind} className="w-[20px]" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-[60%] h-[250px] border-2 rounded-xl  hover:border-red-500  flex items-center justify-between space-x-4 p-10 transition-transform duration-200 transform hover:scale-110 hover:bg-[#00194B]"
        style={{ animation: "fadeIn 2s ease-in-out" }}
      >
        <div className="w-[30%]">
          <img src={Service_2} className="w-lg" />
        </div>
        <div className="text-white w-[40%] ">
          <p className="text-justify">
            Designing and building user interfaces that look great and are easy
            to use. Adding smooth animations and clear navigation to make sure
            users have a pleasant and interactive experience. Every detail is
            aimed at making the site easy to use and engaging.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-red-500">Tech Stack</h1>
          <ul className="space-y-1 mt-2 text-slate-300">
            <li className="flex items-center justify-start gap-2">
              <p>React</p>
              <img src={react} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Tailwind</p>
              <img src={tailwind} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Figma</p>
              <img src={figma} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Javascript</p>
              <img src={js} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Git</p>
              <img src={git} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Github</p>
              <img src={github} className="w-[20px]" />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-[60%] h-[250px] border-2  hover:border-red-500  rounded-xl flex items-center justify-between space-x-4 p-10 transition-transform duration-200 transform hover:scale-110 hover:bg-[#00194B]"
        style={{ animation: "fadeIn 4s ease-in-out" }}
      >
        <div className="w-[30%]">
          <img src={Service_3} className="w-lg" />
        </div>
        <div className="text-white w-[40%]">
          <p className="text-justify">
            Adding third-party APIs to websites and apps to include new features
            and improve functionality. This means connecting with services like
            payment systems, social media, or other data sources. This makes the
            site or app more useful, easier to use, and provides a better
            overall experience.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-red-500">Tech Stack</h1>
          <ul className="space-y-1 mt-2 text-slate-300">
            <li className="flex items-center justify-start gap-2">
              <p>React</p>
              <img src={react} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Javascript</p>
              <img src={js} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>NPM</p>
              <img src={npm} className="w-[25px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Node</p>
              <img src={node} className="w-[20px]" />
            </li>
            <li className="flex items-center justify-start gap-2">
              <p>Axios/Fetch</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
