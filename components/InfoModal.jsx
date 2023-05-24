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
      } fixed right-[20px] top-[100px] z-[100] min-w-[200px] bg-[green] text-white text-[1.3rem] font-medium rounded-[10px] p-[14px]`}
    >
      {info}
    </div>
  );
};

export default InfoModal;
