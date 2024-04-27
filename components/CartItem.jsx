"use client";

import { useCartContext } from "@/context/cart.context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const CartItem = ({ item }) => {
  const { dispatch } = useCartContext();

  const [rate, setRate] = useState(item.rate);
  const handleChange = async (e) => {
    setRate(e.target.value);
  };

  useEffect(() => {
    if (rate < 1 || rate === "") {
      setRate(1);
    } else {
      dispatch({ type: "update", payload: { rate: rate, id: item.id } });
    }
  }, [rate]);

  return (
    <tr className="border-b-[1px] border-[#C3C3C3] py-[20px]">
      <td className="flex items-center gap-[10px] pl-[10px]">
        <Image src={item.image} width={70} height={70} alt="product_img" />
        <p className="font-semibold text-[20.68px] leading-[31px] text-[#003F62]">
          {item.title}
        </p>
      </td>
      <td>$ {item.price}</td>
      <td>
        <div className="bg-[#EEEEEE] w-fit py-[2.5px]">
          <button
            onClick={() => setRate((prev) => parseFloat(prev) - 1)}
            className="px-[10px] cursor-pointer"
          >
            -
          </button>
          <input
            value={rate}
            onChange={(e) => handleChange(e)}
            type="number"
            className="bg-transparent text-center border-x-[1px] border-[#BDBDBD] outline-none px-[10px] w-[63px] font-medium text-[18.1725px] leading-[27px] text-[#434343]"
          />
          <button
            onClick={() => setRate((prev) => parseFloat(prev) + 1)}
            className="px-[10px] cursor-pointer"
          >
            +
          </button>
        </div>
      </td>

      <td>$ {parseInt(item.amount)}</td>

      <td>
        <MdOutlineCancel
          onClick={() => dispatch({ type: "remove", payload: { id: item.id } })}
          className="cursor-pointer text-[25px] active:text-[22px]"
        />
      </td>
    </tr>
  );
};

export default CartItem;
