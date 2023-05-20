import Image from "next/image";
import Link from "next/link";
import laptopBg from "@/public/laptop_Bg.png";

const Promotion = () => {
  return (
    <div className="relative w-full h-[417px] mt-[121.01px]">
      <Image src={laptopBg} alt="laptop Bg" />

      <div className="absolute right-[100px] top-[50%] translate-y-[-50%] flex flex-col items-center">
        <div className="font-medium text-[25px] leading-[21px] text-[#2E8FC5]">
          New laptop
        </div>
        <h1 className="font-bold text-[41px] leading-[62px] text-[#2E8FC5] mt-[36px] mb-[12px]">
          Sale up to 50% off
        </h1>
        <p className="font-medium text-lg leading-[27px] text-white">
          12 inch hd display
        </p>
        <Link
          href="/category/5"
          className="mt-[36px] bg-gold rounded-[20px] py-[12px] px-[26.5px] font-medium text-[14.09px] leading-[21px] text-white"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Promotion;
