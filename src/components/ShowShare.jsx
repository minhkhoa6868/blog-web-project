import { lazy, Suspense } from "react";
import XIcon from "../icons/XIcon";

const ShareAccount = lazy(() => import("./ShowShare/ShareAccount"));

const ShowShare = ({ showShare, openShare, shares }) => {
  return (
    <div
      className={
        showShare
          ? "flex justify-center items-center fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative items-center gap-3 w-[300px] h-[400px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500"
      >
        <h2 className="font-semibold">Shares</h2>
        <div className="flex flex-col w-full gap-3 overflow-scroll">
          {shares.map((share) => (
            <Suspense
              key={share.id}
              fallback={<div>Loading...</div>}
            >
              <ShareAccount
                key={share.id}
                imageAccount={share.imageAccount}
                nameAccount={share.nameAccount}
              />
            </Suspense>
          ))}
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={() => openShare([])}
        >
          <XIcon height="50" width="12" />
        </button>
      </div>
    </div>
  );
};

export default ShowShare;
