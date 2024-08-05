import "./typeStyle.css"

export default function ChooseVisibility() {
  return (
    <select
      name="visibility"
      id="type-visibility"
      className="h-[40px] w-[90px] sm:w-[130px] border px-[5px] border-gray-300 rounded-[10px] focus:outline-none
      text-[0.9rem] bg-transparent cursor-pointer dark:border-gray-500"
    >
      <option value="">Visibility</option>
      <option value="Public">Public</option>
      <option value="Private">Private</option>
    </select>
  );
}
