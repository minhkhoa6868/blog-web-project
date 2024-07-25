import InputSection from "./EditProfileChild/InputSection";

export default function NicknameSection({ countNickName }) {
  return (
    <div className="flex flex-col gap-2">
      <InputSection
        name="nickname"
        type="text"
        label="Change nickname"
        placeholder="Change your nickname..."
        maxLength={40}
      />
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          {countNickName}/40
        </p>
      </div>
      <div className="hidden justify-end mr-[5px]" id="container-valid">
        <p id="check-valid" className="text-[0.8rem]"></p>
      </div>
    </div>
  );
}