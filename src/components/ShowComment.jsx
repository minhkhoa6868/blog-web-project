import { lazy, Suspense } from "react";
import PostButton from "./ShowComment/PostButton";
import XIcon from "../icons/XIcon";

const ParentComment = lazy(() =>
  import("./ShowComment/ParentComment"));

export default function ShowComment({ showComment, openComment, comments }) {
  return (
    <div
      className={
        showComment
          ? "flex justify-center items-center fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative items-center gap-2 w-[400px] h-[430px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500
        transition-all ease duration-300 sm:w-[550px] md:w-[680px] sm:h-[500px]"
      >
        <div className="flex flex-col gap-3 h-[320px] sm:h-[390px] w-full">
          <h2 className="font-semibold text-center">Comments</h2>
          <div className="flex flex-col gap-4 overflow-scroll">
            {comments.length > 0 &&
              comments.map((cmt) => (
                <Suspense
                  key={cmt.id}
                  fallback={<div>Loading...</div>}
                >
                  <ParentComment key={cmt.id} comment={cmt} />
                </Suspense>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-t dark:border-gray-500 pt-[10px]">
          <button onClick={() => onSelect("account")}>
            <img
              id="image-account"
              src="account.gif"
              alt="account-img"
              className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300"
            />
          </button>
          <textarea
            id="comment"
            placeholder="Write your comment"
            className="w-3/4 h-fit sm:w-5/6 border border-gray-300 rounded-[15px] outline-none
            resize-none pl-[10px] pt-[5px] focus:border-gray-400 transition-all ease duration-300
            bg-transparent dark:border-gray-500 dark:focus:border-gray-400"
          />
          <PostButton />
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={() => openComment([])}
        >
          <XIcon height="50" width="12" />
        </button>
      </div>
    </div>
  );
}
