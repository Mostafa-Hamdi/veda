import React, { useEffect, useState } from "react";
import CheckIcon from "../../../icons/CheckIcon";
import { useTranslation } from "react-i18next";
import XIcon from "../../../icons/XIcon";

const PackageCard = ({
  packageKey, // New prop to handle internal key (starter, premium)
  title,
  points,
  negetivePoints,
  btnClasses,
  cardClasses,
  children,
  iconColor,
  BtnNotFound,
  isChecked,
}) => {
  const { t, i18n } = useTranslation();
  const [price, setPrice] = useState("0.00");
  const [packageUrl, setPackageUrl] = useState("");

  useEffect(() => {
    if (packageKey === "starter") {
      setPrice(isChecked ? "480" : "300");
      if (isChecked) {
        setPackageUrl(
          i18n?.language === "ar"
            ? "https://selecttime.appointy.com/veda/products/package/mem_01K88C1WNE5F2Q5PW1A9B4SW9A"
            : "https://selecttime.appointy.com/veda/products/package/mem_01K88C1WNE5F2Q5PW1A9B4SW9A",
        );
      } else {
        setPackageUrl(
          i18n?.language === "ar"
            ? "https://selecttime.appointy.com/veda/products/package/mem_01K88BZ94PK7MZH7BZMXQHC8VT"
            : "https://selecttime.appointy.com/veda/products/package/mem_01K88BZ94PK7MZH7BZMXQHC8VT",
        );
      }
    } else if (packageKey === "premium") {
      setPrice("800");
      if (i18n?.language === "ar") {
        setPackageUrl(
          "https://selecttime.appointy.com/veda/products/package/mem_01K889ZNTMTEETWXXSKS46ZG6W",
        );
      } else {
        setPackageUrl(
          "https://selecttime.appointy.com/veda/products/package/mem_01K889ZNTMTEETWXXSKS46ZG6W",
        );
      }
    }
  }, [packageKey, isChecked, i18n?.language]);

  return (
    <div
      className={`package-card relative p-[30px] rounded-[32px] mb-[35px] md:mb-0 ${cardClasses}`}
    >
      <h3
        className={`text-center text-[${iconColor}] text-[27px] mb-2 capitalize`}
      >
        {title}
      </h3>
      <h4
        className={`text-center text-[${iconColor}] text-[57px] leading-[auto] mb-4`}
      >
        {price} <span className="text-[24px] font-bold">{t("aed")}</span>
      </h4>
      <ul className="mb-0">
        {points?.map((point, index) => (
          <li key={index} className="flex items-center gap-3 mb-5">
            {point?.status ? (
              <CheckIcon iconColor={iconColor} />
            ) : (
              <XIcon iconColor={iconColor} />
            )}
            {point?.text}
          </li>
        ))}
      </ul>
      {children}

      {!BtnNotFound && (
        <a
          href={packageUrl}
          className={`btn block text-center z-10 relative ${btnClasses} rounded-[14px] text-[${iconColor}] border-[${iconColor}] py-[10.5px] w-full`}
        >
          {t("buy_now")}
        </a>
      )}
    </div>
  );
};

export default PackageCard;
