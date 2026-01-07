import { Instagram } from "lucide-react";
import docImg from "../../../assets/doc-img.jpg";
import WhatsAppIcon from "../../../icons/WhatsAppIcon";

const Herosection = () => {
  const whatsapp = "https://wa.me/+962770062747";
  const instagram =
    "https://www.instagram.com/lets.veda.jo?igsh=NG9kZTJmdHZ4Ynhw";
  return (
    <section class="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-8 py-12 pt-20 sm:pt-24">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1c3f3a] via-[#04aeb5] to-transparent opacity-20"></div>
      <div class="container mx-auto grid lg:grid-cols-2 gap-6 lg:gap-6 z-10 w-full">
        <div class="flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight pt-3 md:pt-0">
            Personalized Online
            <span class="block bg-gradient-to-r from-[#04aeb5] to-[#1c3f3a] text-transparent bg-clip-text">
              Nutrition &amp; Wellness
            </span>
          </h1>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#546078] max-w-lg mx-auto lg:mx-0">
            Receive tailored guidance from certified dietitians—flexible,
            online, and designed entirely around your lifestyle.
          </p>
          <div class="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start">
            {/* <a
              href={whatsapp}
              target="_blank"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-[#04aeb5] text-white shadow-xl hover:scale-105 transition w-full sm:w-auto"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a> */}
            <a
              href={instagram}
              target="_blank"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-[#1c3f3a] text-white hover:bg-[#04aeb5] transition w-full sm:w-auto"
            >
              <Instagram className="mr-2 sm:mr-3" />
              Instagram
            </a>
          </div>
        </div>
        <div class="relative flex items-center justify-center mt-4 lg:mt-0">
          <div class="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#04aeb5] opacity-20 blur-[80px] rounded-full"></div>
          <img
            class="relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-4 border-white/40 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
            alt="Nutritionist"
            src={docImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
