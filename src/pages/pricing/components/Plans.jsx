import React from "react";
import TrueElement from "./TrueElement";
import DashElement from "./DashElement";
import PossibleElement from "./PossibleElement";
import { useTranslation } from "react-i18next";

const Plans = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-[51px] pb-[81px]" id="plansFeatures">
      <div className="container mx-auto">
        <h2 className="text-[28px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold mb-[32px]">
          {t("veda_vs_others")}
        </h2>
        <div className="table-responsive  overflow-auto">
          <table className="table table-striped table-hover text-center w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-b-[#E0E0E0]">
                <th scope="col" className="p-[18px]"></th>
                <th scope="col" className="p-[18px]">
                  {t("veda")}
                </th>
                <th scope="col" className="p-[18px]">
                  {t("traditional_clinics")}
                </th>
                <th scope="col" className="p-[18px]">
                  {t("other_online_services")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("no_commute")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("free_consultation")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("whatsapp_support")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("blood_work")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">
                  {t("flexible_scheduling_compare")}
                </td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("multiple_packages")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <DashElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("secure_payments")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
              </tr>
              <tr className="border-b border-b-[#E0E0E0]">
                <td className="p-[18px] text-left">{t("licensed_team")}</td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <TrueElement />
                </td>
                <td className="p-[18px]">
                  <PossibleElement />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Plans;
