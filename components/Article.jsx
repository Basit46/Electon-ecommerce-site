import Image from "next/image";
import article_img from "@/public/article_img.png";

const Article = () => {
  return (
    <div className="w-[650px] h-[369px] border rounded-[20px] border-solid border-[#C8C8C8] py-[34.5px] px-[24.5px] flex items-center gap-[34px]">
      <Image src={article_img} alt="article_img" width={302} height={274} />

      <div>
        <p className="w-fit font-medium text-[20.38px] leading-[31px] text-[#1B5A7D] border border-neutral-300 rounded-[20px] border-solid py-[5px] px-[18.5px]">
          15<sup>nd</sup> May, 2023
        </p>
        <p className="mt-[9px] font-semibold text-[22.38px] leading-[34px] text-[#1B5A7D]">
          Who avoids a pain that produces?
        </p>
        <p className="text-[13.1707px] leading-5 text-[#003F62] mt-[19px] mb-[43px]">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
        <p className="text-[13.1707px] leading-5 text-[#003F62]">
          By spacing tech
        </p>
      </div>
    </div>
  );
};

export default Article;
