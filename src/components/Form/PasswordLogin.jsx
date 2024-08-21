import { useContext } from "react";
import InformationSection from "./FormChild/InformationSection";
import { PasswordContext } from "../../store/password-context";
import OpenEyeIcon from "../../icons/OpenEyeIcon";
import CloseEyeIcon from "../../icons/CloseEyeIcon";

const PasswordLogin = () => {
  const passwordCtx = useContext(PasswordContext);

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
        onClick={() => {
          const password = document.getElementById("pw-login");
          passwordCtx.showPassword(password);
        }}
        className="absolute right-2 top-[15px] p-[5px] rounded-full bg-gradient-to-tr from-blue-400 
                to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 fill-white z-[1]"
      >
        {passwordCtx.openPassword ? (
          <OpenEyeIcon width="14" height="14" />
        ) : (
          <CloseEyeIcon width="14" height="14" />
        )}
      </button>
    </div>
  );
};

export default PasswordLogin;
