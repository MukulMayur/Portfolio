import React from "react";
import { MdSlideshow } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  return (
    <div
      key={project.id}
      className="border-2 border-gray-400 hover:border-red-500 rounded-xl  px-2 md:px-4 py-2 m-4 relative hover:shadow-xl text-white text-center transition duration-300 md:hover:scale-105 hover:bg-[#00194B] shadow-[0_3px_12px_0px_#CB5AEB]"
    >
      <img
        src={project.project_img}
        className="w-full mt-5 rounded-xl flex items-center justify-center h-44"
      />
      <h1 className="m-4 text-3xl text-[#CB5AEB]">{project.title}</h1>
      <p className="text-justify px-3">{project.description}</p>
      <div className="flex space-x-4 items-center justify-center mt-6 mb-5">
        <Link to={project.github} target="_blank">
          <button className="flex justify-center items-center gap-2 bg-[#c04aeb98] px-3 py-1.5  rounded-md hover:bg-[#9429bb98]">
            <img src={project.github_img} className="w-[20px]" />
            Github
          </button>
        </Link>
        <Link to={project.demo} target="_blank">
          <button className="flex justify-center items-center gap-2 bg-[#c04aeb98] px-3 py-1.5 rounded-md hover:bg-[#9429bb98]">
            <MdSlideshow size={24} />
            Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
