import React from "react";
import Product from "./Product";
import Promotion from "./Promotion";

const Products = () => {
  return (
    <div className="products px-[61px] mt-[82px]">
      <div className="heading flex justify-between items-center">
        <h1 className="font-semibold text-[27.38px] leading-[41px] text-[#1B5A7D]">
          Popular products
        </h1>
        <ul className="flex gap-[10px]">
          <li>Cameras</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Mouse</li>
        </ul>
      </div>

      <div className="products-grid mt-[53px]">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <Promotion />
    </div>
  );
};

export default Products;
