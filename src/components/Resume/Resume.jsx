import React from "react";
import { pdfjs } from "react-pdf";
import { IoMdCloudDownload } from "react-icons/io";
import PdfComp from "../../PdfComp";

// Setting up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Dynamic URL for the resume PDF
const pdfUrl = "/Portfolio/src/assets/Resume.pdf"; // Relative path for production

function Resume() {
  const downloadFile = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = "Mukul_Resume.pdf"; // Cleaner way to set the download attribute
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 md:space-y-8 gap-y-4">
      {/* Download Resume Button */}
      <div className="text-center">
        <button
          onClick={() => downloadFile(pdfUrl)}
          className="bg-blue-500 text-white flex items-center gap-2 font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
        >
          Download Resume <IoMdCloudDownload size={24} />
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex items-center justify-center mb-0">
        <PdfComp />
      </div>
    </div>
  );
}

export default Resume;
