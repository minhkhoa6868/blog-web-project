import { useState } from "react";
import HeaderForm from "../components/Signup/HeaderForm";
import InformationSection from "../components/Signup/InformationSection";
import GenderInfo from "../components/Signup/GenderInfo";
import FooterForm from "../components/Signup/FooterForm";
import ThemeSwitcher from "../components/Navigation/NavComponents/ThemeSwitcher";
import '../components/Signup/FormStyle.css'

const Signup = () => {
  const [otherGender, isOtherGender] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div 
        className="flex flex-col gap-2 px-[15px] py-[20px] w-[400px] border transition-all ease duration-300 rounded-[20px]
        dark:bg-gray-700 dark:border-gray-500"
      >
        <HeaderForm />
        <hr className="border-t dark:border-gray-500" />
        <div className="flex justify-between">
          <InformationSection
            label="First Name"
            name="fname"
            type="text"
            length="w-[170px]"
            idLabel="fname-label"
            idInput="fname"
          />
          <InformationSection
            label="Last Name"
            name="lname"
            type="text"
            length="w-[170px]"
            idLabel="lname-label"
            idInput="lname"
          />
        </div>
        <InformationSection
          label="Nickname"
          name="nickname"
          type="text"
          length="w-full"
          idLabel="nickname-label"
          idInput="nickname"
        />
        <GenderInfo otherGender={otherGender} isOtherGender={isOtherGender} />
        <InformationSection
          label="Email"
          name="email"
          type="email"
          length="w-full"
          idLabel="email-label"
          idInput="email"
        />
        <InformationSection
          label="Password"
          name="password"
          type="password"
          length="w-full"
          idLabel="pw-label"
          idInput="pw"
        />
        <InformationSection
          label="Confirm Password"
          name="cpassword"
          type="password"
          length="w-full"
          idLabel="cpw-label"
          idInput="cpw"
        />
        <FooterForm />
      </div>
      <div className="absolute top-[8px] right-[25px]">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Signup;