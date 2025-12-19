import React from "react";

const IconBox = ({ children, title }) => {
  return (
    <div className="icon-box flex flex-col justify-center items-center w-[110px] h-[110px] rounded-full mb-[17px]">
      {children}
      <h3 className="text-[14px] font-bold text-[var(--dark-color)] mt-2 capitalize">
        {title}
      </h3>
    </div>
  );
};

export default IconBox;
