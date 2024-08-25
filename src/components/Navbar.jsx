import React from "react";
import { MdHome } from "react-icons/md";
import { FaUser, FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuCode2 } from "react-icons/lu";
import { ImBlog } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

function Navbar() {
  const NAVBAR_LINK = [
    {
      id: 1,
      path: "/",
      name: "Home",
      icon: MdHome,
    },
    {
      id: 2,
      path: "/about",
      name: "About",
      icon: FaUser,
    },
    {
      id: 3,
      path: "/projects",
      name: "Projects",
      icon: LuCode2,
    },
    {
      id: 4,
      path: "/resume",
      name: "Resume",
      icon: FaRegFileAlt,
    },
    {
      id: 5,
      path: "/",
      name: "Blogs",
      icon: ImBlog,
    },
  ];
  return (
    <div className="p-3 text-[#FFFFFF] w-full top-0 flex justify-around items-center">
      <div className="text-[#CB5EF4] text-3xl p-2 font-semibold cursor-pointer w-[10%] items-center justify-center flex">
        <Link to={"/"}>Mukul</Link>
      </div>
      <div className="w-[70%] flex items-center justify-end">
        <ul className="flex gap-10">
          {NAVBAR_LINK.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="text-xl">
                <div className="relative group p-2 pr-0 text-xl font-bold cursor-pointer flex items-center justify-center space-x-2">
                  {React.createElement(link.icon)}
                  <span>{link.name}</span>
                  <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left p-0.5 rounded-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[10%] flex flex-center justify-start">
        <Link to={"https://github.com/MukulMayur/Portfolio"}>
          <button className="flex space-x-1 bg-[#4F2E6F] p-[4px] rounded px-[15px] border-[1px] border-gray-600 cursor-pointer hover:bg-[#663b90] transition-transform duration-200 transform hover:scale-105">
            <span>
              <AiOutlineGithub size={20} />
            </span>
            <span>
              <FaRegStar size={20} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
