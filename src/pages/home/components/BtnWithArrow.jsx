import React from "react";
import ArrowRightIcon from "../../../icons/ArrowRightIcon";
import { Link } from "react-router-dom";

const BtnWithArrow = ({ text, classes, link, onClick }) => {
  return (
    <Link
      to={link}
      className={`${classes} btn bg-[var(--dark-color)] text-[var(--white-color)]  flex items-center gap-[14px] w-fit rounded-[14px] capitalize`}
      onClick={onClick}
    >
      {text}
      <ArrowRightIcon />
    </Link>
  );
};

export default BtnWithArrow;
