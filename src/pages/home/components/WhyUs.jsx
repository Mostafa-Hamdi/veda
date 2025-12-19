import React from "react";
import Advantage from "./Advantage";
import certified from "../../../assets/certified.png";
import personalized from "../../../assets/personalized.png";
import flexible from "../../../assets/flexible.png";
import { useTranslation } from "react-i18next";
const WhyUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="why-us py-[60px] md:py-[90px]">
      <div className="container mx-auto">
        <h2 className="text-[var(--dark-color)] text-[28px] leading-[42px] md:text-[44px] md:leading-[52px] text-center font-bold mb-2">
          {t("why_us")}
        </h2>
        <div className="md:grid grid-cols-3 gap-6">
          <Advantage
            img={certified}
            alt={"Certified specialists"}
            titlePart1={t("certified")}
            titlePart2={t("specialists")}
            paragraph={t("certified_specialists_desc")}
          />
          <Advantage
            img={personalized}
            alt={"Virtual Consultation"}
            titlePart1={t("virtual")}
            titlePart2={t("consultation")}
            paragraph={t("virtual_consultation_desc")}
          />
          <Advantage
            img={flexible}
            alt={"easy booking"}
            titlePart1={t("easy")}
            titlePart2={t("booking")}
            paragraph={t("esay_booking_desc")}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
