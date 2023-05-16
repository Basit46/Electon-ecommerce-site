"use client";

import React, { useState, createContext, useContext } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [first, setfirst] = useState(20);
  return (
    <FilterContext.Provider value={{ first, setfirst }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
