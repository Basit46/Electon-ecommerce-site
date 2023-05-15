import { IoIosCheckmark } from "react-icons/io";

const CategoryList = ({ category, itemsNo }) => {
  return (
    <div className="w-full flex items-center mt-[12px] ">
      <div className="mr-[10px] w-[30px] h-[30px] rounded-lg bg-[#B3D4E5] hover:bg-[#3F3F3F] cursor-pointer grid place-items-center">
        <IoIosCheckmark className="text-[#B3D4E5] h-[20px] w-[20.5px]" />
      </div>
      <h1 className="text-[16.09px] leading-6 text-[#222222]">{category}</h1>
      <p className="flex-1 text-right text-[16.09px] leading-6 text-[#222222]">
        {itemsNo}
      </p>
    </div>
  );
};

export default CategoryList;
