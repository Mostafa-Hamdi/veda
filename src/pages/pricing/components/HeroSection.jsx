import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[110px] pt-[50px] pb-[50px] border-t-[1px] border-[#E0E0E0]">
      <div className="container mx-auto md:flex gap-5 justify-between">
        <h2 className="flex-[0_0_40%] text-[var(--dark-color)] text-[50px] font-bold">
          {" "}
          {t("our_pricing")}
        </h2>
        <p className="flex-[60%] text-[var(--muted-color)]">
          {t("our_pricing_desc")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
