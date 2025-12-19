import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogCard = ({
  img,
  imgAlt,
  title,
  titleAR,
  desc,
  descAR,
  keywords,
  keywordsAr,
  cardClasses,
  btnLink,
}) => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState({
    heading: "",
    description: "",
    keywords: keywords,
  });
  // const [description, setDescription] = useState("");
  useEffect(() => {
    if (i18n.language.startsWith("en")) {
      setData({
        heading: title,
        description: desc,
        keywords: keywords,
      });
    } else {
      setData({
        heading: titleAR,
        description: descAR,
        keywords: keywordsAr,
      });
    }
  }, [i18n.language, title, titleAR, desc, descAR]);

  return (
    <div
      className={`card ${cardClasses} rounded-[32px] p-[14px] self-stretch flex flex-col mb-5 md:mb-0`}
    >
      <div className="card-img relative">
        <img
          src={img}
          alt={imgAlt}
          className="rounded-[18px] object-cover w-full h-[200px]"
        />
        <div className="keywords absolute bottom-5 left-5 flex gap-2 items-center flex-wrap">
          {data?.keywords?.map((keyword, index) => (
            <span
              key={index}
              className="uppercase bg-[#1C3F3A] text-white text-[12px] leading-[16px] font-[500] py-[10px] px-[20px] rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="card-content px-[14px] mt-[30px] flex flex-col flex-1">
        <h3 className="text-[20px] leading-[24px] text-[var(--dark-color)] font-[500] capitalize mb-3">
          {data?.heading}
        </h3>
        <p
          className="flex-1 text-[16px] leading-[22px] text-[var(--muted-color)] mb-6 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        />
        <Link
          to={`/blog/${btnLink}`}
          className="block text-[var(--primary-color)] text-[16px] leading-[27px] py-[10.5px] px-[30px] w-fit rounded-[14px] capitalize border border-[var(--primary-color)] font-[500] mb-[14px]"
        >
          {t("read_more")}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
