import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-blue flex items-center justify-between py-[22px] px-[67.79px]">
      <div className="">
        <Link className="cursor-pointer" href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="h-[56px] w-[438px] flex items-center bg-white rounded-[20px]">
        <input
          className="h-full rounded-[20px] flex-1 px-[25px] outline-none"
          type="text"
          placeholder="Search any thing"
        />
        <button className="bg-gold h-full px-[41px] rounded-[20px] mt-[0px]">
          Search
        </button>
      </div>

      <div className="flex items-center gap-[31px] text-white">
        <div className="flex items-center gap-[15.41px]">
          <BiUser className="h-[24px] w-[24px]" />
          <p className="text-[14px] leading-[21px]">Sign in</p>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[5px]">
            <AiOutlineHeart className="h-[24px] w-[24px]" />
            <div className="bg-gold rounded-[394.737px] w-[14.21px] h-[15px] flex justify-center items-center">
              <p className="text-[9.47368px] leading-[14px]">0</p>
            </div>
          </div>
          <p className="text-[14px] leading-[21px]">Sign in</p>
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[3px]">
            <AiOutlineShoppingCart className="h-[24px] w-[24px]" />
            <div className="bg-gold rounded-[394.737px] w-[14.21px] h-[15px] flex justify-center items-center">
              <p className="text-[9.47368px] leading-[14px]">0</p>
            </div>
          </div>
          <p className="text-[14px] leading-[21px]">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
