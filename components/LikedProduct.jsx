"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import add_to_cart from "@/public/add_to_cart_logo.png";
import Link from "next/link";
import { useCartContext } from "@/context/cart.context";
import { useFavouriteContext } from "@/context/favourite.context";

const LikedProduct = ({ product }) => {
  const { handleAddToCart } = useCartContext();
  const { deleteProduct } = useFavouriteContext();

  return (
    <div className="relative w-[308.83px] h-[313.75px] p-[10px] rounded-[19.6707px] border-[0.983537px] border-solid border-[#B6B6B6]">
      <Link href={`/category/${product?.id}`} passHref>
        <div className="w-full h-[55%]">
          <Image
            className="h-full w-full object-contain"
            src={product?.image}
            alt="Game pad"
          />
        </div>
        <p className="font-medium text-[17.0939px] leading-[24px] text-[#003F62]">
          {product?.title}
        </p>
        <p className="font-semibold text-[17.0939px] leading-[24px] text-[#4A4A4A] my-[4px]">
          ${product?.price}
        </p>
      </Link>
      <div className="flex gap-[10.82px]">
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-gold" />
        <AiFillStar className="text-[#ACACAC]" />
        <AiFillStar className="text-[#ACACAC]" />
      </div>

      <div className="mt-[8px] flex justify-between items-center">
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-[#87BCD9] rounded-[19.6707px] px-[10px] py-[10px] flex items-center gap-[39.84px]"
        >
          <p className="font-semibold text-[15.7366px] leading-6 text-[#272727]">
            Add to Cart
          </p>
          <Image src={add_to_cart} alt="add_to_cart_logo" />
        </button>

        <div
          onClick={() => deleteProduct(product.id)}
          className="w-[40px] h-[40px] bg-[#B3D4E5] grid place-items-center rounded-full cursor-pointer"
        >
          <FaTrash className="text-[22px] text-[red]" />
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
