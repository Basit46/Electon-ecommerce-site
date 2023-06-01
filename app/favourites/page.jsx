"use client";

import LikedProduct from "@/components/LikedProduct";
import { useAuthContext } from "@/context/auth.context";
import { useFavouriteContext } from "@/context/favourite.context";
import React, { useEffect, useState } from "react";

const favourites = () => {
  const { likedProducts } = useFavouriteContext();
  const { user } = useAuthContext();

  const [userFavourites, setUserFavourites] = useState();

  useEffect(() => {
    const filtered = likedProducts.find((product) => product.id === user.email);
    setUserFavourites(filtered?.likedProducts);
  }, [likedProducts]);

  return (
    <div className="w-full px-[60px] pt-[30px] flex justify-center flex-wrap gap-[30px]">
      {userFavourites &&
        userFavourites.map((product, index) => (
          <LikedProduct key={index} product={product.product} />
        ))}
    </div>
  );
};

export default favourites;
