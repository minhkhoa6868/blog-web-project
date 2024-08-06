import { useState, useEffect } from "react";
import InformationSection from "./FormChild/InformationSection";
import checkValidPassword from "../../utils/checkValidPassword";
import checkValidAgain from "../../utils/checkValidAgain";
import OpenEyeIcon from "../../icons/OpenEyeIcon";
import CloseEyeIcon from "../../icons/CloseEyeIcon";

const PasswordInfo = () => {
  const [open, isOpen] = useState(false);
  const [openAgain, isOpenAgain] = useState(false);

  function changeOpen() {
    isOpen((prevState) => !prevState);
  }

  function changeOpenAgain() {
    isOpenAgain((prevState) => !prevState);
  }

  function showPassword() {
    const password = document.getElementById("pw");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    changeOpen();
  }

  function showAgain() {
    const passwordAgain = document.getElementById("cpw");
    if (passwordAgain.type === "password") {
      passwordAgain.type = "text";
    } else {
      passwordAgain.type = "password";
    }
    changeOpenAgain();
  }

  useEffect(() => {
    const password = document.getElementById("pw");
    const passwordAgain = document.getElementById("cpw");

    password.addEventListener('keyup', checkValidPassword);
    passwordAgain.addEventListener('keyup', checkValidAgain);

    // clean up side effect
    return () => {
      password.removeEventListener('keyup', checkValidPassword);
      passwordAgain.removeEventListener('keyup', checkValidAgain);
    };
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <InformationSection
            label="Password"
            name="password"
            type="password"
            length="w-full"
            idLabel="pw-label"
            idInput="pw"
            maxLength={25}
          />
          <button
            onClick={showPassword}
            className="absolute right-2 top-[15px] p-[5px] rounded-full bg-gradient-to-tr from-blue-400 
                to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 fill-white z-[1]"
          >
            {open ? (
              <OpenEyeIcon width="14" height="14" />
            ) : (
              <CloseEyeIcon width="14" height="14" />
            )}
          </button>
        </div>
        <div className="text-end mr-[5px] text-[0.8rem]">
          <p className="text-gray-400" id="pass-over-8">
            over 8 charaters and less than 25 charaters
          </p>
          <p className="text-gray-400" id="number">
            at least one number
          </p>
          <p className="text-gray-400" id="special-char">
            at least one special charaters
          </p>
          <p className="text-gray-400" id="uppercase">
            at least one uppercase
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <InformationSection
            label="Confirm Password"
            name="confirm"
            type="password"
            length="w-full"
            idLabel="cpw-label"
            idInput="cpw"
            maxLength={25}
          />
          <button
            onClick={showAgain}
            className="absolute right-2 top-[15px] p-[5px] rounded-full bg-gradient-to-tr from-blue-400 
            to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 fill-white z-[1]"
          >
            {openAgain ? (
              <OpenEyeIcon width="14" height="14" />
            ) : (
              <CloseEyeIcon width="14" height="14" />
            )}
          </button>
        </div>
        <p className="text-end mr-[5px] text-[0.8rem]" id="valid-again"></p>
      </div>
    </>
  );
};

export default PasswordInfo;