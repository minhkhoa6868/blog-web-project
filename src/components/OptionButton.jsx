import SpreadIcon from "../icons/SpreadIcon";

const OptionButton = ({ openOption }) => {
  return (
    <button
      className="flex justify-center items-center rounded-full hover:bg-gray-300 hover:fill-black dark:hover:bg-gray-500  
      w-[35px] h-[35px] transition ease duration-300 text-[30px] dark:fill-white"
      id="status-checked"
      onClick={openOption}
    >
      <SpreadIcon height='20' width='20' />
    </button>
  );
};

export default OptionButton;