import { useContext } from "react";
import InputSection from "./EditProfileChild/InputSection";
import { EditProfileContext } from "../../store/edit-profile-context";

export default function UsernameSection() {
  const editCtx = useContext(EditProfileContext);

  return (
    <div className="flex flex-col gap-2">
      <InputSection
        name="username"
        type="text"
        label="Change user name"
        placeholder="Change your user name..."
        maxLength={40}
      />
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          {editCtx.nameLength}/40
        </p>
      </div>
      <div className="hidden justify-end mr-[5px]" id="container-valid">
        <p id="check-valid" className="text-[0.8rem]"></p>
      </div>
    </div>
  );
}