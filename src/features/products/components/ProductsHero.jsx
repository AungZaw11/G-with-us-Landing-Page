import React from "react";
import { productsData } from "../data/productsData";

const ProductsHero = () => {
  return (
    <section
      className="flex flex-col w-full items-center justify-center bg-[#081F37] min-h-[40vh] md:min-h-[50vh] px-6 py-20 text-center relative bg-cover bg-center"
      // style={{ backgroundImage: "url('/assets/products-hero-bg.jpg')" }}
    >
      <div className="flex flex-col items-center max-w-4xl z-10">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {productsData.hero.title}
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl">
          {productsData.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
