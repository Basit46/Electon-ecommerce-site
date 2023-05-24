"use client";

import { productsList } from "@/public/apitest";
import React, { useState, createContext, useContext, useEffect } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsList);
  const [productsClone, setProductsClone] = useState(products);
  const [first, setfirst] = useState(20);

  useEffect(() => {
    setProductsClone(products);
  }, [products]);

  const handleChange = (e, category) => {
    if (e.target.checked === true) {
      if (category === "All Items") {
        setProductsClone(products);
      } else {
        setProductsClone(products.filter((item) => item.category === category));
      }
    } else {
      setProductsClone(products);
    }
  };
  return (
    <FilterContext.Provider
      value={{ first, setfirst, handleChange, productsClone }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
