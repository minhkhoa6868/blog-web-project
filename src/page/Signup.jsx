import "../components/Signup/FormStyle.css";
import HeaderForm from "../components/Signup/SignupChild/HeaderForm";
import NameInfo from "../components/Signup/NameInfo";
import NicknameInfo from "../components/Signup/NicknameInfo";
import PasswordInfo from "../components/Signup/PasswordInfo";
import InformationSection from "../components/Signup/SignupChild/InformationSection";
import GenderInfo from "../components/Signup/GenderInfo";
import FooterForm from "../components/Signup/SignupChild/FooterForm";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div
        className="flex flex-col gap-2 px-[15px] py-[20px] w-[400px] border transition-all ease duration-300 rounded-[20px]
        dark:bg-gray-700 dark:border-gray-500"
      >
        <HeaderForm />
        <hr className="border-t dark:border-gray-500" />
        <NameInfo />
        <NicknameInfo />
        <GenderInfo />
        <InformationSection
          label="Email"
          name="email"
          type="email"
          length="w-full"
          idLabel="email-label"
          idInput="email"
        />
        <PasswordInfo />
        <FooterForm />
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Signup;