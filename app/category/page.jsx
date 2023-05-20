"use client";

import CategoryList from "@/components/CategoryList";
import Product from "@/components/Product";
import Promotion from "@/components/Promotion";
import { useFilterContext } from "@/context/FilterContext";

const category = () => {
  const { productsClone } = useFilterContext();

  return (
    <div className="w-full px-[40px]">
      <div className="mt-[50px] w-full flex justify-between gap-[40px]">
        <div className="min-h-[50vh] w-[18%]">
          <div>
            <div className="flex justify-between mb-[1px]">
              <p className="font-medium text-[16.09px] leading-6 text-[#003F62]">
                Categories
              </p>
              <p className="text-[15.09px] leading-[23px] text-[#595959]">
                Reset
              </p>
            </div>

            <CategoryList category="All Items" itemsNo={16} />
            <CategoryList category="Phones" itemsNo={4} />
            <CategoryList category="Laptops" itemsNo={3} />
            <CategoryList category="Cameras" itemsNo={4} />
            <CategoryList category="Headphones" itemsNo={5} />
            <CategoryList category="Other" itemsNo={0} />
          </div>

          <div className="w-full border border-solid border-[#BDBDBD] mt-[23px] mb-[13px]" />
        </div>

        <div className="min-h-[50vh] flex flex-1 flex-wrap gap-[20px]">
          {productsClone?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
      <Promotion />
    </div>
  );
};

export default category;
