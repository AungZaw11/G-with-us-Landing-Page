import React from "react";
import { homeData } from "../data/homeData";
import Crew_Home from "../../../assets/Crew_Home.png";

const LatestProduct = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#1D4A7A] rounded-3xl p-6 md:p-12 gap-8 md:gap-12 w-full shadow-lg">
        <div className="flex w-full md:w-[45%] justify-center">
          <div className="w-full aspect-[5/3] bg-[#D1D5DB] rounded-lg flex items-center justify-center overflow-hidden">
            <div className="w-full h-full  max-w-md aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Crew_Home}
                alt="System"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[55%] items-start text-left">
          <span className="text-blue-100 text-sm md:text-base font-medium mb-2">
            Our Latest Product
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.2]">
            G-With Us Crew Management System
          </h2>
          <p className="text-blue-50 text-sm md:text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Id enim arcu malesuada nunc
            ultricies. Egestas purus tellus mi arcu. Suspendisse eget felis sit
            quis. Non at sed sed congue phasellus. Sit sociis est aliquet
            suspendisse lectus proin consequat rhoncus enim. Id suscipit tellus
            tellus cras ante tincidunt.
          </p>

          <button className="flex items-center justify-center border-2 border-white bg-transparent text-white font-semibold py-2.5 px-6 rounded-full hover:bg-white hover:text-[#1D4A7A] transition-colors text-sm">
            View Product Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
