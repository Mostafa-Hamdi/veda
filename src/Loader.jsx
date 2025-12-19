import React from "react";

const Loader = ({ size = 10, color = "text-[var(--primary-color)]" }) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div
        className={`w-${size} h-${size} border-4 border-dashed rounded-full animate-spin ${color} border-t-transparent`}
      ></div>
    </div>
  );
};

export default Loader;
