export default function GenderSection({ isOtherGender, otherGender }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="gender" className="font-semibold">
        Change gender
      </label>
      <select
        name="gender"
        id="gender"
        className="w-fit py-[3px] px-[5px] outline-none border border-gray-300 dark:border-gray-500 bg-transparent
            rounded-[8px]"
        onChange={(e) =>
          e.target.value == "others"
            ? isOtherGender(true)
            : isOtherGender(false)
        }
      >
        <option value="">Choose your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
        <option value="private">Private information</option>
      </select>
      {otherGender && (
        <input
          name="otherGender"
          id="other-gender"
          type="text"
          placeholder="Type your gender..."
          className="w-full h-fit pl-[10px] py-[4px] border border-gray-300 dark:border-gray-500
                outline-none bg-transparent focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
                rounded-[10px]"
        ></input>
      )}
    </div>
  );
}
