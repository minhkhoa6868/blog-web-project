import { useState, useEffect } from "react";
import checkWordLength from "../utils/checkWordLength";
import checkValidNickName from "../utils/checkValidNickName";
import checkValidPassword from "../utils/checkValidPassword";
import checkValidAgain from "../utils/checkValidAgain";
import ImageSection from "../components/EditProfile/ImageSection";
import NicknameSection from "../components/EditProfile/NicknameSection";
import CaptionSection from "../components/EditProfile/CaptionSection";
import GenderSection from "../components/EditProfile/GenderSection";
import PasswordSection from "../components/EditProfile/PasswordSection";

export default function EditProfile() {
  const [changeBtn, isChangeBtn] = useState(false);
  const [privateGender, isPrivateGender] = useState(false);
  const [countNickName, setCountNickName] = useState(0);
  const [countCaption, setCountCaption] = useState(0);
  const [countPassword, setCountPassword] = useState(0);
  const [countPasswordAgain, setCountPasswordAgain] = useState(0);

  useEffect(() => {
    const nickname = document.getElementById("nickname");
    const caption = document.getElementById("caption");
    const password = document.getElementById("password");
    const passwordAgain = document.getElementById("password-again");
    checkWordLength(
      changeBtn,
      nickname,
      caption,
      password,
      passwordAgain,
      setCountNickName,
      setCountCaption,
      setCountPassword,
      setCountPasswordAgain
    );
    checkValidNickName(nickname);
    checkValidPassword(changeBtn);
    checkValidAgain(changeBtn);
  });

  function changePrivateGender(stateGender) {
    isPrivateGender(stateGender);
  }

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
      <NicknameSection countNickName={countNickName} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <CaptionSection countCaption={countCaption} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <GenderSection changePrivateGender={changePrivateGender} privateGender={privateGender} />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <PasswordSection 
        changeBtn={changeBtn}
        changeBtnHandler={changeBtnHandler}
        countPassword={countPassword}
        countPasswordAgain={countPasswordAgain} 
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
