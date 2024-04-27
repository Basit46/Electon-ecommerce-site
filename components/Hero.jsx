"use client";

import Image from "next/image";
import camera from "../public/canon.png";
import phone from "@/public/products/phone2.png";
import laptop from "@/public/products/laptop1.png";
import headphone from "@/public/products/headphone1.png";
import camera_sm from "../public/camera-sm.png";
import ProductsCollection from "./ProductsCollection";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const scrollContRef = useRef();
  const headerRef = useRef();

  const handleScrollLeft = () => {
    scrollContRef.current.scrollLeft -= 550;
  };

  const handleScrollRight = () => {
    scrollContRef.current.scrollLeft += 550;
  };

  const heroProducts = [
    { id: 2, title: "iPhone 12 Pro", img: phone },
    { id: 5, title: "Apple MacBook Pro", img: laptop },
    { id: 10, title: "Canon EOS R6", img: camera },
  ];
  const [heroProduct, setHeroProduct] = useState(heroProducts[0]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (current > 2) {
        setCurrent(0);
        setHeroProduct(heroProducts[0]);
        setCurrent((prev) => prev + 1);
      } else {
        setHeroProduct(heroProducts[current]);
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => {
      clearInterval(intervalId); //
    };
  }, [current]);

  return (
    <div>
      <div className="w-full mt-[50px] flex justify-center">
        <div className="w-[40%]">
          <h1
            ref={headerRef}
            className="font-bold text-[43px] leading-[64px] text-[#1B5A7D]"
          >
            {heroProduct?.title}
          </h1>
          <div className="mt-[19px] mb-[49px] flex items-center gap-[21px]">
            <Link
              href={`/category/${heroProduct?.id}`}
              className="py-[18.5px] px-[32px] bg-gold rounded-[20px] font-semibold text-base leading-6 text-white"
            >
              Shop now
            </Link>
            <Link
              href="/category"
              className="py-[18.5px] px-[32px] rounded-[20px] border border-solid border-[#316887] font-semibold text-base leading-6 text-[#316887]"
            >
              View more
            </Link>
          </div>
          <div className="flex gap-[8px] ml-[120px]">
            <div
              className={`${
                current === 1 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD]`}
            ></div>
            <div
              className={`${
                current === 2 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD]`}
            ></div>
            <div
              className={`${
                current === 3 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD]`}
            ></div>
          </div>
        </div>

        <div className="w-[40%] h-[350px]">
          <Image
            className="w-full h-full object-contain"
            src={heroProduct?.img}
            alt="Hero_product_image"
            priority={true}
          />
        </div>
      </div>

      {/* Products */}
      <div className="px-[109px] mt-[52px] relative">
        <div
          ref={scrollContRef}
          className="w-full overflow-x-hidden overflow-y-hidden scroll-smooth"
        >
          <button
            onClick={handleScrollLeft}
            className="w-[37px] h-[37px] absolute left-[90px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-gold"
          >
            <BsArrowLeft className="text-[#292D32]" />
          </button>
          <div className="w-fit flex gap-[50px]">
            <ProductsCollection img={phone} title="Phones" items={4} />
            <ProductsCollection img={laptop} title="Laptops" items={3} />
            <ProductsCollection img={camera_sm} title="Cameras" items={4} />
            <ProductsCollection img={headphone} title="Headphones" items={5} />
          </div>
          <button
            onClick={handleScrollRight}
            className="w-[37px] h-[37px] absolute right-[90px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-gold"
          >
            <BsArrowRight className="text-[#292D32]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
