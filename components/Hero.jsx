"use client";

import Image from "next/image";
import camera from "../public/canon.png";
import camera_sm from "../public/camera-sm.png";
import ProductsCollection from "./ProductsCollection";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const scrollContRef = useRef();
  const headerRef = useRef();

  const handleScrollLeft = () => {
    scrollContRef.current.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    scrollContRef.current.scrollLeft += 200;
  };

  const heroProducts = [
    { id: 2, title: "iPhone 12 Pro", img: camera_sm },
    { id: 5, title: "Apple MacBook Pro", img: camera_sm },
    { id: 10, title: "Canon EOS R6", img: camera_sm },
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

  const handleFirst = () => {
    setCurrent(0);
    setHeroProduct(heroProducts[0]);
  };
  const handleSecond = () => {
    setCurrent(1);
    setHeroProduct(heroProducts[1]);
  };
  const handleThird = () => {
    setCurrent(2);
    setHeroProduct(heroProducts[2]);
  };

  const [nums, setNums] = useState({
    phonesNum: 0,
    laptopsNum: 0,
    camerasNum: 0,
    headphonesNum: 0,
  });
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
      const returnedProducts = await res.json();

      await setNums({
        phonesNum: returnedProducts.filter(
          (product) => product.category === "Phones"
        ).length,
        laptopsNum: returnedProducts.filter(
          (product) => product.category === "Laptops"
        ).length,
        camerasNum: returnedProducts.filter(
          (product) => product.category === "Cameras"
        ).length,
        headphonesNum: returnedProducts.filter(
          (product) => product.category === "Headphones"
        ).length,
      });
    };

    getProducts();
  }, []);

  return (
    <div>
      <div className="w-full mt-[50px] flex justify-around">
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
              onClick={handleFirst}
              className={`${
                current === 1 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD cursor-pointer`}
            ></div>
            <div
              onClick={handleSecond}
              className={`${
                current === 2 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD cursor-pointer`}
            ></div>
            <div
              onClick={handleThird}
              className={`${
                current === 3 && "bg-gold"
              } w-4 h-4 rounded-full border border-solid border-[#ADADAD cursor-pointer`}
            ></div>
          </div>
        </div>

        <div className="relative">
          <Image src={camera} alt="Hero_product_image" priority={true} />
          <div className="absolute bottom-[52.39px] right-[-40px] w-[114.61px] h-[114.61px] rounded-full bg-gold flex justify-center items-center">
            <p className="font-semibold text-[21.573px] leading-8 text-white">
              Only $89
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-[109px] mt-[52px] relative">
        <div
          ref={scrollContRef}
          className="w-full overflow-x-hidden overflow-y-hidden scroll-smooth"
        >
          <div
            onClick={handleScrollLeft}
            className="w-[37px] h-[37px] absolute left-[90px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-gold"
          >
            <BsArrowLeft className="text-[#292D32]" />
          </div>
          <div className="w-fit flex gap-[50px]">
            <ProductsCollection
              img={camera_sm}
              title="Phones"
              items={nums.phonesNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Laptops"
              items={nums.laptopsNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Cameras"
              items={nums.camerasNum}
            />
            <ProductsCollection
              img={camera_sm}
              title="Headphones"
              items={nums.headphonesNum}
            />
          </div>
          <div
            onClick={handleScrollRight}
            className="w-[37px] h-[37px] absolute right-[90px] top-[50%] translate-y-[-50%] grid place-items-center rounded-full bg-gold"
          >
            <BsArrowRight className="text-[#292D32]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
