import React from "react";
import Service_1 from "/src/assets/Services_1.png"; // Adjust path and extension as needed

const Services = () => {
  return (
    <div className="flex space-x-2 items-center w-full justify-center mt-24 flex-col space-y-4">
      <div className="w-[80%] h-[300px] border rounded-xl flex items-center justify-center space-x-4">
        <div className="w-[30%]">
          <img src={Service_1} className="w-lg" />
        </div>
        <div className="text-white w-[30%]">
          <p>
            Crafting mobile-friendly, responsive layouts to ensure seamless user
            experience across devices."
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-red-500">Tech Stack</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind Css</li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] h-[300px] border rounded-xl"></div>
      <div className="w-[80%] h-[300px] border rounded-xl"></div>
    </div>
  );
};

export default Services;
