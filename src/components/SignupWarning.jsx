import { useDispatch } from "react-redux";

import RequireButton from "./Navigation/NavComponents/RequireButton";
import XIcon from "../icons/XIcon";
import { signupActions } from "../store/signup-slice";

const SignupWarning = () => {
    const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-50 z-[1000]">
      <div
        className="flex flex-col items-center justify-center relative gap-3 bg-white w-[270px]
        rounded-[20px] pb-[25px] pt-[40px] border dark:bg-gray-700 dark:border-gray-500
        transition-all ease duration-300"
      >
        <h1 className="font-semibold text-[1.1rem]">Join our community!</h1>
        <div className="flex gap-7">
          <RequireButton status="Signup" navigate="/signup" />
          <RequireButton status="Login" navigate="/login" />
        </div>
        <button
          className="absolute right-[20px] top-[20px] fill-black dark:fill-white"
          onClick={() => dispatch(signupActions.toggleShow())}
        >
          <XIcon height="14" width="14" />
        </button>
      </div>
    </div>
  );
};

export default SignupWarning;
