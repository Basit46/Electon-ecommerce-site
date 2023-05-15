import Image from "next/image";
import laptopBg from "@/public/laptop_Bg.png";

const Promotion = () => {
  return (
    <div className="relative w-full h-[417px] mt-[121.01px]">
      <Image src={laptopBg} alt="laptop Bg" />

      <div className="absolute right-[100px] top-[50%] translate-y-[-50%] flex flex-col items-center">
        <button className="bg-gold rounded-[20px] py-[12px] px-[26.5px] font-medium text-[14.09px] leading-[21px] text-white">
          New laptop
        </button>
        <h1 className="font-bold text-[41px] leading-[62px] text-[#2E8FC5] mt-[36px] mb-[12px]">
          Sale up to 50% off
        </h1>
        <p className="font-medium text-lg leading-[27px] text-white">
          12 inch hd display
        </p>
        <button className="mt-[36px] bg-gold rounded-[20px] py-[12px] px-[26.5px] font-medium text-[14.09px] leading-[21px] text-white">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Promotion;
