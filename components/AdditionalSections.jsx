import Image from "next/image";
import React from "react";
import box_tick from "@/public/box-tick.png";
import crown from "@/public/crown.png";
import warranty from "@/public/warranty.png";
import user from "@/public/user.png";
import brand from "@/public/brand.png";
import Promotion from "./Promotion";

const AdditionalSections = () => {
  return (
    <div className="w-full mt-[75px] px-[61px]">
      <Promotion />
      {/* Features */}
      <div className="w-full rounded-[20px] bg-lightblue flex items-center justify-center gap-[109.77px] py-[44.5px]">
        <div className="flex gap-[36.79px] items-center">
          <Image src={box_tick} alt="box tick" />
          <div>
            <p className="font-semibold text-[22.09px] leading-[33px] text-[#003F62]">
              Free delivery
            </p>
            <p className="mt-[6px] text-[18.09px] leading-[27px] text-[#003F62]">
              On order above $50.00
            </p>
          </div>
        </div>
        <div className="flex gap-[36.79px] items-center">
          <Image src={crown} alt="box tick" />
          <div>
            <p className="font-semibold text-[22.09px] leading-[33px] text-[#003F62]">
              Best quality
            </p>
            <p className="mt-[6px] text-[18.09px] leading-[27px] text-[#003F62]">
              Best quality in low price
            </p>
          </div>
        </div>
        <div className="flex gap-[36.79px] items-center">
          <Image src={warranty} alt="box tick" />
          <div>
            <p className="font-semibold text-[22.09px] leading-[33px] text-[#003F62]">
              1 year warranty
            </p>
            <p className="mt-[6px] text-[18.09px] leading-[27px] text-[#003F62]">
              Avaliable warranty
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="w-full mt-[75px] flex flex-wrap justify-center gap-[20px] ">
        <div className="w-[390px] h-[232.1px] border rounded-[20px] border-solid border-[#BABABA] p-[10px] flex flex-col justify-between">
          <div className="flex items-center gap-[37.39px]">
            <Image src={user} alt="user_pfp" />
            <p className="font-medium text-[15.9785px] leading-6 text-[#003F62]">
              Idan High-Don
            </p>
          </div>
          <div className="bg-lightblue rounded-[18.695px] py-[11.13px] px-[26.64px] text-[13.1707px] leading-5 text-[#003F62]">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </div>
        </div>
        <div className="w-[390px] h-[232.1px] border rounded-[20px] border-solid border-[#BABABA] p-[10px] flex flex-col justify-between">
          <div className="flex items-center gap-[37.39px]">
            <Image src={user} alt="user_pfp" />
            <p className="font-medium text-[15.9785px] leading-6 text-[#003F62]">
              Esther Howard
            </p>
          </div>
          <div className="bg-lightblue rounded-[18.695px] py-[11.13px] px-[26.64px] text-[13.1707px] leading-5 text-[#003F62]">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </div>
        </div>
        <div className="w-[390px] h-[232.1px] border rounded-[20px] border-solid border-[#BABABA] p-[10px] flex flex-col justify-between">
          <div className="flex items-center gap-[37.39px]">
            <Image src={user} alt="user_pfp" />
            <p className="font-medium text-[15.9785px] leading-6 text-[#003F62]">
              Ogbon
            </p>
          </div>
          <div className="bg-lightblue rounded-[18.695px] py-[11.13px] px-[26.64px] text-[13.1707px] leading-5 text-[#003F62]">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mt-[54px] w-full bg-lightblue flex justify-around py-[47.38px]">
        <Image src={brand} alt="brand_logo" />
        <Image src={brand} alt="brand_logo" />
        <Image src={brand} alt="brand_logo" />
        <Image src={brand} alt="brand_logo" />
        <Image src={brand} alt="brand_logo" />
      </div>
    </div>
  );
};

export default AdditionalSections;
