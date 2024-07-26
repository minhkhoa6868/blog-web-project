import { useState } from "react";
import InputSection from "./EditProfileChild/InputSection";
import OpenEyeIcon from "../../icons/OpenEyeIcon";
import CloseEyeIcon from "../../icons/CloseEyeIcon";

export default function PasswordSection({ changeBtn, changeBtnHandler }) {
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

  return (
    <>
      {!changeBtn ? (
        <button
          onClick={changeBtnHandler}
          className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold text-[0.9rem]"
        >
          Change Password
        </button>
      ) : (
        <button
          onClick={changeBtnHandler}
          className="px-[20px] py-[5px] mb-[10px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold text-[0.9rem]"
        >
          Unchange Password
        </button>
      )}
      <div className={changeBtn ? "flex flex-col gap-2" : "hidden"}>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <div className="flex flex-col gap-2">
              <InputSection
                name="pw"
                type="password"
                label="Change password"
                placeholder="Enter your new password.."
                maxLength={25}
              />
            </div>
            <button
              onClick={showPassword}
              className="absolute right-2 top-[40px] p-[5px] rounded-full bg-gradient-to-tr from-blue-400 
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
            <div className="flex flex-col gap-2">
              <InputSection
                name="cpw"
                type="password"
                label="Confirm password"
                placeholder="Enter confirm password.."
                maxLength={25}
              />
            </div>
            <button
              onClick={showAgain}
              className="absolute right-2 top-[40px] p-[5px] rounded-full bg-gradient-to-tr from-blue-400 
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
      </div>
    </>
  );
}
