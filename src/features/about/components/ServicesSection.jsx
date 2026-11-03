import React from "react";

const ServicesSection = ({ data, reverse, imageSrc }) => {
  return (
    <section
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-16 py-16 gap-12`}
    >
      <div className="flex w-full md:w-1/2 justify-center relative">
        <div className="absolute top-4 -left-4 w-[90%] h-full bg-[#3B82F6] rounded-tl-3xl rounded-br-3xl -z-10"></div>
        <img
          src={imageSrc || "https://via.placeholder.com/500x350"}
          alt={data.title}
          className="w-[90%] h-auto object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
        />
      </div>

      {/* စာသား အပိုင်း */}
      <div className="flex flex-col w-full md:w-1/2 items-start text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-2">
          {data.title}
        </h2>
        <h3 className="text-lg text-blue-600 font-semibold mb-6">
          {data.subtitle}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
          {data.description1}
        </p>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {data.description2}
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
