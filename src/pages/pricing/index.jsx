import React from "react";
import Faq from "../home/components/Faq";
import HeroSection from "./components/HeroSection";
import Packages from "./components/Packages";
import Plans from "./components/Plans";

const Pricing = () => {
  return (
    <>
      <HeroSection />
      <Packages />
      <Plans />
      <Faq />
    </>
  );
};

export default Pricing;
