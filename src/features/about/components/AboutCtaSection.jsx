import React from "react";
import { aboutData } from "../data/aboutData";

const AboutCtaSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="flex flex-col items-center justify-center bg-[#174A84] rounded-[2rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-4 left-10 opacity-30">
          <svg
            width="100"
            height="20"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 z-10">
          {aboutData.cta.title}
        </h2>
        <p className="text-blue-100 mb-8 z-10">{aboutData.cta.subtitle}</p>
        <button className="border border-white text-white font-semibold py-2 px-8 rounded-full hover:bg-white hover:text-[#174A84] transition z-10">
          {aboutData.cta.buttonText}
        </button>
      </div>
    </section>
  );
};

export default AboutCtaSection;
