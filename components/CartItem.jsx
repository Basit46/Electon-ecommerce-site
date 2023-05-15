import pad from "@/public/pad.png";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

const CartItem = () => {
  return (
    <tr className="border-b-[1px] border-[#C3C3C3] py-[20px]">
      <td className="flex items-center gap-[10px] pl-[10px]">
        <Image src={pad} width={136} height={119} alt="product_img" />
        <p className="font-semibold text-[20.68px] leading-[31px] text-[#003F62]">
          Game pad
        </p>
      </td>
      <td>$ 11.70</td>
      <td>
        <div className="bg-[#EEEEEE] w-fit py-[2.5px]">
          <span className="px-[10px] cursor-pointer">-</span>
          <input
            type="number"
            className="bg-transparent border-x-[1px] border-[#BDBDBD] outline-none px-[10px] w-[63px] font-medium text-[18.1725px] leading-[27px] text-[#434343]"
          />
          <span className="px-[10px] cursor-pointer">+</span>
        </div>
      </td>

      <td>$ 11.70</td>

      <td>
        <MdOutlineCancel className="cursor-pointer text-[25px] active:text-[22px]" />
      </td>
    </tr>
  );
};

export default CartItem;
