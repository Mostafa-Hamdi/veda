import { Instagram } from "lucide-react";
import WhatsAppIcon from "../../../icons/WhatsAppIcon";
import startHealth from "../../../assets/start-health.jpg";

const Contact = () => {
  const whatsapp = "https://wa.me/+962770062747";
  const instagram =
    "https://www.instagram.com/lets.veda.jo?igsh=NG9kZTJmdHZ4Ynhw";
  return (
    <section className="py-16 px-4 sm:px-8 bg-[#1c3f3a] text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Start Your Health
            <span className="block text-[#04aeb5] mt-2">
              Transformation Today
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-base lg:text-lg text-[#cdeff0] max-w-md mx-auto lg:mx-0">
            Message a Veda nutritionist instantly through WhatsApp or explore
            helpful content on Instagram.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <a
              href={whatsapp}
              target="_blank"
              className="flex items-center justify-center bg-[#04aeb5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto shadow-xl hover:scale-105 transition"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>

            <a
              href={instagram}
              target="_blank"
              className="flex items-center justify-center bg-white text-[#1c3f3a] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto hover:bg-[#cdeff0] transition"
            >
              <Instagram className="mr-2 sm:mr-3" />
              Visit Instagram
            </a>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-[#04aeb5] opacity-20 blur-[80px] rounded-full"></div>
          <img
            src={startHealth}
            className="relative rounded-3xl shadow-2xl border-4 border-white/20 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
            alt="Health Start"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
