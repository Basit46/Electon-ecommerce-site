import Image from "next/image";
import React from "react";
import pad from "@/public/pad.png";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCheck } from "react-icons/md";
import Product from "@/components/Product";
import { productsList } from "@/public/apitest";

const getProduct = async (params) => {
  const product = await productsList.find(
    (product) => product.id.toString() === params.productId
  );

  const relatedProducts = productsList
    .filter((relatedproduct) => relatedproduct.category === product.category)
    .filter((item) => item.id !== product.id);
  return { relatedProducts, product };
};
const page = async ({ params }) => {
  const { relatedProducts, product } = await getProduct(params);
  return (
    <div className="w-full px-[60px] py-[22px]">
      <div className="flex gap-[49px]">
        <div className="w-[500px]">
          <div className="w-full h-[400px] border rounded-[20px] border-solid border-[#ACACAC]">
            <Image
              className="h-full w-full object-contain"
              src={product?.image}
              alt="Big pad"
            />
          </div>
          <div className="mt-[25px] flex justify-between">
            <div className="w-[240px] h-[157px] border rounded-[20px] border-solid border-[#ACACAC]">
              <Image
                className="h-full w-full object-contain"
                src={product?.image}
                alt="pad"
              />
            </div>
            <div className="w-[240px] h-[157px] border rounded-[20px] border-solid border-[#ACACAC]">
              <Image
                className="h-full w-full object-contain"
                src={product?.image}
                alt="pad"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-[29.6765px] leading-[45px] text-[#003F62]">
            {product?.title}
          </h1>
          <p className="mt-[11px] mb-[23.71px] font-semibold text-[29.6765px] leading-[45px] text-[#4A4A4A]">
            ${product?.price}
          </p>
          <div className="flex items-center gap-[8px]">
            <div className="flex gap-[5px]">
              <AiFillStar className="text-gold w-[21.92px] h-[21.92px]" />
              <AiFillStar className="text-gold w-[21.92px] h-[21.92px]" />
              <AiFillStar className="text-gold w-[21.92px] h-[21.92px]" />
              <AiFillStar className="text-[#ACACAC] w-[21.92px] h-[21.92px]" />
              <AiFillStar className="text-[#ACACAC] w-[21.92px] h-[21.92px]" />
            </div>
            <p className="font-medium text-[13.1922px] leading-5 text-[#4A4A4A]">
              Reviews
            </p>
          </div>
          <div className="flex mt-[20.09px] mb-[16px] gap-[19px]">
            <p className="font-medium text-[18.1725px] leading-[27px] text-[#232323]">
              Availability
            </p>
            <div className="font-medium text-[18.1725px] leading-[27px] text-[#30BD57] flex items-center gap-[14.59px]">
              <MdOutlineCheck /> In stock
            </div>
          </div>
          <p className="text-[15.9276px] leading-6 text-[#5D5D5D]">
            Hurry up! only few products left in stock!
          </p>
          <div className="flex gap-[29px] my-[20px] py-[20px] border-y-[2px] border-solid border-[#BDBDBD]">
            <button className="py-[19.5px] px-[56px] bg-gold rounded-[32.4242px] font-semibold text-[22.697px] leading-[34px] text-white">
              Add to cart
            </button>
            <div className="bg-[#EEEEEE] w-[74px] h-[73px] rounded-full grid place-items-center">
              <AiOutlineHeart className="w-[30px] h-[26.7px]" />
            </div>
          </div>
          <div className="flex items-center gap-[28px]">
            <p className="font-medium text-[18.1725px] leading-[27px] text-[#232323]">
              Share:
            </p>
            <button className="bg-[#EEEEEE] font-bold text-[18.1725px] leading-[27px] text-[#232323] rounded-[10px] p-[10px]">
              COPY LINK
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-[78px] flex justify-center gap-[30px]">
        <button className="border rounded-[20px] border-solid border-[#8F8F8F] py-[14.5px] px-[34px] font-medium text-[20.68px] leading-[31px] text-[#373737]">
          Description
        </button>
        <button className="border rounded-[20px] bg-[#003F62] border-solid border-[#8F8F8F] py-[14.5px] px-[34px] font-medium text-[20.68px] leading-[31px] text-white">
          Reviews
        </button>
      </div>

      <div className="mt-[35px] w-full border rounded-[20px] border-solid border-[#B8B8B8] py-[42.5px] px-[49px]">
        <p className="font-semibold text-[22.68px] leading-[34px] text-[#003F62]">
          Customer reviews
        </p>
        <p className="text-[19.68px] leading-[30px] text-[#4F4F4F] mt-[17px] mb-[22px]">
          No reviews yet
        </p>
        <button className="bg-[#003F62] py-[5px] px-[28.5px] text-[19.68px] leading-[30px] underline text-white">
          Write a review
        </button>
      </div>

      <div className="mt-[64px] w-full">
        <h1 className="font-semibold text-[27.38px] leading-[41px] text-blue">
          Related products
        </h1>
        <div className="mt-[53px] w-full flex flex-wrap gap-[30px]">
          {relatedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
