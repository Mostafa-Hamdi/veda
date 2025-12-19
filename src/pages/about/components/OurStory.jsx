import React from "react";
import StoryBlogCard from "./StoryBlogCard";
import StartJourneyMsg from "../../blog page/components/StartJourneyMsg";
import { useTranslation } from "react-i18next";
import { useGetStoriesQuery } from "../../../redux/Services/ApiSlice";
import { Loader } from "lucide-react";

const OurStory = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetStoriesQuery();

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[var(--dark-color)] text-[44px] leading-[52px] font-bold mb-[32px]">
          {t("our_story")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <Loader className="animate-spin w-8 h-8" />
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-600">
                {t("error_loading_stories") ||
                  "Unable to load stories at the moment."}
              </p>
            </div>
          ) : !data || data.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-600">
                {t("no_stories_available") ||
                  "No stories available at the moment."}
              </p>
            </div>
          ) : (
            data.map((story) => (
              <StoryBlogCard
                key={story?.id}
                link={story?.id}
                title={story?.acf?.title}
                titleAR={story?.acf?.title_ar}
                desc={story?.acf?.description}
                descAR={story?.acf?.description_ar}
                date={new Date(story.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                img={story?.acf?.main_image?.url}
              />
            ))
          )}
        </div>
        <StartJourneyMsg />
      </div>
    </section>
  );
};

export default OurStory;
