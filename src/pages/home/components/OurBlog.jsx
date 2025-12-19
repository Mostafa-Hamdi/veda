import React, { useEffect, useState } from "react";
import BtnWithArrow from "./BtnWithArrow";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";

const OurBlog = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blog.letsveda.com/wp-json/wp/v2/posts?_embed&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="our-blog py-[50px] md:py-[90px] !rounded-0 md:rounded-[83px_83px_0px_0px]">
      <div className="container mx-auto">
        <h2 className="text-[30px] md:text-[44px] leading-[42px] md:leading-[52px] text-[var(--dark-color)] font-bold text-center capitalize mb-3 md:mb-6">
          {t("our")}{" "}
          <span className="text-[var(--primary-color)]">{t("blog")}</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[26px] text-[var(--muted-color)] text-center font-light max-w-[640px] mx-auto mb-[47px]">
          {t("our_blog_desc")}
        </p>

        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 items-start gap-6 mb-10">
          {loading ? (
            <p className="text-center col-span-3">Loading...</p>
          ) : (
            posts
              .filter((post) => post?.id)
              .map((post) => (
                <BlogCard
                  key={post.id}
                  img={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/300"
                  }
                  imgAlt={post.title?.rendered}
                  title={post.title?.rendered}
                  titleAR={post?.acf?.title_ar} // Assuming `title_ar` comes from ACF or custom fields
                  desc={post.acf?.description}
                  descAR={post?.acf?.description_ar} // Assuming `desc_ar` comes from ACF or custom fields
                  keywords={post?.acf?.tags}
                  keywordsAr={post?.acf?.tags_ar}
                  btnLink={post.id}
                  cardClasses="bg-[#CDEFF0]"
                />
              ))
          )}
        </div>

        <BtnWithArrow
          text={t("see_more")}
          classes="text-[19px] leading-[27px] p-[12.5px_40px] md:p-[17.5px_128px] mx-auto"
          link="/blog"
        />
      </div>
    </section>
  );
};

export default OurBlog;
