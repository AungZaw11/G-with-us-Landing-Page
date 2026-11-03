import React from "react";
import { aboutData } from "../data/aboutData";

const TeamSection = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-16 py-16 items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
        {aboutData.team.header}
      </h2>
      <p className="text-gray-600 mb-12">{aboutData.team.subHeader}</p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center w-full gap-8">
        {aboutData.team.departments.map((dept, index) => (
          <div
            key={index}
            /* 
              Mobile: 100% 
              Tablet: 47% 
              Desktop: 30% 
            */
            className="flex flex-col w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] items-start text-left"
          >
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6">
              <img
                src={`https://via.placeholder.com/400x300?text=Team+Image+${index + 1}`}
                alt={dept.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-bold text-[#0A2540] mb-3">
              {dept.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
