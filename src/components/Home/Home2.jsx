import React from "react";

function Home2() {
  return (
    <>
      <div className="flex items-center w-full  justify-center mt-12 text-white flex-col space-y-5">
        <div className="md:text-4xl text-3xl flex md:flex-row flex-col w-full items-center justify-center  space-x-2">
          <span>ALLOW ME TO</span>{" "}
          <span className="text-[#C16DE9]">INTRODUCE</span>
          <span>MYSELF</span>
        </div>
        <div className="text-lg space-y-1 text-justify md:p-0 p-8 max-w-[1050px]">
          <p>
            I enjoy writing clean, efficient code to build
            <span className="text-[#C16DE9]"> user-friendly interfaces</span>.
            I'm a coder specializing in{" "}
            <span className="text-[#C16DE9]">JavaScript, CSS and HTML.</span>
          </p>
          <p>
            My focus is on creating seamless web experiences through thoughtful
            and precise coding, using JavaScript tools like{" "}
            <span className="text-[#C16DE9]">
              React.js, Tailwind CSS, and Node.js.
            </span>
          </p>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </>
  );
}

export default Home2;
