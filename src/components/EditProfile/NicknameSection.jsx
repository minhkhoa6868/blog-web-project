export default function NicknameSection({countNickName}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="nickname" className="font-semibold">
        Change nickname
      </label>
      <input
        name="nickname"
        id="nickname"
        type="text"
        placeholder="Change your nickname..."
        maxLength={50}
        className="w-full h-fit pl-[10px] py-[4px] resize-none border border-gray-300 dark:border-gray-500
                outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
                rounded-[10px]"
      ></input>
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          {countNickName}/50
        </p>
      </div>
      <div className="hidden justify-end mr-[5px]" id="container-valid">
        <p id="check-valid" className="text-[0.8rem]"></p>
      </div>
    </div>
  );
}
