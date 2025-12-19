import React from "react";

const DashElement = () => {
  return (
    <div className="bg-[#F2F2F2] mx-auto rounded-full w-[32px] h-[32px] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="red"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </div>
  );
};

export default DashElement;
