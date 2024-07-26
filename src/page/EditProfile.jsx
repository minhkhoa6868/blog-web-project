import { useState, useEffect } from "react";
import checkValidUserName from "../utils/checkValidUserName";
import checkValidPassword from "../utils/checkValidPassword";
import checkValidAgain from "../utils/checkValidAgain";
import ImageSection from "../components/EditProfile/ImageSection";
import UsernameSection from "../components/EditProfile/UsernameSection";
import CaptionSection from "../components/EditProfile/CaptionSection";
import GenderSection from "../components/EditProfile/GenderSection";
import PasswordSection from "../components/EditProfile/PasswordSection";

export default function EditProfile() {
  const [changeBtn, isChangeBtn] = useState(false);
  const [otherGender, isOtherGender] = useState(false);
  const [countUserName, setCountUserName] = useState(0);
  const [countCaption, setCountCaption] = useState(0);

  useEffect(() => {
    const username = document.getElementById("username");
    const caption = document.getElementById("caption");
    username.addEventListener("keyup", () => {
      setCountUserName(username.value.length);
    });
    caption.addEventListener("keyup", () => {
      setCountCaption(caption.value.length);
    });
    checkValidUserName(username);
    console.log(changeBtn);
    if (changeBtn){
      checkValidPassword();
      checkValidAgain();
    }
  });

  function changeBtnHandler() {
    isChangeBtn((prevState) => !prevState);
  }

  return (
    <div
      className="mx-auto my-[20px] py-[10px] px-[15px] border w-[400px] sm:w-[600px] 
      md:w-[750px] xl:w-[870px] transition-all ease duration-300 dark:bg-gray-700
      dark:border-gray-500 shadow-xl rounded-xl"
    >
      <ImageSection />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <UsernameSection countUserName={countUserName} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <CaptionSection countCaption={countCaption} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <GenderSection isOtherGender={isOtherGender} otherGender={otherGender} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <PasswordSection 
        changeBtn={changeBtn}
        changeBtnHandler={changeBtnHandler}
      />
      <div className="flex justify-end mt-[15px]">
        <button
          className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
}
