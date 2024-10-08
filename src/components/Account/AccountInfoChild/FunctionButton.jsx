import { Link } from "react-router-dom";

export default function FunctionButton({ status, navigate }) {
  return (
    <>
      <Link
        to={navigate}
        className="flex justify-center items-center border py-1 rounded-[50px] w-[160px] 
        sm:w-[180px] h-[40px] hover:bg-gray-500 hover:text-white transition ease-out duration-300 
        shadow-lg text-sm dark:hover:bg-gray-300 dark:hover:text-black hover:scale-110"
      >
        {status}
      </Link>
    </>
  );
}
