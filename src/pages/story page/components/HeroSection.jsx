import { Calendar, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Herosection = ({ title, titleAR, date, featuredImage }) => {
  const { t, i18n } = useTranslation();
  const [heading, setHeading] = useState("");
  useEffect(() => {
    if (i18n.language.startsWith("en")) {
      setHeading(title);
    } else {
      setHeading(titleAR);
    }
  }, [i18n?.language, title, titleAR]);
  return (
    <section
      style={{
        backgroundImage: `url(${featuredImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="blog-page-hero relative mt-[110px] pt-[40px] md:pt-[50px] pb-[40px] md:pb-[50px] border-t border-[#E0E0E0] min-h-[70vh] md:h-[calc(100vh-110px)]"
    >
      <div className="container mx-auto z-2 relative flex flex-col justify-between h-full px-4">
        {/* Breadcrumb */}
        <div className="breadcrump flex flex-wrap items-center gap-2 md:gap-5 mb-4 text-sm md:text-base">
          <span className="bg-white/15 text-white rounded-full px-3 py-1 relative">
            {t("home")}
          </span>
          <span className="bg-white/15 text-white rounded-full px-3 py-1 relative">
            {t("story")}
          </span>
          <span className="text-white">{heading}</span>
        </div>

        {/* Main Info */}
        <div className="blog-info">
          {/* <span className="bg-[#1C3F3A] rounded-full inline-block mb-4 md:mb-6 px-5 py-2 text-white text-[10px] md:text-[12px] uppercase tracking-wide">
            {category}
          </span> */}
          <h2 className="text-[32px] leading-[38px] md:text-[68px] md:leading-[58px] text-white font-extrabold max-w-[850px] mb-4 md:mb-6">
            {heading}
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 text-[var(--primary-80)] text-sm">
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </p>
            {/* <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
