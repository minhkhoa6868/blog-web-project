export default function CaptionSection({ countCaption }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="caption" className="font-semibold">
        Edit caption
      </label>
      <textarea
        name="caption"
        id="caption"
        placeholder="Change your caption..."
        maxLength={200}
        className="outline-none border border-gray-300 dark:border-gray-500 bg-transparent resize-none
            pl-[10px] pt-[5px] h-[170px] focus:border-gray-400 dark:focus:border-gray-400 transition-all ease duration-300
            rounded-[10px] sm:h-[140px] md:h-[100px] xl:h-[80px]"
      ></textarea>
      <div className="flex justify-end mr-[5px]">
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          {countCaption}/200
        </p>
      </div>
    </div>
  );
}
