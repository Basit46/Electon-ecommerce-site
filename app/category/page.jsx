import CategoryList from "@/components/CategoryList";
import Product from "@/components/Product";
import Promotion from "@/components/Promotion";
import React from "react";

const category = () => {
  return (
    <div className="w-full px-[40px]">
      <div className="mt-[103px] w-full flex justify-between gap-[40px]">
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

            <CategoryList category="All Category" itemsNo={10} />
            <CategoryList category="Tablet" itemsNo={5} />
            <CategoryList category="Laptops" itemsNo={5} />
            <CategoryList category="Headphones" itemsNo={5} />
            <CategoryList category="Console" itemsNo={5} />
            <CategoryList category="Other" itemsNo={5} />
          </div>

          <div className="w-full border border-solid border-[#BDBDBD] mt-[23px] mb-[13px]" />

          <div>
            <p className="font-medium text-[16.09px] leading-6 text-[#003F62] mb-[13px]">
              Availability
            </p>
            <div className="flex justify-between mb-[1px]">
              <p className=" text-[16.09px] leading-6 text-[#003F62]">
                0 selected
              </p>
              <p className="text-[15.09px] leading-[23px] text-[#595959]">
                Reset
              </p>
            </div>

            <CategoryList category="In stock" itemsNo={5} />
            <CategoryList category="Out of stock" itemsNo={0} />
          </div>
        </div>

        <div className="min-h-[50vh] flex flex-1 flex-wrap gap-[20px]">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Promotion />
    </div>
  );
};

export default category;
