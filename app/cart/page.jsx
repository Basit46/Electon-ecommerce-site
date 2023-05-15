import CartItem from "@/components/CartItem";
import React from "react";

const page = () => {
  return (
    <div className="px-[60px] pt-[33px] w-full flex gap-[21px]">
      <div className="flex-1">
        <table className="w-full">
          <thead>
            <tr className="bg-lightblue h-[56px]">
              <th className="pl-[10px]">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>

        <div className="mt-[31px] flex items-center gap-[30px]">
          <button className="mt-[41px] w-[295px] bg-gold  rounded-[32.4242px] font-semibold text-[22.697px] leading-[34px] text-white py-[19.5px]">
            Continue shopping
          </button>
          <button className="mt-[41px] w-[223px] border border-[#C33131] hover:bg-[#C33131] hover:text-white rounded-[32.4242px] font-semibold text-[22.697px] leading-[34px] text-[#C33131] py-[19.5px]">
            Clear cart
          </button>
        </div>
      </div>

      <div className="w-[27%]">
        <div className="bg-lightblue w-full h-[56px] grid place-items-center font-medium text-[20.68px] leading-[31px] text-[#232323]">
          Cart total
        </div>
        <div className="py-[23px] px-[35.5px]">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-[19.68px] leading-[30px] text-[#232323]">
              Subtotal
            </h1>
            <p className="font-medium text-[22.68px] leading-[34px] text-[#232323]">
              $23.20
            </p>
          </div>
          <div className="w-full h-[0px] border border-solid border-[#AFAFAF] my-[22px]" />
          <div className="w-full p-[10px] h-[54px] border rounded-[20px] border-solid border-[#DFDFDF] flex items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-[80%] rounded-[20px] h-full outline-none text-[16.68px] leading-[25px] text-[#232323] pr-[10px]"
            />
            <p className="font-medium text-[14.68px] leading-[22px] text-[#003F62] cursor-pointer">
              Apply
            </p>
          </div>
          <div className="w-full h-[0px] border border-solid border-[#AFAFAF] my-[22px]" />
          <div className="flex justify-between items-center">
            <h1 className="text-[16.68px] leading-[25px] text-[#232323]">
              Total amount
            </h1>
            <p className="text-[18.68px] leading-7 text-right text-[#232323]">
              $23.20
            </p>
          </div>
          <button className="mt-[41px] w-full bg-gold rounded-[32.4242px] font-semibold text-[20.7px] leading-[31px] text-white py-[10.5px]">
            Proceed to ckeckout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
