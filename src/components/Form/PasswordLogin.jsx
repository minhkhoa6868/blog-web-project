import { useState } from "react";
import InformationSection from "./FormChild/InformationSection";
import OpenEyeIcon from "../../icons/OpenEyeIcon";
import CloseEyeIcon from "../../icons/CloseEyeIcon";

const PasswordLogin = () => {
  const [open, isOpen] = useState(false);

  function changeOpen() {
    isOpen((prevState) => !prevState);
  }

  function showPassword() {
    const password = document.getElementById("pw-login");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    changeOpen();
  }

  return (
    <div className="relative">
      <InformationSection
        label="Password"
        name="password"
        type="password"
        length="w-full"
        idLabel="pw-login-label"
        idInput="pw-login"
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
  );
};

export default PasswordLogin;
