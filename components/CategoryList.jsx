"use client";

import { useFilterContext } from "@/context/FilterContext";

const CategoryList = ({ category, itemsNo }) => {
  const { handleChange } = useFilterContext();

  return (
    <div className="w-full flex items-center mt-[12px] ">
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={(e) => handleChange(e, category)}
          id="myCheckbox"
          className="mr-[10px]"
        />
        <label
          htmlFor="myCheckbox"
          className="text-[16.09px] leading-6 text-[#222222]"
        >
          {category}
        </label>
      </div>

      <p className="flex-1 text-right text-[16.09px] leading-6 text-[#222222]">
        {itemsNo}
      </p>
    </div>
  );
};

export default CategoryList;
