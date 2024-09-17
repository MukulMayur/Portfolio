import React from "react";
import SingleProject from "./SingleProject";
import { Projects_Info } from "./ProjectInfo";

function Projects() {
  return (
    <div
      className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 px-32"
      style={{ animation: "fadeIn 2s ease-in-out" }}
    >
      {Projects_Info.map((project) => (
        <SingleProject project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
