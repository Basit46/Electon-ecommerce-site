import Article from "./Article";

const Blog = () => {
  return (
    <div className="w-full px-[61px] mt-[101px]">
      <div className="flex justify-between">
        <p className="font-semibold text-[25.38px] leading-[38px] text-[#1B5A7D]">
          Latest news
        </p>
        <p className="font-medium text-[20.38px] leading-[31px] text-[#1B5A7D]">
          View all
        </p>
      </div>

      <div className="mt-[52px] w-full flex flex-wrap gap-[20px] justify-center ">
        <Article />
      </div>
    </div>
  );
};

export default Blog;
