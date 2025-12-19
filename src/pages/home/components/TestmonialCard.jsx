import { useEffect, useState } from "react";
import person1 from "../../../assets/person1.png";
import Quote from "../../../icons/Quote";
import { useTranslation } from "react-i18next";
const TestmonialCard = ({ author, review, reviewAr }) => {
  const { i18n } = useTranslation();
  const [testmonial, setTestmonial] = useState(review);

  useEffect(() => {
    if (i18n?.language?.startsWith("en")) {
      setTestmonial(review);
    } else {
      setTestmonial(reviewAr);
    }
  }, [i18n?.language]);
  return (
    <div className="card rounded-[32px] p-[50px_30px] bg-white ">
      <p className="text-[18px] leading-[27px] text-[#1A3A67]">{testmonial}</p>
      <div className="flex items-end justify-between">
        <span className="name text-[17px] leading-[25px] text-[var(--primary-color)] capitalize">
          {author}
        </span>
        <div className="images flex items-end">
          <div className="quote bg-[#F36945] rounded-[16px_0px_16px_0px] w-[44px] h-[58px] flex items-center justify-center">
            <Quote />
          </div>
          {/* <img src={person1} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard;
