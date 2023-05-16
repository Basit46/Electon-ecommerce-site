"use client";

import Image from "next/image";
import camera from "../public/canon.png";
import camera_sm from "../public/camera-sm.png";
import ProductsCollection from "./ProductsCollection";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "@/context/FilterContext";
// import { useFilterContext } from "@/context/FilterContext";

const Hero = () => {
  const [nums, setNums] = useState({
    phonesNum: 0,
    laptopsNum: 0,
    camerasNum: 0,
    headphonesNum: 0,
  });
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
      const returnedProducts = await res.json();

      await setNums({
        phonesNum: returnedProducts.filter(
          (product) => product.category === "Phones"
        ).length,
        laptopsNum: returnedProducts.filter(
          (product) => product.category === "Laptops"
        ).length,
        camerasNum: returnedProducts.filter(
          (product) => product.category === "Cameras"
        ).length,
        headphonesNum: returnedProducts.filter(
          (product) => product.category === "Headphones"
        ).length,
      });
    };

    getProducts();
  }, []);

  // const { first } = useFilterContext();
  const { first } = useContext(FilterContext);

  return (
    <div>
      <div className="w-full flex justify-around">
        <div>
          <h1 className="font-bold text-[43px] leading-[64px] text-[#1B5A7D]">
            Canon {first}
            <br />
            camera
          </h1>
          <div className="mt-[19px] mb-[49px] flex items-center gap-[21px]">
            <button className="py-[18.5px] px-[32px] bg-gold rounded-[20px] font-semibold text-base leading-6 text-white">
              Shop now
            </button>
            <button className="py-[18.5px] px-[32px] rounded-[20px] border border-solid border-[#316887] font-semibold text-base leading-6 text-[#316887]">
              View more
            </button>
          </div>
          <div className="flex gap-[8px] ml-[120px]">
            <div className="w-4 h-4 rounded-full border border-solid border-[#ADADAD] bg-gold "></div>
            <div className="w-4 h-4 rounded-full border border-solid border-[#ADADAD]"></div>
            <div className="w-4 h-4 rounded-full border border-solid border-[#ADADAD]"></div>
          </div>
        </div>

        <div className="relative">
          <Image src={camera} alt="Hero_product_image" priority={true} />
          <div className="absolute bottom-[52.39px] right-[-40px] w-[114.61px] h-[114.61px] rounded-full bg-gold flex justify-center items-center">
            <p className="font-semibold text-[21.573px] leading-8 text-white">
              Only $89
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-[109px] mt-[52px] relative">
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="w-[37px] h-[37px] absolute left-[95px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-[#EAEAEA]">
            <BsArrowLeft className="text-[#292D32]" />
          </div>
          <div className="w-fit flex gap-[50px]">
            <ProductsCollection
              img={camera_sm}
              title="Phones"
              items={nums.phonesNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Laptops"
              items={nums.laptopsNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Cameras"
              items={nums.camerasNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Headphones"
              items={nums.headphonesNum}
            />
          </div>
          <div className="w-[37px] h-[37px] absolute right-[95px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-[#EAEAEA]">
            <BsArrowRight className="text-[#292D32]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
