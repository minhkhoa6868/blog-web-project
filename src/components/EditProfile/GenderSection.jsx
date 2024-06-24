export default function GenderSection({ changePrivateGender, privateGender }) {
  return (
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
  );
}
