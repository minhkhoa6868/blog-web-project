import PostButton from "../PostButton";
import Action from "./Action";

export default function Reply({ handleClick }) {
  return (
    <div className="flex items-start gap-2">
      <img
        src="./account.gif"
        alt="image-account"
        className="w-[45px] h-[45px] rounded-full object-cover border border-gray-300 bg-white"
      />
      <div className="text-[0.9rem] w-5/6">
        <textarea
          type="text"
          placeholder="Add comment"
          className="border pl-[10px] pt-[5px] outline-none border-gray-300 focus:border-gray-400 rounded-xl
          w-full h-fit resize-none bg-transparent dark:border-gray-500 dark:focus:border-gray-400
          transition-all ease duration-300"
        />
        <div className="flex gap-2">
          <PostButton />
          <Action type="Cancel" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
