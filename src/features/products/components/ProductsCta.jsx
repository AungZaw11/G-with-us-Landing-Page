import React from "react";
import { productsData } from "../data/productsData";

const ProductsCta = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#174A84] rounded-[2rem] p-10 md:p-14 text-white overflow-hidden relative">
        <div className="flex flex-col w-full md:w-[60%] items-center md:items-start text-center md:text-left z-10 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {productsData.cta.title}
          </h2>
          <p className="text-blue-100 mb-8">{productsData.cta.subtitle}</p>
          <button className="border border-white text-white font-semibold py-2 px-8 rounded-full hover:bg-white hover:text-[#174A84] transition">
            {productsData.cta.buttonText}
          </button>
        </div>

        <div className="flex w-full md:w-[35%] justify-center md:justify-end z-10">
          <img
            src="https://via.placeholder.com/200"
            alt="Ship"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover border-4 border-white/20"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsCta;
