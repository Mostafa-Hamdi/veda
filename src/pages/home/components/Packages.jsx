import React, { useState } from "react";
import BtnWithArrow from "./BtnWithArrow";
import PackageCard from "./PackageCard";
import { useTranslation } from "react-i18next";
import Plans from "../../pricing/components/Plans";

const Packages = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <section>
        <div
          id="packages"
          className="container mx-auto py-[50px] md:pt-[85px] md:pb-[90px]"
        >
          <h2 className="text-[28px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold text-center capitalize mb-4 md:mb-[30px]">
            {t("our")}{" "}
            <span className="text-[var(--primary-color)]">{t("packages")}</span>
          </h2>
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
          <BtnWithArrow
            link={
              i18n?.language === "ar"
                ? "https://selecttime.appointy.com/veda/packages"
                : "https://selecttime.appointy.com/veda/packages"
            }
            text={t("see_more")}
            classes={
              "text-[19px] leading-[27px] p-[12.5px_40px_12.5px_40px] md:p-[17.5px_128px_17.5px_128px] mx-auto"
            }
          />
        </div>
      </section>
      <Plans />
    </>
  );
};

export default Packages;
