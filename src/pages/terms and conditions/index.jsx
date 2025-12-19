import React from "react";
import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[110px] py-[50px]">
      <div className="container mx-auto">
        <h1 className="text-[var(--dark-color)] text-[30px] md:text-[50px] mb-2.5 font-bold text-center">
          {t("terms_and_conditions")}
        </h1>
        <h2 className="text-[25px] md:text-[30px] font-semibold mb-2">
          {t("welcome_to_veda")}
        </h2>
        <p className="text-[var(--muted-color)] mb-5 ">
          {t("welcome_to_veda_desc")}
        </p>
        <ul>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className="text-[18px] md:text-[23px] font-[500]">
              {t("term_one_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_one_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_two_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_two_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_three_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_three_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className="text-[18px] md:text-[23px] font-[500]">
              {t("term_four_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_four_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_five_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_five_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_six_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_six_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_seven_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_seven_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_eight_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("term_eight_desc")}</p>
          </li>
        </ul>
        <p className="text-lg text-[var(--dark-color)] font-semibold">
          {t("terms_help")}
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
