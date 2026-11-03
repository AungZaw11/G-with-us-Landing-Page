import React from "react";

const ProductItem = ({ product, reverse }) => {
  return (
    <section
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-16 py-16 gap-12`}
    >
      <div className="flex w-full md:w-1/2 justify-center relative">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
        />
        <div
          className={`absolute top-0 ${reverse ? "right-0" : "left-0"} -z-10`}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M0 10 Q 10 0 20 10 T 40 10"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 20 Q 10 10 20 20 T 40 20"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 items-start text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-2">
          {product.title}
        </h2>
        <h3 className="text-sm md:text-base text-blue-500 font-medium mb-6 uppercase tracking-wide">
          {product.category}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
          {product.description1}
        </p>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {product.description2}
        </p>
      </div>
    </section>
  );
};

export default ProductItem;
