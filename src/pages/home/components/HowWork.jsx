import React from "react";
import IconBox from "./IconBox";
import book from "../../../assets/book-icon.svg";
import transform from "../../../assets/apple-icon.svg";
import WorkBox from "./WorkBox";
import { useTranslation } from "react-i18next";
import meet from "../../../assets/meet.png";
const HowWork = () => {
  const { t } = useTranslation();
  return (
    <section className="how-work pt-[50px] md:pt-[67px] pb-[67px]">
      <div className="container mx-auto pt-[15px]  text-center">
        <h2 className="text-[28px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold mb-6">
          {t("how_works")}
        </h2>
        <div className="md:grid grid-cols-3 gap-[30px]">
          <WorkBox desc={t("book_desc")}>
            <IconBox title={t("book")}>
              <img src={book} alt={t("book")} />
            </IconBox>
          </WorkBox>
          <WorkBox desc={t("meet_desc")}>
            <IconBox title={t("meet")}>
              <img
                src={meet}
                alt="meet"
                style={{ width: "60px", height: "40px" }}
              />
            </IconBox>
          </WorkBox>
          <WorkBox desc={t("transform_desc")}>
            <IconBox title={t("transform")}>
              <img src={transform} alt="transform" />
            </IconBox>
          </WorkBox>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
