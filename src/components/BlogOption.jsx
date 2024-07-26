import XIcon from "../icons/XIcon";
import EditIcon from "../icons/EditIcon";

const BlogOption = ({ showOption }) => {
  return (
    <ul
      className={
        showOption
          ? "absolute border translate-x-[-120px] bg-gray-200 w-[150px] text-[0.9rem] mt-2 shadow-xl rounded-[7px] border-gray-300 transition-all ease duration-300 dark:bg-gray-500 dark:border-gray-400 dark:fill-white"
          : "hidden"
      }
    >
      <li className="hover:bg-gray-300 dark:hover:bg-gray-400 px-[10px] py-[5px] rounded-t-[7px] transition-all ease duration-30">
        <button className="flex items-center gap-2 w-full text-start">
          <EditIcon height="14" width="14" />
          <p>Edit Post</p>
        </button>
      </li>
      <li className="hover:bg-gray-300 dark:hover:bg-gray-400 px-[10px] py-[5px] rounded-b-[7px] transition-all ease duration-300">
        <button className="flex items-center gap-2 w-full text-start">
          <XIcon height="11" width="11" />
          <p>Delete Post</p>
        </button>
      </li>
    </ul>
  );
};

export default BlogOption;
