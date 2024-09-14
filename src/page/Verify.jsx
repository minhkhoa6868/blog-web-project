import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import HeaderForm from "../components/Form/FormChild/HeaderForm";
import VerifyNumber from "../components/Form/VerifyNumber";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";
import BackwardIcon from "../icons/BackwardIcon";
import "../components/Form/FormStyle.css";

const Verify = () => {
  const [countdown, setCountdown] = useState(60);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    handleCountdown();
  }, []);

  const handleCountdown = useCallback(() => {
    var count = 60;
    var timer = setInterval(() => {
      if (count <= 0) {
        setIsSend(true);
        clearInterval(timer);
        setCountdown(60);
      } else {
        count = count - 1;
        setCountdown(count);
      }
    }, 1000);
  });

  const handleSend = useCallback(() => {
    setIsSend((prevState) => !prevState);
    handleCountdown();
  });

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border rounded-[20px] dark:bg-gray-700 dark:border-gray-500">
        <HeaderForm header="Verify" message="Please enter verify number" />
        <hr className="border-t dark:border-gray-500" />
        <div className="flex justify-center gap-[10px] my-[15px]">
          <VerifyNumber />
          <VerifyNumber />
          <VerifyNumber />
          <VerifyNumber />
          <VerifyNumber />
          <VerifyNumber />
        </div>
        <button
          className={`flex justify-center gap-1 text-[0.9rem] text-gray-400 ${isSend ? 'cursor-pointer' : 'cursor-no-drop'}`}
          onClick={handleSend}
          disabled={!isSend}
        >
          <p
            id="send"
            className={`${isSend ? "text-blue-500 hover:text-blue-600" : ""}`}
          >
            Send verify number again
          </p>
          <p id="countdown" className={`${isSend ? "hidden" : "block"}`}>
            ({countdown})
          </p>
        </button>
        <Link to="/login/resetpassword">
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
        <Link to="/login/identify">
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

export default Verify;