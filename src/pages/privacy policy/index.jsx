import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[110px] py-[50px]">
      <div className="container mx-auto">
        <h1 className="text-[var(--dark-color)] text-[30px] md:text-[50px] mb-2.5 font-bold text-center">
          {t("privacy_policy")}
        </h1>
        <h2 className="text-[25px] md:text-[30px] font-semibold mb-2">
          {t("veda_privacy_policy")}
        </h2>
        <p className="text-[var(--muted-color)] mb-5 ">
          {t("veda_privacy_policy_desc")}
        </p>
        <ul>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className="text-[18px] md:text-[23px] font-[500]">
              {t("policy_one_title")}
            </h3>
            <p className="text-[var(--dark-color)]">{t("policy_one_desc")}</p>
            <ul style={{ listStyleType: "disc" }} className="pl-10">
              <li className="text-[var(--muted-color)]">
                {t("policy_one_desc1")}
              </li>
              <li className="text-[var(--muted-color)]">
                {t("policy_one_desc2")}
              </li>
              <li className="text-[var(--muted-color)]">
                {t("policy_one_desc3")}
              </li>
            </ul>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("term_two_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("policy_two_desc")}</p>
            <ul style={{ listStyleType: "disc" }} className="pl-10">
              <li className="text-[var(--muted-color)]">
                {t("policy_two_desc1")}
              </li>
              <li className="text-[var(--muted-color)]">
                {t("policy_two_desc2")}
              </li>
              <li className="text-[var(--muted-color)]">
                {t("policy_two_desc3")}
              </li>
              <li className="text-[var(--muted-color)]">
                {t("policy_two_desc4")}
              </li>
            </ul>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("policy_three_title")}
            </h3>
            <p className="text-[var(--muted-color)]">
              {t("policy_three_desc")}
            </p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className="text-[18px] md:text-[23px] font-[500]">
              {t("policy_four_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("policy_four_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("policy_five_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("policy_five_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("policy_six_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("policy_six_desc")}</p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("policy_seven_title")}
            </h3>
            <p className="text-[var(--muted-color)]">
              {t("policy_seven_desc")}
            </p>
          </li>
          <li className="mb-5 pl-10 relative term-point">
            <h3 className=" text-[18px] md:text-[23px] font-[500]">
              {t("policy_eight_title")}
            </h3>
            <p className="text-[var(--muted-color)]">{t("terms_help")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
