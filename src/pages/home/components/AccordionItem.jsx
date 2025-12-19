import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ toggleAccordion, quesEn, quesAr, resEn, resAr }) => {
  const { i18n } = useTranslation();
  const [question, setQuestion] = useState(quesEn);
  const [response, setResponse] = useState(resEn);
  useEffect(() => {
    if (i18n.language.startsWith("en")) {
      setQuestion(quesEn);
      setResponse(resEn);
    } else {
      setQuestion(quesAr);
      setResponse(resAr);
    }
  }, [i18n.language]);
  return (
    <div className="accordion-item">
      <button
        id="accordion-button-1"
        aria-expanded="false"
        onClick={toggleAccordion}
      >
        <span className="accordion-title">{question}</span>
        <span className="icon" aria-hidden="true"></span>
      </button>
      <div className="accordion-content">
        <p
          dangerouslySetInnerHTML={{
            __html: response,
          }}
        />
      </div>
    </div>
  );
};

export default AccordionItem;
