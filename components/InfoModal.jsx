"use client";

import { useCartContext } from "@/context/cart.context";
import React, { useEffect, useRef } from "react";

const InfoModal = () => {
  const { info, showInfo, setInfo, setShowInfo } = useCartContext();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setInfo("");
      setShowInfo(false);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [info]);

  return (
    <div
      className={`${
        showInfo ? "opacity-100" : "opacity-0"
      } fixed right-[20px] bottom-[20px] z-[100] min-w-[200px] bg-[#d8f5d8] border-[green] border-2 rounded-[10px] p-[10px]`}
    >
      {info}
    </div>
  );
};

export default InfoModal;
