import React from "react";

const Advantage = ({ img, alt, titlePart1, titlePart2, paragraph }) => {
  return (
    <div className="advantage text-center p-[32px_32px_0px_32px]">
      <img src={img} alt={alt} className="mx-auto" />
      <h3 className="text-[28px] leading-[28px] text-[var(--dark-color)] capitalize my-[14px]">
        {titlePart1} <br />{" "}
        <span className="text-[var(--primary-color)] font-bold">
          {titlePart2}
        </span>
      </h3>
      <p className="text-[16px] leading-[22px] text-[var(--muted-color)]">
        {paragraph}
      </p>
    </div>
  );
};

export default Advantage;
