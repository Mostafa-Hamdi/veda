import React from "react";

const WorkBox = ({ desc, children }) => {
  return (
    <div className="box mb-[30px] md:mb-0">
      {children}
      <div className="border-wrapper relative ml-[47px]">
        <p className="info text-[var(--muted-color)] text-[16px] leading-[22px] p-6">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WorkBox;
