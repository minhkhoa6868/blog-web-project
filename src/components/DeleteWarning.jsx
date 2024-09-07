import { useSelector, useDispatch } from "react-redux";

import ActionButton from "./DeleteWarning/ActionButton";
import { blogActions } from "../store/blog-slice";

const DeleteWarning = ({ warning }) => {
  const dispatch = useDispatch();
  const showDelete = useSelector((state) => state.blog.showDelete);

  return (
    <div
      className={
        showDelete
          ? "flex justify-center items-center fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-50 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col items-center justify-center gap-3 bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500
        transition-all ease duration-300"
      >
        <p>{warning}</p>
        <div className="flex gap-4">
          <ActionButton status="Delete" handleClick={() => dispatch(blogActions.toggleDelete())} />
          <ActionButton status="Cancel" handleClick={() => dispatch(blogActions.toggleDelete())} />
        </div>
      </div>
    </div>
  );
};

export default DeleteWarning;
