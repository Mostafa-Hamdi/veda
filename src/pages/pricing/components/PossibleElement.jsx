import React from "react";

const PossibleElement = () => {
  return (
    <div className="bg-[#608d8f85] mx-auto rounded-full w-[32px] h-[32px] flex items-center justify-center">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontFamily="Arial"
          fill="white"
        >
          ~
        </text>
      </svg>
    </div>
  );
};

export default PossibleElement;
