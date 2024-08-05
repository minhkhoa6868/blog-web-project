import { Link } from "react-router-dom";
import InformationSection from "../components/Form/FormChild/InformationSection";
import HeaderForm from "../components/Form/FormChild/HeaderForm";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";
import BackwardIcon from "../icons/BackwardIcon";
import "../components/Form/FormStyle.css";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border rounded-[20px] dark:bg-gray-700 dark:border-gray-500">
        <HeaderForm header="Find your account" message="Please type your email to find your account" />
        <hr className="border-t dark:border-gray-500" />
        <InformationSection
          label="Email"
          name="email"
          type="email"
          length="w-full"
          idLabel="email-label"
          idInput="email"
        />
        <Link to="/verify">
          <button
            className="py-[5px] mt-[5px] rounded-md bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white hover:from-blue-500 
          hover:to-fuchsia-500 w-full"
          >
            Check
          </button>
        </Link>
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
      <div className="absolute top-[8px] left-[25px]">
        <Link to="/login">
          <button
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-200 fill-gray-600
            dark:fill-gray-400 dark:hover:bg-gray-700 transition-all ease duration-300"
          >
            <BackwardIcon height="17" width="17" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;