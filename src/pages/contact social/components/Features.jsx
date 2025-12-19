import {
  ArrowRight,
  CalendarClock,
  ClipboardCheck,
  HeartPulse,
  Layers,
  UserCheck,
} from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="pb-20 pt-6 px-4 sm:px-8">
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: UserCheck,
            title: "Certified Dietitians",
            desc: "Work with licensed specialists focused on results.",
          },
          {
            icon: HeartPulse,
            title: "Personalized Plans",
            desc: "Tailored nutrition based on your goals & lifestyle.",
          },
          {
            icon: CalendarClock,
            title: "Flexible Appointments",
            desc: "Book online sessions at any time—your schedule.",
          },
          {
            icon: ClipboardCheck,
            title: "Health Assessments",
            desc: "Detailed evaluations to guide your progress.",
          },
          {
            icon: Layers,
            title: "Easy Booking",
            desc: "Start instantly with a smooth, simple process.",
          },
          {
            icon: ArrowRight,
            title: "Ongoing Support",
            desc: "Stay on track with continuous guidance.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 sm:p-8 bg-white/70 backdrop-blur-xl rounded-3xl border shadow-xl hover:shadow-2xl transition text-center sm:text-left"
          >
            <item.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#04aeb5] mb-4 sm:mb-6 mx-auto sm:mx-0" />
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
              {item.title}
            </h3>
            <p className="text-[#546078] text-sm sm:text-base md:text-base lg:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
