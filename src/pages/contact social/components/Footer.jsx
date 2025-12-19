import React from "react";
import WhatsAppIcon from "../../../icons/WhatsAppIcon";
import { Instagram } from "lucide-react";

const Footer = () => {
  const whatsapp = "https://wa.me/+962770062747";
  const instagram =
    "https://www.instagram.com/lets.veda.jo?igsh=NG9kZTJmdHZ4Ynhw";
  return (
    <footer className="bg-[#1c3f3a] text-white py-12 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <p className="text-[#cdeff0] text-sm sm:text-base">
          © 2025 Veda · All Rights Reserved
        </p>

        <div className="flex gap-6">
          <a href={instagram} target="_blank">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 hover:text-[#04aeb5] transition" />
          </a>
          <a href={whatsapp} target="_blank">
            <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 hover:text-[#04aeb5] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
