import FollowAccount from "./FollowAccount";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="50"
            width="12"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Follow;