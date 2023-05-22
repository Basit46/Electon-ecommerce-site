"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { CiLogin, CiLogout, CiUser } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useCartContext } from "@/context/cart.context";
import { useAuthContext } from "@/context/auth.context";
import { useFavouriteContext } from "@/context/favourite.context";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { cartItems, setInfo, setShowInfo } = useCartContext();
  const { user, handleSignOut } = useAuthContext();
  const { likedProducts } = useFavouriteContext();

  const [userFavourites, setUserFavourites] = useState();

  useEffect(() => {
    if (user) {
      const filtered = likedProducts.find(
        (product) => product.id === user.email
      );
      setUserFavourites(filtered?.likedProducts);
    }
    return;
  }, [likedProducts]);

  const signUserOut = async () => {
    await handleSignOut();

    router.push("/");
    setInfo("Sign Out Successful");
    setShowInfo(true);
  };

  return (
    <nav className="w-full bg-blue flex items-center justify-between py-[22px] px-[60px]">
      <div className="">
        <Link className="cursor-pointer " href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="links flex items-center gap-[31px] text-white">
        <Link className="hover:text-[orange]" href="/">
          Home
        </Link>

        <Link className="hover:text-[orange]" href="/category">
          Category
        </Link>

        {user && (
          <Link className="group" href="/favourites">
            <div className="flex items-center gap-[5px]">
              <AiOutlineHeart className="h-[24px] w-[24px] group-hover:text-[orange]" />
              <div className="bg-gold w-[20px] h-[20px] rounded-full flex justify-center items-center">
                <p className="text-[14px] font-bold group-hover:text-[white]">
                  {userFavourites?.length}
                </p>
              </div>
            </div>
          </Link>
        )}

        <Link className="group" href="/cart">
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[3px]">
              <AiOutlineShoppingCart className="h-[24px] w-[24px] group-hover:text-[orange]" />
              <div className="bg-gold w-[20px] h-[20px] rounded-full flex justify-center items-center">
                <p className="text-[14px] font-bold group-hover:text-white">
                  {cartItems?.length}
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-[21px] group-hover:text-[orange]">
              Cart
            </p>
          </div>
        </Link>

        {!user && (
          <Link className="hover:text-[orange]" href="/auth/signin">
            <div className="flex items-center gap-[3px]">
              <CiLogin className="h-[24px] w-[24px]" />
              <p className="text-[14px] leading-[21px]">Sign In</p>
            </div>
          </Link>
        )}

        {!user && (
          <Link className="hover:text-[orange]" href="/auth/signup">
            <div className="flex items-center gap-[3px]">
              <CiUser className="h-[24px] w-[24px]" />
              <p className="text-[14px] leading-[21px]">Sign Up</p>
            </div>
          </Link>
        )}

        {user && (
          <div
            onClick={signUserOut}
            className="flex items-center gap-[3px] cursor-pointer hover:text-[orange]"
          >
            <CiLogout className="h-[24px] w-[24px]" />
            <p className="text-[14px] leading-[21px]">Sign Out</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
