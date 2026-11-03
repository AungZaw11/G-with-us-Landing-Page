import React from "react";
import { productsData } from "../data/productsData";
import ProductsHero from "../components/ProductsHero";
import ProductItem from "../components/ProductItem";
import ProductsCta from "../components/ProductsCta";

const ProductsPage = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <ProductsHero />

      <div className="flex flex-col py-10 w-full">
        {productsData.productsList.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <ProductsCta />
    </main>
  );
};

export default ProductsPage;
