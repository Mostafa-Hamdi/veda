import React, { useState } from "react";
import BlogCard from "../../home/components/BlogCard";
import { useTranslation } from "react-i18next";
import BtnWithArrow from "../../home/components/BtnWithArrow";
import { Loader } from "lucide-react";
import { useGetBlogsQuery } from "../../../redux/Services/ApiSlice";

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);
  const { data, error, isLoading } = useGetBlogsQuery();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="pb-[50px]">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <Loader className="animate-spin w-8 h-8" />
          </div>
        ) : error ? (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-600">
              {t("error_loading_blogs") ||
                "Unable to load blogs at the moment."}
            </p>
          </div>
        ) : !data || data.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-600">
              {t("no_blogs_available") || "No blogs available at the moment."}
            </p>
          </div>
        ) : (
          data
            .slice(0, visibleCount)
            .map((blog, index) => (
              <BlogCard
                key={blog?.id || index}
                img={blog?.acf?.image}
                imgAlt={
                  blog._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || ""
                }
                title={blog?.acf?.title}
                titleAR={blog?.acf?.title_ar}
                desc={blog?.acf?.description}
                descAR={blog?.acf?.description_ar}
                keywords={blog?.acf?.tags}
                keywordsAr={blog?.acf?.tags_ar}
                cardClasses="bg-[#CDEFF0]"
                btnLink={blog.id}
              />
            ))
        )}
      </div>
      {data && visibleCount < data.length && (
        <BtnWithArrow
          text={t("load_more")}
          onClick={handleLoadMore}
          classes={"mx-auto p-[17.5px_122px] rounded-[14px]"}
        />
      )}
    </section>
  );
};

export default Blogs;
