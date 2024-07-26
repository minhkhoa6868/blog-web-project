import { lazy, Suspense } from "react";
import XIcon from "../../icons/XIcon";

const AccountRequest = lazy(() => import("./FriendRequest/AccountRequest"));

const FriendRequest = ({
  showRequest,
  handleClick,
  statusFriends,
  status,
  statusAction,
  deleteAccount,
}) => {
  return (
    <div
      className={
        showRequest
          ? "flex justify-center items-center fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative items-center gap-3 w-[350px] h-[400px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500"
      >
        <h2 className="font-semibold">{status}</h2>
        <div className="flex flex-col w-full gap-3 overflow-scroll">
          {statusFriends.map((child) => (
            <Suspense key={child.id} fallback={<div>Loading...</div>}>
              <AccountRequest
                key={child.id}
                imageAccount={child.imageAccount}
                nameAccount={child.nameAccount}
                statusAction={statusAction}
                deleteAccount={deleteAccount}
              />
            </Suspense>
          ))}
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={handleClick}
        >
          <XIcon height="50" width="12" />
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
