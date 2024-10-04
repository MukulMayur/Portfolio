import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import Pdf from "../src/assets/Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
function PdfComp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const scale = windowWidth > 1024 ? 2.0 : windowWidth > 768 ? 1.5 : 0.7;

  return (
    <div className="pdf-viewer lg:mb-10 ">
      <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={true}
          scale={scale}
        />
      </Document>
    </div>
  );
}

export default PdfComp;
