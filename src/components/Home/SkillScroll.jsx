import React, { useEffect, useRef } from "react";
import reactIcon from "../../assets/TechIcons/react.svg";
import html from "../../assets/TechIcons/html.svg";
import css from "../../assets/TechIcons/css.svg";
import tailwind from "../../assets/TechIcons/tailwind.svg";
import git from "../../assets/TechIcons/git.svg";
import github from "../../assets/TechIcons/github.svg";
import js from "../../assets/TechIcons/js.svg";
import vscode from "../../assets/TechIcons/vscode.svg";
import node from "../../assets/TechIcons/node.svg";

function SkillScroll({ speed = 20 }) {
  const items = [
    { name: "HTML5", image: html },
    { name: "CSS3", image: css },
    { name: "JAVASCRIPT", image: js },
    { name: "REACT", image: reactIcon },
    { name: "NODE", image: node },
    { name: "TAILWIND CSS", image: tailwind },
    { name: "GIT", image: git },
    { name: "GITHUB", image: github },
    { name: "VSCODE", image: vscode },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const contentWidth = scrollContainer.scrollWidth;

    const scroll = () => {
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= contentWidth / 2) {
        scrollAmount = 0; // Reset the scroll position
      }
    };

    const intervalId = setInterval(scroll, speed);
    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <>
      <div className="font-semibold text-3xl text-[#C16DE9] mt-5 text-center">
        TECH STACK
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap p-4 space-x-4 rounded-lg"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar in Firefox and IE/Edge
      >
        <div className="flex items-center justify-center space-x-4 p-2 ">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="md:p-10 p-8 pt-6 pb-6 md:w-44 w-28 transition-colors duration-300 backdrop-blur-[10px] rounded shadow-md flex flex-col items-center justify-center space-y-2 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="transition-transform duration-200 transform hover:scale-110"
              />
              <p className="text-white md:text-lg text-sm font-mono font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillScroll;
