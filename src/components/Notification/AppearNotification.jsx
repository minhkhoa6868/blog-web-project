import { useContext } from "react";
import XIcon from "../../icons/XIcon";
import { BlogContext } from "../../store/blog-context";

export default function AppearNotification({ noti }) {
  const blogCtx = useContext(BlogContext);

  return (
    <div className="px-3 pb-3">
      <a
        className="flex justify-between items-center hover:bg-gray-200 px-3 py-2 border border-transparent
        rounded-lg transition-all ease-out duration-300 h-[100px] dark:bg-gray-700 dark:hover:bg-gray-600"
        id="status-notification"
      >
        <div className="flex items-center gap-4 w-full">
          <img
            id="image-account"
            src={noti.imageAccount}
            alt="account"
            className="rounded-full border border-gray-300 w-[75px] h-[75px] object-cover bg-white"
            loading="lazy"
          />
          <p id="status" className="w-3/4 text-wrap text-[14px] sm:text-[1rem]">
            {`${noti.nameAccount} ${noti.title}`}
          </p>
        </div>
        <button
          onClick={blogCtx.handleDelete}
          className="flex justify-center items-center rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 w-[26px] h-[26px] 
          sm:w-[30px] sm:h-[30px] transition ease duration-300 dark:fill-white"
          id="status-checked"
        >
          <XIcon height="12" width="12" />
        </button>
      </a>
    </div>
  );
}
