import React, { useState } from "react";
import aboutImage from "/src/assets/about-1.jpg";

function About() {
  const [active, setActive] = useState("skills");

  return (
    <div
      className="flex space-x-2 text-center w-full  items-center justify-center mt-20 "
      style={{ animation: "fadeIn 2s ease-in-out" }}
    >
      <div className="w-[50%] p-10 pl-20 flex items-center justify-center">
        <img
          src={aboutImage}
          alt=""
          className="rounded-2xl shadow-[0_3px_12px_0px_#CB5AEB]"
        />
      </div>
      <div className="w-[50%] flex justify-start p-10 pr-20 flex-col space-y-3 text-white">
        <h1 className="text-purple-500 flex justify-start text-3xl font-bold">
          About Me
        </h1>
        <p className="items-start text-justify">
          Hi there! I'm Mukul, a passionate and dedicated Front-End Developer
          with <span className="text-purple-600"> 1 year of experience </span>{" "}
          in building responsive and user-friendly Web Applications.
        </p>

        <div className="flex space-x-5 mt-2s">
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "skills"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("skills")}
            >
              Skills
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "experience"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("experience")}
            >
              Experience
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "education"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("education")}
            >
              Education
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-5 h-[380px] overflow-hidden">
          {active === "skills" && (
            <div className="space-y-3">
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">UI/UX</div>
                <div>Designing Web Application.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">React</div>
                <div>Developing interactive UIs.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  JavaScript
                </div>
                <div>Implementing dynamic functionality.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">CSS</div>
                <div>Styling and layout.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">Git</div>
                <div>Version control and collaboration.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Responsive Design
                </div>
                <div>Creating layouts adaptable to all devices.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">APIs</div>
                <div>Fetching and manipulating data.</div>
              </div>
            </div>
          )}
          {active === "experience" && (
            <div className="space-y-3">
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Aug-2023-Present{" "}
                  <span className="text-purple-500">(Brane Group)</span>
                </div>
                <div>Associate Process Leader</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Feb-2023 to Aug-2023{" "}
                  <span className="text-purple-500">(Brane Group)</span>
                </div>
                <div>Associate Process Leader Trainee</div>
              </div>
            </div>
          )}
          {active === "education" && (
            <div className="space-y-3">
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Graduation - <span className="text-orange-400">BE</span> in{" "}
                  <span className="text-orange-400">
                    Electrical and Electronics Engineering
                  </span>
                </div>
                <div>Dayananda Sagar College of Engineering.</div>
              </div>
              <div className="flex flex-col items-start text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Class 10th & 12th
                </div>
                <div>Bijendra Public School</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
