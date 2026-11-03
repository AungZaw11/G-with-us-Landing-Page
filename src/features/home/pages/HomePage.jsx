import React from "react";
import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import LatestProduct from "../components/LatestProduct";
import FeaturesSection from "../components/FeaturesSection";
import CtaSection from "../components/CtaSection";

const HomePage = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HeroSection />
      <AboutPreview />
      <LatestProduct />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
