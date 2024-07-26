import FollowAccount from "./FollowAccount";
import XIcon from "../../icons/XIcon";

const Follow = ({ follow, status, showFollow, openFollow }) => {
  return (
    <div
      className={
        showFollow
          ? "flex justify-center items-center fixed inset-0 bg-black bg-opacity-60 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col items-center relative gap-3 w-[300px] h-[400px] bg-white rounded-[20px] p-[20px]
        border dark:bg-gray-700 dark:border-gray-500 transition-all ease duration-300 overflow-scroll"
      >
        <h2 className="font-semibold">{status}</h2>
        <div className="flex flex-col w-full gap-3 overflow-scroll">
          {follow.map((follow) => (
            <FollowAccount
              key={follow.id}
              imageAccount={follow.imageAccount}
              nameAccount={follow.nameAccount}
            />
          ))}
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={openFollow}
        >
          <XIcon height="50" width="12" />
        </button>
      </div>
    </div>
  );
};

export default Follow;