import ArrowIcon from "../../icons/ArrowIcon";

export default function PostButton() {
  return (
    <button
      className="p-[8px] rounded-full bg-gradient-to-tr from-blue-400 to-fuchsia-400 
            hover:from-blue-500 hover:to-fuchsia-500 fill-white"
    >
      <ArrowIcon height="15" width="15" />
    </button>
  );
}