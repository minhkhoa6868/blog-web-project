export default function Statistic({ number, content, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-center items-center bg-gray-100 h-[80px]
      rounded-[25px] w-[80px] text-sm text-gray-500 dark:text-gray-100 dark:bg-gray-500
      shadow-lg"
    >
      <p>{number}</p>
      <p>{content}</p>
    </button>
  );
}
