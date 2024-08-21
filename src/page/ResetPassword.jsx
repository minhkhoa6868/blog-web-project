import { Link } from "react-router-dom";
import HeaderForm from "../components/Form/FormChild/HeaderForm";
import PasswordInfo from "../components/Form/PasswordInfo";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";
import PasswordContextProvider from "../store/password-context";
import BackwardIcon from "../icons/BackwardIcon";
import "../components/Form/FormStyle.css";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border rounded-[20px] dark:bg-gray-700 dark:border-gray-500">
        <HeaderForm header="Reset Password" message="Please enter your new password" />
        <hr className="border-t dark:border-gray-500" />
        <PasswordContextProvider>
          <PasswordInfo />
        </PasswordContextProvider>
        <Link to="/login">
          <button
            className="py-[5px] mt-[5px] rounded-md bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white hover:from-blue-500 
          hover:to-fuchsia-500 w-full"
          >
            Submit
          </button>
        </Link>
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
      <div className="absolute top-[8px] left-[25px]">
        <Link to="/identify">
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

export default ResetPassword;