import Image from "next/image";
import Link from "next/link";

const ProductsCollection = ({ img, title, items }) => {
  return (
    <Link
      href="/category"
      className="w-[381.63px] h-[147px] border rounded-[20px] border-solid border-[#A5A5A5] flex items-center gap-[43.35px] px-[14.04px]"
    >
      <div className="w-[50%] h-[80%]">
        <Image
          className="h-full w-full object-contain"
          src={img}
          alt="prodCollection"
        />
      </div>

      <div>
        <h1>{title}</h1>
        <p>({items} items)</p>
      </div>
    </Link>
  );
};

export default ProductsCollection;
