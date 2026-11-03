import React from "react";
import { homeData } from "../data/homeData";
import EP_1 from "../../../assets/EP-1.png";
import EP_2 from "../../../assets/EP-2.png";
import EP_3 from "../../../assets/EP-3.png";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-16 py-20 bg-white">
      <div className="flex flex-col items-center text-center mb-16 w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-[#174A84] mb-4">
          Empowering Maritime & Digital Operations
        </h2>
        <p className="text-[#3B82F6] text-sm md:text-base max-w-4xl">
          Explore our integrated suite of IT solutions and crew management
          systems designed for seamless global deployment.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 md:gap-12 items-start justify-between">
        {homeData.features.map((feature, idx) => (
          <div key={idx} className="flex flex-col flex-1 items-start text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-6">
              <img
                src={EP_1}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-800 text-xs md:text-[13px] leading-[1.8] font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
