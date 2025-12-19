import React, { useEffect, useState } from "react";
import StartJourneyMsg from "./StartJourneyMsg";
import { useTranslation } from "react-i18next";

const BlogContent = ({ desc, descAR }) => {
  const { t, i18n } = useTranslation();
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (i18n.language.startsWith("en")) {
      setDescription(desc);
    } else {
      setDescription(descAR);
    }
  }, [i18n]);
  return (
    <section className="blog-content pt-[50px]">
      <div className="container mx-auto">
        <div
          className="blog-post-content mb-[70px] text-[17px] leading-[26px] text-[var(--dark-color)] font-light"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        <StartJourneyMsg />
        <div className="mb-[70px]">
          <h4 className="text-[27px] leading-[auto] text-[var(--dark-color)] mb-6 font-bold">
            {t("conclusion")}
          </h4>
          <p className="text-[17px] leading-[26px] text-[var(--dark-color)] font-light">
            {t("conclusion_desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
