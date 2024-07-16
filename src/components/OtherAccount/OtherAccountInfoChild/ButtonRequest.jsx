export default function ButtonRequest({ status, handleFollow }) {
  return (
    <>
      <button
        onClick={handleFollow}
        className={
          status === "Follow"
            ? "flex justify-center items-center border border-gray-200 py-1 rounded-[50px] w-[180px] h-[40px] hover:bg-gray-500 hover:text-white transition ease-out duration-300 shadow-lg text-sm dark:hover:bg-gray-200 dark:hover:text-black hover:scale-110"
            : status === "Following"
            ? "flex justify-center items-center border py-1 rounded-[50px] w-[180px] h-[40px] bg-gradient-to-tr text-white from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 transition ease-out duration-300 shadow-lg text-sm hover:scale-110"
            : ""
        }
      >
        {status}
      </button>
    </>
  );
}
