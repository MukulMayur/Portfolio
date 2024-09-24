import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center text-white flex-col text-center h-screen space-y-3">
      <h2 className="p-4 text-4xl ">404 Error Page Not Found</h2>
      <button
        className="bg-[#6E38A4] px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-[#56228a]"
        onClick={() => navigate("/Portfolio/")}
      >
        Go to Portfolio
      </button>
    </div>
  );
};

export default PageNotFound;
