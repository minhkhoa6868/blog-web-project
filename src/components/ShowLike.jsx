import { lazy, Suspense, memo } from "react";
import XIcon from "../icons/XIcon";

const LikeAccount = lazy(() => import("./ShowLike/LikeAccount"));

const ShowLike = memo(({ showLike, openLike, likes }) => {
  return (
    <div
      className={
        showLike
          ? "flex justify-center items-center fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative items-center gap-3 w-[300px] h-[400px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500"
      >
        <h2 className="font-semibold">Likes</h2>
        <div className="flex flex-col w-full gap-3 overflow-scroll">
          {likes.map((like) => (
            <Suspense
              key={like.id}
              fallback={<div>Loading...</div>}
            >
              <LikeAccount
                key={like.id}
                imageAccount={like.imageAccount}
                nameAccount={like.nameAccount}
              />
            </Suspense>
          ))}
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={() => openLike([])}
        >
          <XIcon height="50" width="12" />
        </button>
      </div>
    </div>
  );
});

export default ShowLike;