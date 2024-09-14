import { useState, useCallback } from "react";

export default function ButtonRequest() {
  const [isFollow, setIsFollow] = useState(false);
  const status = isFollow ? "Following" : "Follow";

  const handleFollow = useCallback(() => {
    setIsFollow((prevState) => !prevState);
  });

  return (
    <>
      <button
        onClick={handleFollow}
        className={
          status === "Follow"
            ? "flex justify-center items-center bg-gray-100 dark:bg-gray-500 border-gray-200 py-1 rounded-[50px] w-[180px] h-[40px] hover:bg-gray-500 hover:text-white transition ease-out duration-300 shadow-lg text-sm dark:border-0 dark:hover:bg-gray-400 hover:scale-110"
            : status === "Following"
            ? "flex justify-center items-center py-1 rounded-[50px] w-[180px] h-[40px] bg-gradient-to-tr text-white from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 transition ease-out duration-300 shadow-lg text-sm hover:scale-110 dark:border-0"
            : ""
        }
      >
        {status}
      </button>
    </>
  );
}
