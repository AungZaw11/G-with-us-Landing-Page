import React from "react";
import { MapPin, Bookmark } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#0A2540] mb-3">{job.title}</h3>
      <div className="flex flex-row items-center gap-3 mb-6">
        <span
          className={`text-[10px] font-bold px-2 py-1 rounded-sm tracking-wider ${job.typeColor}`}
        >
          {job.type}
        </span>
        <span className="text-gray-500 text-sm">Salary: {job.salary}</span>
      </div>

      <div className="flex flex-row items-center mt-auto border-t border-gray-100 pt-4">
        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mr-3">
          <span className="text-red-500 font-bold text-lg">G</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#0A2540]">
            {job.company}
          </span>
          <span className="text-xs text-gray-500 flex items-center mt-1">
            <MapPin className="w-3 h-3 mr-1" /> {job.location}
          </span>
        </div>
        <button className="ml-auto text-gray-400 hover:text-blue-500 transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
