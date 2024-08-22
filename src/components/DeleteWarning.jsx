import { useContext, memo } from "react";
import ActionButton from "./DeleteWarning/ActionButton";
import { BlogContext } from "../store/blog-context";

const DeleteWarning = memo(({ warning }) => {
  const blogCtx = useContext(BlogContext);

  return (
    <div
      className={
        blogCtx.delete
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
          <ActionButton status="Delete" handleClick={blogCtx.handleDelete} />
          <ActionButton status="Cancel" handleClick={blogCtx.handleDelete} />
        </div>
      </div>
    </div>
  );
});

export default DeleteWarning;
