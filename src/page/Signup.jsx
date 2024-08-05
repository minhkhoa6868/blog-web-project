import "../components/Form/FormStyle.css";
import HeaderForm from "../components/Form/FormChild/HeaderForm";
import NameInfo from "../components/Form/NameInfo";
import NicknameInfo from "../components/Form/UsernameInfo";
import PasswordInfo from "../components/Form/PasswordInfo";
import InformationSection from "../components/Form/FormChild/InformationSection";
import GenderInfo from "../components/Form/GenderInfo";
import FooterSignup from "../components/Form/FormChild/FooterSignup";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";

const Signup = ({ onSelect }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div
        className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border rounded-[20px] dark:bg-gray-700 dark:border-gray-500"
      >
        <HeaderForm header="Sign Up" message="Please fill in your information to create account" />
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
        <FooterSignup onSelect={onSelect} />
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Signup;