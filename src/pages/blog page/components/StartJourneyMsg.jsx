import React from "react";
import { useTranslation } from "react-i18next";

const StartJourneyMsg = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="start-journey-msg relative bg-[var(--sesco-40)] mb-[42px] flex flex-col md:flex-row justify-center md:justify-between items-center rounded-[18px] px-6 md:px-10 py-6 md:py-0 gap-4 md:gap-0 h-auto md:h-[120px] text-center md:text-left">
      <h4 className="text-[20px] md:text-[27px] font-bold text-[var(--dark-color)]">
        {t("start_journey")}
      </h4>
      <a
        href={
          i18n?.language === "ar"
            ? "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV_AR"
            : "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV"
        }
        className="bg-[var(--dark-color)] text-white rounded-[14px] px-6 py-3 text-[16px] leading-[27px] z-10"
      >
        {t("book_session")}
      </a>
    </div>
  );
};

export default StartJourneyMsg;
