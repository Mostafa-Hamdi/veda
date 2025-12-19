import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Herosection from "./components/Herosection";
import BlogContent from "./components/BlogContent";
import { useGetBlogDataQuery } from "../../redux/Services/ApiSlice";
import { useTranslation } from "react-i18next";
import { Loader } from "lucide-react";

const BlogPage = () => {
  const { i18n } = useTranslation();
  const { id } = useParams();

  const { data, error, isLoading } = useGetBlogDataQuery(id);

  const [readTime, setReadTime] = useState("");

  // Calculate derived values using useMemo
  const { date, wordCount, featuredImage } = useMemo(() => {
    if (!data) {
      return { date: "", wordCount: 0, featuredImage: "" };
    }

    const formattedDate = new Date(data.date).toLocaleDateString(
      i18n.language,
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );

    const textOnly = data.content.rendered.replace(/<[^>]+>/g, " ");
    const calculatedWordCount = textOnly.trim().split(/\s+/).length;
    const image = data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

    return {
      date: formattedDate,
      wordCount: calculatedWordCount,
      featuredImage: image,
    };
  }, [data, i18n.language]);

  // Update readTime when data or language changes
  useEffect(() => {
    if (!isLoading && data) {
      const minutes = Math.ceil(wordCount / 200);
      if (i18n.language.startsWith("en")) {
        setReadTime(`${minutes} min read`);
      } else {
        setReadTime(`${minutes} دقيقة قراءة`);
      }
    }
  }, [i18n.language, wordCount, data, isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="col-span-full flex justify-center items-center py-20">
          <Loader className="animate-spin w-8 h-8" />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <p className="text-gray-600 mb-4">
            Unable to load the blog post at the moment.
          </p>
        </div>
      ) : !data ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600 text-lg">Post not found.</p>
        </div>
      ) : (
        <>
          <Herosection
            title={data?.acf?.title}
            titleAR={data?.acf?.title_ar}
            date={date}
            readTime={readTime}
            featuredImage={featuredImage}
          />
          <BlogContent
            desc={data?.acf?.description}
            descAR={data?.acf?.description_ar}
          />
        </>
      )}
    </>
  );
};

export default BlogPage;
