import { useContext } from "react";
import XIcon from "../icons/XIcon";
import { BlogContext } from "../store/blog-context";


const DeleteButton = () => {
  const blogCtx = useContext(BlogContext);

  return (
    <button
      className="flex justify-center items-center rounded-full hover:bg-gray-300 hover:fill-black dark:hover:bg-gray-500 
      w-[35px] h-[35px] transition ease duration-300 text-[30px] dark:fill-white"
      id="status-checked"
      onClick={blogCtx.handleDelete}
    >
      <XIcon height="14" width="14" />
    </button>
  );
};

export default DeleteButton;