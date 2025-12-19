import React from "react";
import faq from "../../../assets/faq.png";
import { useTranslation } from "react-i18next";
import { useGetFaqsQuery } from "../../../redux/Services/ApiSlice";
import AccordionItem from "./AccordionItem";
const Faq = () => {
  const { data, error, isLoading } = useGetFaqsQuery();
  const toggleAccordion = (event) => {
    const itemToggle = event.currentTarget.getAttribute("aria-expanded");

    const items = document.querySelectorAll(".accordion-item button");

    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (itemToggle === "false") {
      event.currentTarget.setAttribute("aria-expanded", "true");
    }
  };
  const { t } = useTranslation();
  //

  return (
    <section className="faq py-[50px] md:pb-0 md:pt-[90px] bg-[#F2F4E8]">
      <div className="container mx-auto md:flex items-center">
        <div className="heading flex-[0_0_40%] pl-10 md:pl-0">
          <span className="relative uppercase text-[20px] leading-[26px] text-[var(--primary-color)] pl-[23px] mb-2.5">
            {t("faq")}
          </span>
          <h2 className="text-[42px] leading-[46px] text-[var(--dark-color)] font-bold mb-[30px] md:mb-[50px]">
            {t("got_questions")} <br />{" "}
            <span className="text-[var(--primary-color)]">
              {t("got_answers")}
            </span>
          </h2>
          <img src={faq} alt="faq" />
        </div>
        <div className="questions">
          <div className="accordion">
            {data?.map((faq, index) => (
              <AccordionItem
                key={index}
                toggleAccordion={toggleAccordion}
                quesEn={faq?.acf?.ques}
                quesAr={faq?.acf?.question_arabic}
                resEn={faq?.acf?.response}
                resAr={faq?.acf?.response_arabic}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
