import React from "react";
import FeatureCard from "./FeatureCard";
import scalable from "../../../assets/1.3.png";
import smarter from "../../../assets/1.4.png";
import tailored from "../../../assets/1.2.png";
import { useTranslation } from "react-i18next";
const Features = () => {
  const { t, i18n } = useTranslation();
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
    <section
      id="features"
      className="features bg-[#F0F4F5] md:rounded-[83px] overflow-hidden"
    >
      <div className="features-header pt-[90px] pb-[20px] mb-1.5">
        <div className="container mx-auto">
          <h2 className="text-center text-[27px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold mb-6">
            {t("features_benefits")} <br />{" "}
            <span className="text-[var(--primary-color)]">
              {t("seamless_experience")}
            </span>
          </h2>
          <div className="actions flex items-center justify-center gap-5">
            <a
              href={
                i18n?.language === "ar"
                  ? "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV_AR"
                  : "https://selecttime.appointy.com/veda/bookings/appointment?service=srv_01K888QD2NR10KPE30E66PNYKV"
              }
              className="btn bg-[var(--dark-color)] text-[var(--white-color)] text-[16px] leading-[27px] p-[12.5px_30px] md:p-[15.5px_30px] w-fit rounded-[14px] capitalize"
            >
              {t("start_now")}
            </a>
            <div
              onClick={handleClick}
              className="btn cursor-pointer text-[var(--dark-color)] text-[16px] leading-[27px] p-[12.5px_30px] md:p-[15.5px_30px] w-fit rounded-[14px] capitalize border-[1px] border-[#1C3F3A]"
              aria-label="Learn more about VEDA 2025 Zoho Bookings"
            >
              {t("learn_more")}
              {/* <span className="visually-hidden">
                about VEDA 2025 Zoho Bookings
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="features-content pt-[14px]">
        <div className="container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-[0_24px]">
          <FeatureCard
            img={tailored}
            imgAlt={t("personalized_plans")}
            heading={t("personalized_plans")}
            desc={t("personalized_plans_info")}
            // link={
            //   i18n?.language === "ar"
            //     ? "https://selecttime.appointy.com/veda/packages"
            //     : "https://selecttime.appointy.com/veda/packages"
            // }
          />
          <FeatureCard
            img={smarter}
            imgAlt={t("flexible_scheduling")}
            heading={t("flexible_scheduling")}
            desc={t("flexible_scheduling_info")}
            // link={
            //   i18n?.language === "ar"
            //     ? "https://selecttime.appointy.com/veda/packages"
            //     : "https://selecttime.appointy.com/veda/packages"
            // }
          />
          <FeatureCard
            img={scalable}
            imgAlt={t("ongoing_support")}
            heading={t("ongoing_support")}
            desc={t("ongoing_support_info")}
            // link={
            //   i18n?.language === "ar"
            //     ? "https://selecttime.appointy.com/veda/packages"
            //     : "https://selecttime.appointy.com/veda/packages"
            // }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
