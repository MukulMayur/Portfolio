import React from "react";

const pdf = "https://mukulmayur.github.io/Portfolio/Resume.pdf";

function Resume() {
  const downloadFile = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Mukul_Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Download My Resume
        </h2>
        <button
          onClick={() => downloadFile(pdf)}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
