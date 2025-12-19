import React from "react";
import { useTranslation } from "react-i18next";

const FeatureCard = ({ img, imgAlt, heading, desc }) => {
  const { t } = useTranslation();
  const handleClick = () => {
    const packagesSection = document.querySelector("#packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("⚠️ No element found with ID #packages");
    }
  };
  return (
    <div className="feature-card rounded-[32px] overflow-hidden bg-white text-center mb-5 md:mb-6 lg:mb-10 flex flex-col">
      <div className="card-img">
        <img src={img} alt={imgAlt} className="mx-auto" />
      </div>
      <div className="card-content p-[30px] bg-[var(--primary-80)] mt-[-30px] z-2 relative rounded-[32px] flex-1 flex flex-col items-center">
        <h3 className="text-[27px] leading-[auto] text-[var(--dark-color)] capitalize mb-3 md:mb-4">
          {heading}
        </h3>
        <p className="text-[16px] leading-[22px] text-[var(--muted-color)] mb-6 flex-1">
          {desc}
        </p>
        <div
          onClick={handleClick}
          className="btn cursor-pointer text-[var(--dark-color)] text-[16px] leading-[27px] p-[10.5px_30px] w-fit rounded-[14px] capitalize border-[1px] border-[#1C3F3A] font-bold"
        >
          {t("start_now")}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
