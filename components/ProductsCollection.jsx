import Image from "next/image";

const ProductsCollection = ({ img, title, items }) => {
  return (
    <div className="w-[381.63px] h-[147px] border rounded-[20px] border-solid border-[#A5A5A5] flex items-center gap-[43.35px] px-[14.04px]">
      <div>
        <Image src={img} alt="prodCollection" />
      </div>

      <div>
        <h1>{title}</h1>
        <p>({items} items)</p>
      </div>
    </div>
  );
};

export default ProductsCollection;
