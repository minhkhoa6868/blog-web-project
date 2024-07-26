import { useState } from "react";
import InformationSection from "./FormChild/InformationSection";

const GenderInfo = () => {
  const [otherGender, isOtherGender] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-[10px]">
      <div className="flex items-center gap-3">
        <select
          name="gender"
          id="gender"
          className="w-fit py-[3px] px-[5px] outline-none border border-gray-300 dark:border-gray-500 bg-transparent
          rounded-[8px] text-[0.9rem]"
          onChange={(e) => {
            e.target.value === "other"
              ? isOtherGender(true)
              : isOtherGender(false);
          }}
        >
          <option value="">Choose your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="private">Private Infomation</option>
        </select>
      </div>
      {otherGender && (
        <InformationSection
          label="Your gender"
          name="gender"
          type="text"
          length="w-full"
          idLabel="gender-label"
          idInput="gender"
        />
      )}
    </div>
  );
};

export default GenderInfo;