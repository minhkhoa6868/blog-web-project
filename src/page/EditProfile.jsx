import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import checkValidUserName from "../utils/checkValidUserName";
import checkValidPassword from "../utils/checkValidPassword";
import checkValidAgain from "../utils/checkValidAgain";
import ImageSection from "../components/EditProfile/ImageSection";
import UsernameSection from "../components/EditProfile/UsernameSection";
import CaptionSection from "../components/EditProfile/CaptionSection";
import GenderSection from "../components/EditProfile/GenderSection";
import PasswordSection from "../components/EditProfile/PasswordSection";
import { EditProfileContext } from "../store/edit-profile-context";
import PasswordContextProvider from "../store/password-context";

export default function EditProfile() {
  const editCtx = useContext(EditProfileContext);

  useEffect(() => {
    const username = document.getElementById("username");
    const caption = document.getElementById("caption");
    const password = document.getElementById("pw");
    const passwordAgain = document.getElementById("cpw");

    const handleUsernameKeyup = () => {
      editCtx.handleNameLength(username.value.length);
      checkValidUserName(username);
    };
    const handleCaptionKeyup = () =>
      editCtx.handleCaptionLength(caption.value.length);
    const handlePasswordKeyup = () => checkValidPassword();
    const handleConfirmPasswordKeyup = () => checkValidAgain();

    username.addEventListener("keyup", handleUsernameKeyup);
    caption.addEventListener("keyup", handleCaptionKeyup);
    password.addEventListener("keyup", handlePasswordKeyup);
    passwordAgain.addEventListener("keyup", handleConfirmPasswordKeyup);

    return () => {
      username.removeEventListener("keyup", handleUsernameKeyup);
      caption.removeEventListener("keyup", handleCaptionKeyup);
      password.removeEventListener("keyup", handlePasswordKeyup);
      passwordAgain.removeEventListener("keyup", handleConfirmPasswordKeyup);
    };
  }, [editCtx.btn]);

  return (
    <div
      className="mx-auto my-[20px] py-[10px] px-[15px] border w-[400px] sm:w-[600px] 
      md:w-[750px] xl:w-[870px] transition-all ease duration-300 dark:bg-gray-700
      dark:border-gray-500 shadow-xl rounded-xl"
    >
      <ImageSection />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <UsernameSection />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <CaptionSection />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <GenderSection />
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <PasswordContextProvider>
        <PasswordSection />
      </PasswordContextProvider>
      <div className="flex justify-end mt-[15px]">
        <Link
          to="/account"
          className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
