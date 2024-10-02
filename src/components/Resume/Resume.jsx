import React from "react";
import { pdfjs } from "react-pdf";
import { IoMdCloudDownload } from "react-icons/io";
import PdfComp from "../../PdfComp";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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
    <div className="flex flex-col justify-center items-center md:h-screen h-full lg:mt-[500px] mt-[70px] md:space-y-8 gap-y-4 ">
      <div className="text-center">
        <button
          onClick={() => downloadFile(pdf)}
          className="bg-blue-500 text-white flex items-center gap-2 font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
        >
          Download Resume <IoMdCloudDownload size={24} />
        </button>
      </div>
      <div className="flex items-center justify-center  mb-0">
        <PdfComp />
      </div>
    </div>
  );
}

export default Resume;
