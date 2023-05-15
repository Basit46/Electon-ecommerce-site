import React from "react";
import Image from "next/image";
import camera from "../public/canon.png";
import camera_sm from "../public/camera-sm.png";
import ProductsCollection from "./ProductsCollection";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-around">
        <div>
          <h1 className="font-bold text-[43px] leading-[64px] text-[#1B5A7D]">
            Canon
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
            <ProductsCollection img={camera_sm} title="DSLR camera" items="6" />
            <ProductsCollection img={camera_sm} title="DSLR camera" items="6" />
            <ProductsCollection img={camera_sm} title="DSLR camera" items="6" />
            <ProductsCollection img={camera_sm} title="DSLR camera" items="6" />
            <ProductsCollection img={camera_sm} title="DSLR camera" items="6" />
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
