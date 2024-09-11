import React from "react";

function Resume() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Download My Resume
        </h2>
        <a
          href="/Resume.pdf" // This should be in the public folder
          download="Mukul_Mayur_Resume.pdf" // Name of the downloaded file
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;
