import { useState, useEffect } from "react";

export default function EditProfile() {
  const [changeBtn, isChangeBtn] = useState(false);
  const [imageAccount, setImageAccount] = useState("account.gif");
  const [privateGender, isPrivateGender] = useState(false);
  const [countNickName, setCountNickName] = useState(0);
  const [countCaption, setCountCaption] = useState(0);
  const [countPassword, setCountPassword] = useState(0);
  const [countPasswordAgain, setCountPasswordAgain] = useState(0);
  

  useEffect(() => {
    const nickname = document.getElementById("nickname");
    const caption = document.getElementById("caption");
    const password = document.getElementById("password");
    const passwordAgain = document.getElementById("password-again");
    nickname.addEventListener("keyup", () => {
      setCountNickName(nickname.value.length);
    });
    caption.addEventListener("keyup", () => {
      setCountCaption(caption.value.length);
    });
    if (changeBtn) {
      password.addEventListener("keyup", () => {
        setCountPassword(password.value.length);
      });
      passwordAgain.addEventListener("keyup", () => {
        setCountPasswordAgain(passwordAgain.value.length);
      });
    }
  });

  function changeBtnHandler() {
    isChangeBtn((prevState) => !prevState);
  }

  function changeImageAccount(e) {
    setImageAccount(URL.createObjectURL(e.target.files[0]));
  }

  function changePrivateGender(stateGender) {
    isPrivateGender(stateGender);
  }

  return (
    <div
      className="mx-auto my-[20px] py-[10px] px-[15px] border w-[500px] sm:w-[620px] 
        md:w-[750px] xl:w-[870px] transition-all ease duration-300 dark:bg-gray-700
        dark:border-gray-500 shadow-xl rounded-xl"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src={imageAccount}
          alt="image-account"
          className="w-[120px] h-[120px] rounded-[50%] object-cover border-[6px] border-gray-300
          dark:border-gray-500"
        />
        <div
          className="w-fit cursor-pointer px-[20px] py-[5px] rounded-[20px] bg-gradient-to-tr 
            from-blue-400 to-fuchsia-400 text-white text-[0.9rem]
            hover:from-blue-500 hover:to-fuchsia-500"
        >
          <input
            type="file"
            id="image-change"
            onChange={changeImageAccount}
            className="hidden"
          />
          <label
            htmlFor="image-change"
            className="cursor-pointer font-semibold"
          >
            Change Account Image
          </label>
        </div>
      </div>
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <div className="flex flex-col gap-2">
        <label htmlFor="nickname" className="font-semibold">
          Change nickname
        </label>
        <input
          name="nickname"
          id="nickname"
          type="text"
          placeholder="Change your nickname..."
          maxLength={100}
          className="w-full h-fit pl-[10px] py-[4px] resize-none border border-gray-300 dark:border-gray-500
                outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
                rounded-[10px]"
        ></input>
        <div className="flex justify-end mr-[5px]">
          <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
            {countNickName}/100
          </p>
        </div>
      </div>
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <div className="flex flex-col gap-2">
        <label htmlFor="caption" className="font-semibold">
          Edit caption
        </label>
        <textarea
          name="caption"
          id="caption"
          placeholder="Change your caption..."
          maxLength={1000}
          className="outline-none border border-gray-300 dark:border-gray-500 bg-transparent resize-none
            pl-[10px] pt-[5px] h-[220px] focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
            rounded-[10px] sm:h-[200px] md:h-[170px] xl:h-[130px]"
        ></textarea>
        <div className="flex justify-end mr-[5px]">
          <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
            {countCaption}/1000
          </p>
        </div>
      </div>
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      <div className="flex flex-col gap-2">
        <label htmlFor="gender" className="font-semibold">
          Change gender
        </label>
        <select
          name="gender"
          id="gender"
          className="w-fit py-[5px] px-[5px] outline-none border border-gray-300 dark:border-gray-500 bg-transparent
            rounded-[8px]"
          onChange={(e) =>
            e.target.value == "Others"
              ? changePrivateGender(true)
              : changePrivateGender(false)
          }
        >
          <option value="">Choose your gender</option>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
          <option value="Others">Others</option>
          <option value="Private">Private information</option>
        </select>
        {privateGender && (
          <input
            name="otherGender"
            id="other-gender"
            type="text"
            placeholder="Type your gender..."
            className="w-full h-fit pl-[10px] py-[4px] resize-none border border-gray-300 dark:border-gray-500
                outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
                rounded-[10px]"
          ></input>
        )}
      </div>
      <hr className="h-px my-[15px] border-0 bg-gray-400" />
      {!changeBtn && (
        <button
          onClick={changeBtnHandler}
          className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold text-[0.9rem]"
        >
          Change Password
        </button>
      )}
      {changeBtn && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Change password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your new password..."
              maxLength={25}
              className="w-full h-fit pl-[10px] py-[4px] resize-none border border-gray-300 dark:border-gray-500
              outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
              rounded-[10px]"
            />
            <div className="flex justify-end mr-[5px]">
              <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
                {countPassword}/25
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password-again" className="font-semibold">
              Type again
            </label>
            <input
              name="password-again"
              id="password-again"
              type="password"
              placeholder="Type again..."
              maxLength={25}
              className="w-full h-fit pl-[10px] py-[4px] resize-none border border-gray-300 dark:border-gray-500
              outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
              rounded-[10px]"
            />
            <div className="flex justify-end mr-[5px]">
              <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
                {countPasswordAgain}/25
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end mt-[15px]">
        <button
          className="px-[20px] py-[5px] bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-white
          hover:from-blue-500 hover:to-fuchsia-500 rounded-[20px] font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
}
