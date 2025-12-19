import { useEffect, useState } from "react";
import logoWhite from "../assets/logo-white.png";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import YouTubeIcon from "../icons/YoutubeIcon";
import Swal from "sweetalert2";
import { Loader } from "lucide-react";

const Footer = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneErr, setIsPhoneErr] = useState(false);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const items = document.querySelectorAll(".footer-pages");

    items.forEach((item) => {
      const clickHandler = () => {
        setTimeout(() => {
          if (item.id === "features") {
            document.querySelector("#features")?.scrollIntoView({
              behavior: "smooth",
            });
          } else {
            document.querySelector("header")?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 200);
      };

      item.addEventListener("click", clickHandler);

      // Cleanup on unmount
      return () => {
        item.removeEventListener("click", clickHandler);
      };
    });
  }, []);

  return (
    <footer className="bg-[#1C3F3A] rounded-t-[40px] md:rounded-t-[60px] lg:rounded-[83px_83px_0px_0px] pt-8 md:pt-12 lg:pt-[51px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-[45px]">
          {/* Newsletter Section - Takes full width on mobile, larger portion on desktop */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="max-w-md lg:max-w-lg">
              <h2 className="text-2xl md:text-3xl lg:text-[28px] leading-tight font-bold text-white mb-6 lg:mb-8">
                {t("join_newsletter")} <br />
                <span className="text-[var(--primary-80)] block mt-1">
                  {t("stay_up_to_date")}
                </span>
              </h2>

              <form
                className="space-y-4 flex items-center gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (phone && phone.length > 4) {
                    try {
                      setIsPhoneLoading(true);
                      await fetch(
                        "https://script.google.com/macros/s/AKfycbxz1h89ko8NtMD_pSG21BjVW_3H9xB4uBdCGkH_6TM_3BZMjGiaRN7iwDGX2r8S9gzdpA/exec",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body: new URLSearchParams({ phone }).toString(),
                        },
                      );

                      Swal.fire({
                        icon: "success",
                        title:
                          i18n.language === "ar"
                            ? "تم الاشتراك!"
                            : "Subscribed!",
                        text:
                          i18n.language === "ar"
                            ? "تم إرسال رقم هاتفك بنجاح."
                            : "Your phone number has been submitted successfully.",
                        confirmButtonText:
                          i18n.language === "ar" ? "موافق" : "OK",

                        confirmButtonColor: "#1C3F3A",
                      });

                      setPhone(""); // clear input
                      setIsPhoneErr(false); // reset error
                    } catch (err) {
                      Swal.fire({
                        icon: "error",
                        title:
                          i18n.language === "ar"
                            ? "فشل الإرسال"
                            : "Submission Failed",
                        text:
                          i18n.language === "ar"
                            ? "حدث خطأ ما. يرجى المحاولة مرة أخرى."
                            : "Something went wrong. Please try again.",
                        confirmButtonText:
                          i18n.language === "ar" ? "موافق" : "OK",

                        confirmButtonColor: "#E53E3E",
                      });

                      console.error(err);
                    }
                    setIsPhoneLoading(false);
                  } else {
                    setIsPhoneErr(true); // Show error if phone is empty
                  }
                }}
              >
                <div className="relative">
                  <PhoneInput
                    country={"ae"}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      if (value) setIsPhoneErr(false);
                    }}
                    placeholder={t("phone_placeholder")}
                    inputClass="!w-full flex-1 !border-white !text-white !placeholder-white/60 !h-12 !text-base"
                  />

                  {isPhoneErr && (
                    <p className="text-red-500 mt-4">
                      {i18n?.language === "ar"
                        ? "الرجاء إدخال رقم هاتف صالح"
                        : "Please enter a valid phone number"}
                    </p>
                  )}
                  {isPhoneLoading && (
                    <Loader className="animate-spin w-8 h-8 mt-3 text-white" />
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full self-start sm:w-auto bg-white text-[var(--dark-color)] px-8 py-3 rounded-2xl text-base font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 xl:col-span-5">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-[var(--primary-80)] text-lg font-bold mb-6 capitalize">
                  {t("quick_links")}
                </h3>
                <nav>
                  <ul className="space-y-4">
                    {[
                      { name: "about_us", link: "/about" },
                      { name: "services", link: "/about" },
                      { name: "features", link: "/" },
                      { name: "pricing", link: "/pricing" },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item?.link}
                          id={item?.name}
                          className="footer-pages text-white/80 hover:text-white text-sm md:text-base transition-colors duration-200 block py-1"
                        >
                          {t(item.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-[var(--primary-80)] text-lg font-bold mb-6 capitalize">
                  {t("support")}
                </h3>
                <nav>
                  <ul className="space-y-4">
                    {["report_issue"].map((item) => (
                      <li key={item}>
                        <a
                          href="mailto:info@letsveda.com"
                          className="text-white/80 hover:text-white text-sm md:text-base transition-colors duration-200 block py-1"
                        >
                          info@letsveda.com
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex lg:flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
              <a
                href="https://www.instagram.com/lets.veda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="group bg-[#2D514C] hover:bg-[var(--primary-80)] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/share/15rTCnfHyA/"
                className="group bg-[#2D514C] hover:bg-[var(--primary-80)] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://youtube.com/@letsveda?si=Vo3tqkQV9jc1lEg8"
                className="group bg-[#2D514C] hover:bg-[var(--primary-80)] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <YouTubeIcon className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Message and Logo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-6 lg:py-8 border-b border-white/20 mb-6 lg:mb-8 gap-6">
          <div className="flex-1 lg:max-w-2xl">
            <p className="text-[var(--primary-80)] text-base md:text-lg leading-relaxed text-center lg:text-left">
              {t("footer_msg")}
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={i18n.language === "en" ? logoWhite : logoWhite}
              alt="Veda logo"
              className="h-8 md:h-10 lg:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <NavLink
              to="/terms-and-conditions"
              className="text-white/80 hover:text-white text-sm underline underline-offset-4 hover:underline-offset-2 transition-all duration-200"
            >
              {t("terms_of_service")}
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className="text-white/80 hover:text-white text-sm underline underline-offset-4 hover:underline-offset-2 transition-all duration-200"
            >
              {t("privacy_policy")}
            </NavLink>
          </div>
          <p className="text-[var(--primary-80)] text-xs md:text-sm opacity-75">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
