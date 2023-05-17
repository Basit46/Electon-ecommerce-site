import React from "react";
import send from "@/public/send.png";
import call from "@/public/call.png";
import Image from "next/image";
import logo from "@/public/logo-2.svg";
import { SlSocialGoogle } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-[101px] w-full bg-lightblue px-[61px] pt-[42px]">
      <div className="w-full bg-white flex justify-between items-center px-[45.5px] py-[38px] rounded-[20px] ">
        <h1 className="font-bold text-[29.38px] leading-[44px] text-[#1B5A7D]">
          Subscribe to Newsletter
        </h1>

        <div className="h-[56px] w-[388px] flex items-center bg-gold rounded-[20px]">
          <input
            className="h-full rounded-[20px] flex-1 px-[25px] text-white placeholder:text-white bg-transparent outline-none"
            type="text"
            placeholder="Email Address"
          />
          <Image className="mr-[22.12px]" src={send} alt="Send_logo" />
        </div>

        <div className="flex gap-[23.75px] w-fit">
          <Image className="mr-[22.12px]" src={call} alt="call_icon" />
          <p className="font-semibold text-sm leading-[21px] text-[#606060]">
            Call us 24/7 : <br />
            (+62) 0123 567 789
          </p>
        </div>
      </div>

      <footer className="mt-[41px] flex gap-[200px] pb-[42px]">
        <div>
          <Image src={logo} alt="Logo_Img" />
          <p className="mt-[41px] text-[16.38px] leading-[25px] text-[#1B5A7D]">
            64 st james boulevard hoswick , ze2 7zj
          </p>
          <div className="text-[16.38px] leading-[25px] w-[250px] h-0 border border-solid border-[#9D9D9D] mt-[36px] mb-[25px]" />
          <div className="flex items-center gap-[41px]">
            <SlSocialGoogle />
            <FiFacebook />
            <BsWhatsapp />
          </div>
        </div>

        <div className="flex gap-[50px]">
          <ul>
            <p>Categories</p>
            <li>Phones</li>
            <li>Laptops</li>
            <li>Cameras</li>
            <li>Headphones</li>
            <li>Others</li>
          </ul>

          <ul>
            <p>About us</p>
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Customer care</li>
            <li>FAQs</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
