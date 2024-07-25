import { useState, useEffect } from "react";
import InformationSection from "./SignupChild/InformationSection";
import checkValidNickName from "../../utils/checkValidNickName";

const NicknameInfo = () => {
  const [countNickName, setCountNickName] = useState(0);

  useEffect(() => {
    const nickname = document.getElementById("nickname");
    nickname.addEventListener("keyup", () => {
      setCountNickName(nickname.value.length);
    });
    checkValidNickName(nickname);
  });

  return (
    <div className="flex flex-col gap-2">
      <InformationSection
        label="Nickname"
        name="nickname"
        type="text"
        length="w-full"
        idLabel="nickname-label"
        idInput="nickname"
        maxLength={40}
      />
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-400 dark:text-gray-300">
          {countNickName}/40
        </p>
      </div>
      <div className="hidden justify-end mr-[5px]" id="container-valid">
        <p id="check-valid" className="text-[0.8rem]"></p>
      </div>
    </div>
  );
};

export default NicknameInfo;
