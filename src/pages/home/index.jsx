import React from "react";
import HeroSection from "./components/HeroSection";
import WhyUs from "./components/WhyUs";
import Features from "./components/Features";
import HowWork from "./components/HowWork";
import OurBlog from "./components/OurBlog";
import Packages from "./components/Packages";
import Faq from "./components/Faq";
import Testmonials from "./components/Testmonials";
import VideoSection from "./components/VideoSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <VideoSection />
      <Features />
      <HowWork />
      <OurBlog />
      <Testmonials />
      <Packages />
      <Faq />
    </div>
  );
};

export default Home;
