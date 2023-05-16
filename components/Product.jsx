import Image from "next/image";
import React from "react";
import pad from "@/public/pad.png";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import add_to_cart from "@/public/add_to_cart_logo.png";

const Product = ({ product }) => {
  return (
    <div className="relative w-[308.83px] h-[313.75px] p-[10px] rounded-[19.6707px] border-[0.983537px] border-solid border-[#B6B6B6] flex flex-col">
      <div>
        <Image src={pad} alt="Game pad" />
      </div>
      <div className="absolute top-[20px] right-[20px] w-[27.54px] h-[27.54px] bg-[#B3D4E5] grid place-items-center rounded-full">
        <AiOutlineHeart />
      </div>
      <p className="font-medium text-[17.0939px] leading-[24px] text-[#003F62]">
        {product?.title}
      </p>
      <p className="font-semibold text-[17.0939px] leading-[24px] text-[#4A4A4A] my-[4px]">
        ${product?.price}
      </p>

      <div className="flex gap-[10.82px]">
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-[#ACACAC]" />
        <AiFillStar className="text-[#ACACAC]" />
      </div>

      <button className="self-end bg-[#87BCD9] rounded-[19.6707px] px-[10px] py-[10px] flex items-center gap-[39.84px]">
        <p className="font-semibold text-[15.7366px] leading-6 text-[#272727]">
          Add to Cart
        </p>
        <Image src={add_to_cart} alt="add_to_cart_logo" />
      </button>
    </div>
  );
};

export default Product;
