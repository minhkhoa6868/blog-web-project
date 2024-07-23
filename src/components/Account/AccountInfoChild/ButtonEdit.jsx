import { Link } from "react-router-dom";

export default function ButtonEdit() {
  return (
    <>
      <Link
        to="/editProfile"
        className="flex justify-center items-center border border-gray-200 py-1 rounded-[50px] 
            w-[180px] h-[40px] hover:bg-gray-500 hover:text-white transition ease-out duration-300 
            shadow-lg text-sm dark:hover:bg-gray-300 dark:hover:text-black hover:scale-110"
      >
        Edit Profile
      </Link>
    </>
  );
}
