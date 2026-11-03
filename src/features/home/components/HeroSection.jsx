import React from "react";
import { homeData } from "../data/homeData";
import HomeBG from "../../../assets/Home_bg.png";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col mb-16">
      <div
        className="w-full flex flex-col justify-between bg-[#081F37] min-h-[85vh] px-6 md:px-16 lg:px-24 pt-24 pb-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <div className="flex flex-col items-start w-full lg:w-[65%] gap-6">
          <span className="text-white text-base md:text-lg font-semibold tracking-wide">
            {homeData.hero.label}
          </span>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            {homeData.hero.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            {homeData.hero.subtitle}
          </p>

          <button className="flex flex-row items-center gap-2 bg-white text-[#0A2540] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition mt-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            {homeData.hero.buttonText}
          </button>
        </div>

        <div className="flex flex-row justify-end w-full mt-12 md:mt-24">
          <div className="flex flex-row items-center justify-around bg-[#18487A]/95 backdrop-blur-md text-white rounded-[2rem] w-full md:w-auto min-w-[300px] md:min-w-[600px] p-8 translate-y-[50%] shadow-2xl">
            {homeData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-1 px-4 border-r border-white/20 last:border-0"
              >
                <span className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-gray-200 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
