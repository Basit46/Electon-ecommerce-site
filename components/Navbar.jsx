"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useCartContext } from "@/context/cart.context";
import { useAuthContext } from "@/context/auth.context";

const Navbar = () => {
  const { cartItems } = useCartContext();
  const { user, handleSignOut } = useAuthContext();

  useEffect(() => {
    console.log(user?.email);
  }, [user]);
  return (
    <nav className="w-full bg-blue flex items-center justify-between py-[22px] px-[67.79px]">
      <div className="">
        <Link className="cursor-pointer" href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="ml-[98px] flex items-center gap-[29px]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/category">
          <li>Category</li>
        </Link>
        <li>Blog</li>
      </ul>

      <div className="flex items-center gap-[31px] text-white">
        {!user && (
          <Link href="/auth/signin">
            <div className="flex items-center gap-[10px]">
              <BiUser className="h-[24px] w-[24px]" />
              <p className="text-[14px] leading-[21px]">Sign In</p>
            </div>
          </Link>
        )}

        {!user && (
          <Link href="/auth/signup">
            <div className="flex items-center gap-[10px]">
              <BiUser className="h-[24px] w-[24px]" />
              <p className="text-[14px] leading-[21px]">Sign Up</p>
            </div>
          </Link>
        )}

        {user && (
          <button
            onClick={handleSignOut}
            className="text-[14px] leading-[21px] cursor-pointer"
          >
            Sign Out
          </button>
        )}

        <div className="flex items-center gap-[5px]">
          <AiOutlineHeart className="h-[24px] w-[24px]" />
          <div className="bg-gold rounded-[394.737px] w-[14.21px] h-[15px] flex justify-center items-center">
            <p className="text-[9.47368px] leading-[14px]">0</p>
          </div>
        </div>

        <Link href="/cart">
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[3px]">
              <AiOutlineShoppingCart className="h-[24px] w-[24px]" />
              <div className="bg-gold rounded-[394.737px] w-[14.21px] h-[15px] flex justify-center items-center">
                <p className="text-[9.47368px] leading-[14px]">
                  {cartItems?.length}
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-[21px]">Cart</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
