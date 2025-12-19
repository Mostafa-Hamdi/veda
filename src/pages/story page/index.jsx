import React, { useMemo } from "react";
import HeroSection from "./components/HeroSection";
import { useGetStoryDataQuery } from "../../redux/Services/ApiSlice";
import { useParams } from "react-router-dom";
import StoryContent from "./components/StoryContent";
import { Loader } from "lucide-react";

const StoryPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetStoryDataQuery(id);

  // Calculate derived values using useMemo
  const { date, featuredImage } = useMemo(() => {
    if (!data) {
      return { date: "", featuredImage: "" };
    }

    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const image = data?.acf?.main_image?.url || "";

    return {
      date: formattedDate,
      featuredImage: image,
    };
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className="col-span-full flex justify-center items-center py-20">
          <Loader className="animate-spin w-8 h-8" />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <p className="text-gray-600 mb-4">
            Unable to load the story at the moment.
          </p>
        </div>
      ) : !data ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600 text-lg">Story not found.</p>
        </div>
      ) : (
        <>
          <HeroSection
            title={data?.acf?.title}
            titleAR={data?.acf?.title_ar}
            category={data?.acf?.category}
            date={date}
            featuredImage={featuredImage}
          />
          <StoryContent
            desc={data?.acf?.description}
            descAR={data?.acf?.description_ar}
          />
        </>
      )}
    </>
  );
};

export default StoryPage;
