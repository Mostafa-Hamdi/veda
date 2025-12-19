import React from "react";

const ArrowBottom = (props) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="w-[20px] h-auto"
  >
    <defs>
      <style>{".cls-1{fill:none;}"}</style>
    </defs>
    <title>Down Arrow</title>
    <g data-name="Layer 2" id="Layer_2">
      <path d="M16,29a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,1.42-1.42L16,26.59l8.29-8.3a1,1,0,0,1,1.42,1.42l-9,9A1,1,0,0,1,16,29Z" />
      <path d="M16,29a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V28A1,1,0,0,1,16,29Z" />
    </g>
    <g id="frame">
      <rect className="cls-1" height="32" width="32" />
    </g>
  </svg>
);

export default ArrowBottom;
