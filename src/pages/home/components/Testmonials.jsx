import star from "../../../assets/star.png";
import StarIcon from "../../../icons/StarIcon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import TestmonialCard from "./TestmonialCard";
import { useTranslation } from "react-i18next";
import { useGetTestmonialsQuery } from "../../../redux/Services/ApiSlice";
import { useEffect, useState } from "react";

const Testmonials = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useGetTestmonialsQuery();

  // State to track language change and force complete re-render
  const [swiperKey, setSwiperKey] = useState(Date.now());
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  // Update swiperKey when language changes with loading state
  useEffect(() => {
    setIsLanguageChanging(true);
    setSwiperKey(Date.now());

    // Small delay to ensure complete re-render
    const timer = setTimeout(() => {
      setIsLanguageChanging(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [i18n.language]); // Only triggers when language changes

  return (
    <section className="bg-[#FAEEEE] py-12 md:py-16 lg:py-[90px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="heading mb-8 md:mb-10 flex flex-col sm:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4">
          <h2 className="text-[var(--dark-color)] text-2xl md:text-3xl lg:text-[44px] leading-tight md:leading-[1.2] lg:leading-[52px] capitalize font-bold">
            {t("what_our")} <br />{" "}
            <span className="text-[var(--primary-color)]">
              {t("clients_say")}
            </span>
          </h2>
          <div className="trusted flex items-center gap-3 md:gap-2 flex-shrink-0">
            <img
              src={star}
              alt="trust icon"
              className="w-8 h-8 md:w-auto md:h-auto"
            />
            <div className="info">
              <div className="stars flex items-center gap-1 mb-1 md:mb-2">
                <StarIcon className="w-4 h-4 md:w-5 md:h-5" />
                <StarIcon className="w-4 h-4 md:w-5 md:h-5" />
                <StarIcon className="w-4 h-4 md:w-5 md:h-5" />
                <StarIcon className="w-4 h-4 md:w-5 md:h-5" />
                <StarIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-[var(--dark-color)]">
                {t("trusted_by")}{" "}
                <span className="text-[var(--primary-color)] font-semibold">
                  300+
                </span>{" "}
                {t("customers")}
              </p>
            </div>
          </div>
        </div>

        <div className="px-10 md:px-6 lg:px-0">
          {/* Show loading or placeholder during language change */}
          {isLanguageChanging ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary-color)]"></div>
            </div>
          ) : (
            <Swiper
              key={swiperKey} // This triggers a full re-render when language changes
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper !pb-12 md:!pb-16"
            >
              {data?.map((testmonial) => (
                <SwiperSlide key={testmonial?.id}>
                  <TestmonialCard
                    author={testmonial?.acf?.author}
                    review={testmonial?.acf?.testmonial}
                    reviewAr={testmonial?.acf?.Testmonial_ar}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
