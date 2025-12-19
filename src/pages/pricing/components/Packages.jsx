import React, { useRef, useState } from "react";
import PackageCard from "../../home/components/PackageCard";
import { useTranslation } from "react-i18next";
import ArrowBottom from "../../../icons/ArrowBottom";

const Packages = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const handleBtnClick = () => {
    const targetElement = document.getElementById("plansFeatures");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="packages pb-[50px] bg-[#F0F4F5] rounded-[83px_83px_0px_0px] overflow-hidden">
      <div className="features-header">
        <div className="container mx-auto pb-[120px] pt-[50px]">
          <span className="text-[var(--primary-color)] text-[23px] mb-3 block">
            {" "}
            {t("our_packages")}
          </span>
          <h2 className="text-[28px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold  capitalize mb-4 md:mb-[30px]">
            {" "}
            {t("our_packages_msg")}
          </h2>
        </div>
      </div>
      <div className="container mx-auto pt-[50px] mt-[-170px]">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-2 xl:gap-[60px] gap-6 py-2.5 md:mb-10">
          <PackageCard
            packageKey="starter" // Updated prop to use internal key
            title={t("starter")}
            points={[
              {
                status: true,
                text: `${t("up_to")} 4 ${t("coaching_session")}`,
              },
              { status: true, text: `${t("duration")} 30 ${t("days")}` },
              { status: true, text: t("chat_consultations") },
              { status: false, text: t("no_complimentary_items") },
            ]}
            negetivePoints={[t("3d_scan")]}
            isChecked={isChecked}
            cardClasses={"bg-[var(--sesco-40)]"}
            btnClasses={"border border-[var(--dark-color)]"}
            iconColor={"var(--dark-color)"}
          >
            <div className="flex items-center mb-4 checkbox-wrapper-46">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mr-2 inp-cbx"
                id="cbx-46"
              />
              <label htmlFor="cbx-46" className="cbx">
                <span>
                  <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span
                  className={`text-[var(--dark-color)] text-[20px] ${i18n?.language?.startsWith("ar") ? "mr-2" : null}`}
                >
                  {t("add_blood_test")}
                </span>
              </label>
            </div>
          </PackageCard>

          <PackageCard
            packageKey="premium" // Updated prop to use internal key
            title={t("premium")}
            points={[
              {
                status: true,
                text: `${t("up_to")} 12 ${t("coaching_session")}`,
              },
              { status: true, text: `${t("duration")} 90 ${t("days")}` },
              { status: true, text: t("chat_consultations") },
              { status: true, text: t("complimentary_items") },
              { status: true, text: t("include_blood_test") },
            ]}
            negetivePoints={[t("3d_scan")]}
            cardClasses={"bg-[var(--primary-color)] text-white"}
            btnClasses={
              "border border-[var(--dark-color)] bg-white text-[var(--dark-color)]"
            }
            iconColor={"white"}
          />
        </div>
        <button
          onClick={handleBtnClick}
          className="btn text-[var(--dark-color)] text-lg font-bold  flex items-center justify-center gap-[14px] w-auto rounded-[14px] capitalize mx-auto"
        >
          {t("see_features")}
          <ArrowBottom />
        </button>
      </div>
    </section>
  );
};

export default Packages;
