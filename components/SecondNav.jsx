import Link from "next/link";
import React from "react";

const SecondNav = () => {
  return (
    <div className="second-nav w-full h-[71px] bg-[#F4F4F4] flex items-center px-[63px]">
      <Link
        className="h-full bg-gold text-white grid place-items-center px-[14.5px] cursor-pointer font-medium text-base leading-6"
        href="/category"
      >
        Browse categories
      </Link>

      <ul className="ml-[98px] flex items-center gap-[29px]">
        <li>Home</li>
        <li>Catalog</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>About Us</li>
      </ul>

      <p className="ml-auto font-bold text-base leading-6 text-[#003F62]">
        30 Days Free Return
      </p>
    </div>
  );
};

export default SecondNav;
