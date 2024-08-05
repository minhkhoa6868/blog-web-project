import "../components/Form/FormStyle.css";
import InformationSection from "../components/Form/FormChild/InformationSection";
import PasswordLogin from "../components/Form/PasswordLogin";
import FooterLogin from "../components/Form/FormChild/FooterLogin";
import EmailOption from "../components/Form/EmailOption";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";

const Login = ({ onSelect }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div
        className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border rounded-[20px] dark:bg-gray-700 dark:border-gray-500"
      >
        <h1 className="text-center font-semibold text-[1.4rem]">Sign Up</h1>
        <InformationSection
          label="User Name"
          name="username"
          type="text"
          length="w-full"
          idLabel="username-label"
          idInput="username"
        />
        <PasswordLogin />
        <FooterLogin onSelect={onSelect} />
        <div className="relative my-[10px]">
          <hr className="border-t dark:border-gray-500" />
          <div className="absolute left-40 bottom-[-10px] w-[30px] bg-white dark:bg-gray-700">
            <p className="text-gray-300 dark:text-gray-500 text-center text-[0.9rem]">Or</p>
          </div>
        </div>
        <EmailOption />
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Login;
