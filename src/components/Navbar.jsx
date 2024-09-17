import React, { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import { FaUser, FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { LuCode2 } from "react-icons/lu";
import { ImBlog } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current path

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAVBAR_LINK = [
    { id: 1, path: "/Portfolio/", name: "Home", icon: MdHome },
    { id: 2, path: "/Portfolio/about", name: "About", icon: FaUser },
    { id: 3, path: "/Portfolio/projects", name: "Projects", icon: LuCode2 },
    { id: 4, path: "/Portfolio/resume", name: "Resume", icon: FaRegFileAlt },
    {
      id: 5,
      path: "/Portfolio/services",
      name: "Services",
      icon: MdMiscellaneousServices,
    },
    // { id: 6, path: "/Portfolio/blogs", name: "Blogs", icon: ImBlog },
  ];

  return (
    <div
      className={`p-3 bg-transparent fixed text-[#FFFFFF] w-full top-0 flex justify-around items-center z-10 transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="text-[#CB5EF4] text-3xl p-2 font-semibold cursor-pointer w-[10%] items-center justify-center flex">
        <Link to={"/Portfolio/"}>MM</Link>
      </div>
      <div className="w-[70%] flex items-center justify-end">
        <ul className="flex gap-10">
          {NAVBAR_LINK.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`text-xl ${
                  location.pathname === link.path
                    ? "text-purple-500"
                    : "text-white"
                }`}
              >
                <div className="relative group p-2 pr-0 text-xl font-bold cursor-pointer flex items-center justify-center space-x-2">
                  {React.createElement(link.icon, {
                    color:
                      location.pathname === link.path
                        ? "#CB5EF4"
                        : "currentColor",
                  })}
                  <span>{link.name}</span>
                  <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left p-0.5 rounded-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[10%] flex flex-center justify-start">
        <Link to={"https://github.com/MukulMayur/Portfolio"}>
          <button className="flex space-x-1 bg-[#6e38a4] p-[5px] rounded px-[15px] border-[1px] border-gray-600 cursor-pointer hover:bg-[#643b8d] transition-transform duration-200 transform hover:scale-105">
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
