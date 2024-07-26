import XIcon from "../icons/XIcon";

const DeleteButton = ({ deletePost }) => {
  return (
    <button
      className="flex justify-center items-center rounded-full hover:bg-gray-300 hover:fill-black dark:hover:bg-gray-500 
      w-[35px] h-[35px] transition ease duration-300 text-[30px] dark:fill-white"
      id="status-checked"
      onClick={deletePost}
    >
      <XIcon height="14" width="14" />
    </button>
  );
};

export default DeleteButton;