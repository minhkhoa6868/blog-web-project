import { useState, useEffect } from "react";
import InformationSection from "./FormChild/InformationSection";
import checkValidUserName from "../../utils/checkValidUserName";

const UsernameInfo = () => {
  const [countUserName, setCountUserName] = useState(0);

  useEffect(() => {
    const username = document.getElementById("username");

    username.addEventListener("keyup", () => {
      setCountUserName(username.value.length);
    });

    checkValidUserName(username);
    
    return () => {
      username.removeEventListener("keyup", () => {
        setCountUserName(username.value.length);
      });
    };
  });

  return (
    <div className="flex flex-col gap-2">
      <InformationSection
        label="User Name"
        name="username"
        type="text"
        length="w-full"
        idLabel="username-label"
        idInput="username"
        maxLength={40}
      />
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-400 dark:text-gray-300">
          {countUserName}/40
        </p>
      </div>
      <div className="hidden justify-end mr-[5px]" id="container-valid">
        <p id="check-valid" className="text-[0.8rem]"></p>
      </div>
    </div>
  );
};

export default UsernameInfo;
