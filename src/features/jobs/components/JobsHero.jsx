import React from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { jobsData } from "../data/jobsData";

const JobsHero = () => {
  return (
    <section className="flex flex-col w-full items-center mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#174A84] min-h-[35vh] px-6 md:px-16 lg:px-24 pt-16 pb-24 overflow-hidden relative">
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/2">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {jobsData.hero.title}
          </h1>
          <p className="text-blue-200 text-lg md:text-xl">
            {jobsData.hero.subtitle}
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-6xl px-4 md:px-8 -mt-10 z-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white rounded-xl shadow-xl border border-gray-200 p-2 gap-2">
          <div className="flex flex-1 items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 w-full">
            <Search className="text-gray-400 mr-2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by: Job title, Position..."
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          <div className="flex flex-1 items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 w-full">
            <MapPin className="text-gray-400 mr-2 w-5 h-5" />
            <input
              type="text"
              placeholder="City, state or zip code"
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          <div className="flex flex-row items-center w-full md:w-auto gap-2 mt-2 md:mt-0">
            <button className="flex-1 md:flex-none flex items-center justify-center bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition text-sm">
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
            </button>
            <button className="flex-1 md:flex-none bg-[#174A84] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-900 transition text-sm">
              Find Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsHero;
