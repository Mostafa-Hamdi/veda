import React from "react";
import thumb from "../../../assets/THUMB.png";
import thumb2 from "../../../assets/THUMB-2.png";
import BtnWithArrow from "./BtnWithArrow";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="hero-section bg-[var(--primary-80)] p-[120px_0px_40px] md:p-[166px_0_82px] md:rounded-[0_0_83px_83px]">
      <div className="container mx-auto md:grid grid-cols-2 md:gap-10 items-center">
        <div className="content mb-[30px] md:mb-0">
          <h1 className="text-[36px] leading-[40px] lg:text-[68px] lg:leading-[58px] font-extrabold max-w-[350px] md:max-w-[450px] capitalize mb-2.5 md:mb-5 ">
            {t("unlock_best_self")} <br />
            <span className="text-[var(--primary-color)]">
              {t("proven_guidance")}
            </span>
          </h1>
          <p className="text-[16px] md:text-lg lg:text-[21px] md:leading-[27px] text-[var(--muted-color)] max-w-[450px] mb-[30px] lg:mb-[60px]">
            {t("personalized_coaching_paragraph")}
          </p>
          <BtnWithArrow
            text={t("start_now")}
            link={
              i18n?.language === "ar"
                ? "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV_AR"
                : "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV"
            }
            classes={
              "text-[19px] leading-[27px]  p-[12.5px_22px_12.5px_40px] md:p-[17.5px_22px_17.5px_40px]"
            }
          />
        </div>
        <div className="image relative">
          <img src={thumb} alt="logo" />
          <img
            src={thumb2}
            alt="logo"
            className="absolute top-[50%] left-[-45px] transform translate-y-[-50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
