import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ArrowRightIcon = () => {
  const [arrDir, setArrDir] = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n?.language === "ar"
      ? setArrDir("transform rotate-180")
      : setArrDir(null);
  }, [i18n?.language]);
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[20px] h-auto fill-white ${arrDir}`}
    >
      <defs>
        <style>{`.cls-1{fill:none;}`}</style>
      </defs>
      <title>Arrow Right</title>
      <g data-name="Layer 2" id="Layer_2">
        <path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z" />
        <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
      </g>
      <g id="frame">
        <rect className="cls-1" height="32" width="32" />
      </g>
    </svg>
  );
};

export default ArrowRightIcon;
