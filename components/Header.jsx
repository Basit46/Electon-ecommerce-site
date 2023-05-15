import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsTruck } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between py-[22.5px] pl-[61px] pr-[49px]">
      <p className="text-sm leading-[21px] text-[#292D32]">
        Need help? Call us: (+98) 0234 456 789
      </p>

      <div className="flex items-center gap-[38px]">
        <div className="flex items-center gap-[23.38px]">
          <GrLocation />
          <p className="text-sm leading-[21px] text-[#292D32]">Our Store</p>
        </div>

        <div className="flex items-center gap-[22px]">
          <BsTruck />
          <p className="text-sm leading-[21px] text-[#292D32]">
            Track your order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
