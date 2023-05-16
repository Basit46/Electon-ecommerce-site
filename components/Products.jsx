import React from "react";
import Product from "./Product";
import Promotion from "./Promotion";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const returnedProducts = await res.json();
  const products = returnedProducts.filter(
    (product) => product.category === "Phones"
  );

  return products;
};

const Products = async () => {
  const products = await getProducts();
  return (
    <div className="products px-[61px] mt-[82px]">
      <div className="heading flex justify-between items-center">
        <h1 className="font-semibold text-[27.38px] leading-[41px] text-[#1B5A7D]">
          Popular products
        </h1>
        <ul className="flex gap-[10px]">
          <li>Phones</li>
          <li>Laptops</li>
          <li>Cameras</li>
          <li>Headphones</li>
        </ul>
      </div>

      <div className="products-grid mt-[53px]">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      <Promotion />
    </div>
  );
};

export default Products;
