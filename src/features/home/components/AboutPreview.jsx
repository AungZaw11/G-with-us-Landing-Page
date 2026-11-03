import React from "react";
import { homeData } from "../data/homeData";
import { Link } from "react-router-dom";
import About_1 from "../../../assets/Rectangle 6.png";
import About_2 from "../../../assets/Rectangle 9.png";
import About_3 from "../../../assets/Rectangle 10.png";
import About_4 from "../../../assets/Rectangle 11.png";

const AboutPreview = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 md:px-16 py-20 gap-12 items-center">
      <div className="flex flex-col w-full lg:w-1/2 items-start">
        <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
          {homeData.about.title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
          {homeData.about.description}
        </p>
        <button className="mt-4 border border-[#0A2540] text-[#0A2540] font-semibold py-2 px-6 rounded-full hover:bg-[#0A2540] hover:text-white transition">
          See More
        </button>
      </div>

      <div className="flex flex-wrap w-full lg:w-1/2 gap-4 justify-center">
        <div className="w-[47%] aspect-square bg-gray-300 rounded-tr-[3rem] rounded-bl-3xl overflow-hidden">
          <img
            src={About_1}
            alt="About 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[47%] aspect-square bg-gray-300 rounded-tl-[3rem] rounded-br-3xl overflow-hidden">
          <img
            src={About_3}
            alt="About 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[47%] aspect-square bg-gray-300 rounded-br-[3rem] rounded-tl-3xl overflow-hidden">
          <img
            src={About_4}
            alt="About 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[47%] aspect-square bg-gray-300 rounded-bl-[3rem] rounded-tr-3xl overflow-hidden">
          <img
            src={About_2}
            alt="About 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
