import { Link } from "react-router-dom";

export default function ButtonNewBlog() {
  return (
    <>
      <Link
        to="/newBlog"
        className="border border-gray-200 py-1 rounded-[50px] w-[180px] h-[40px] flex justify-center 
            items-center hover:bg-gray-500 hover:text-white transition ease-out duration-300 
            shadow-lg text-sm dark:hover:bg-gray-200 dark:hover:text-black hover:scale-110"
      >
        Add New Blog
      </Link>
    </>
  );
}
