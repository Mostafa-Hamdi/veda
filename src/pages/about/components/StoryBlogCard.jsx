import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const StoryBlogCard = ({ title, desc, titleAR, descAR, date, img, link }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n?.language?.startsWith("en")) {
      setHeading(title);
      setDescription(desc);
    } else {
      setHeading(titleAR);
      setDescription(descAR);
    }
  });
  return (
    <div className="card">
      <p className="text-[var(--primary-color)] mb-3 flex gap-2 items-center ">
        <Calendar />
        <span>{date}</span>
      </p>
      <h3 className="text-[23px] lg:text-[27px] leading-[30px] lg:leading-[auto] text-[var(--dark-color)] font-bold mb-6">
        <NavLink to={`/story/${link}`}> {heading}</NavLink>
      </h3>
      <NavLink to={`/story/${link}`}>
        <img src={`${img}`} alt="" className="w-full rounded-[18px] mb-6" />
      </NavLink>
      <p
        className="story-blog-paragraph relative pl-[30px] pr-[35px] text-[14px] leading-[22px] md:text-[16px] md:leading-[26px] text-[var(--muted-color)]"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};

export default StoryBlogCard;
