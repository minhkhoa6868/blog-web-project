import "../components/Form/FormStyle.css";
import InformationSection from "../components/Form/FormChild/InformationSection";
import PasswordLogin from "../components/Form/PasswordLogin";
import FooterLogin from "../components/Form/FormChild/FooterLogin";
import EmailOption from "../components/Form/EmailOption";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div
        className="flex flex-col gap-2 px-[15px] py-[20px] w-[380px] border transition-all ease duration-300 rounded-[20px]
        dark:bg-gray-700 dark:border-gray-500"
      >
        <h1 className="text-center font-semibold text-[1.4rem]">Sign Up</h1>
        <InformationSection
          label="Email"
          name="email"
          type="email"
          length="w-full"
          idLabel="email-login-label"
          idInput="email-login"
        />
        <PasswordLogin />
        <FooterLogin />
        <div className="relative my-[10px]">
          <hr className="border-t dark:border-gray-500" />
          <div className="absolute left-40 bottom-[-10px] w-[30px] bg-white">
            <p className="text-gray-300 text-center text-[0.9rem]">Or</p>
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
