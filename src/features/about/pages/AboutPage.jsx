import React from "react";
import { aboutData } from "../data/aboutData";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import AboutCtaSection from "../components/AboutCtaSection";

const AboutPage = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <ServicesSection data={aboutData.maritimeService} reverse={false} />

      <ServicesSection data={aboutData.digitalSolution} reverse={true} />

      <TeamSection />

      <AboutCtaSection />
    </main>
  );
};

export default AboutPage;
