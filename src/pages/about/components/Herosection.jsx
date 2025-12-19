import React from "react";
import { useTranslation } from "react-i18next";

const Herosection = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[110px] pt-[50px] pb-[50px] border-t-[1px] border-[#E0E0E0]">
      <div className="container mx-auto lg:flex gap-5 justify-between">
        <h2 className="flex-[0_0_30%] pr-[100px] text-[var(--dark-color)] text-[50px] font-bold leading-[50px] mb-[30px]">
          {" "}
          {t("about_veda")}
        </h2>
        <div className="flex-[70%]">
          <p className="flex-[60%] text-[var(--muted-color)] mb-[10px]">
            {t("about_veda_desc1")}
          </p>
          <p className="flex-[60%] text-[var(--muted-color)] mb-[10px]">
            {t("about_veda_desc2")}
          </p>
          <p className="flex-[60%] text-[var(--muted-color)] mb-[10px]">
            {t("about_veda_desc3")}
          </p>
          <p className="flex-[60%] text-[var(--muted-color)] mb-[10px]">
            {t("about_veda_desc4")}
          </p>
          <p className="flex-[60%] text-[var(--muted-color)] mb-[10px]">
            {t("about_veda_desc5")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
