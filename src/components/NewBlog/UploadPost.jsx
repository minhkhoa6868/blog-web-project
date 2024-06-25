export default function UploadPost({ countPost }) {
  return (
    <div className="w-full">
      <textarea
        name="post"
        id="post"
        placeholder="Enter your content..."
        maxLength={300}
        className="w-full h-[320px] p-[10px] border border-gray-300 focus:border-gray-400 rounded-[10px] 
            outline-none dark:border-gray-500 dark:focus:border-gray-400 transition-all ease duration-300
            bg-transparent resize-none sm:h-[400px]"
      ></textarea>
      <p className="text-end mr-[5px] text-[0.8rem] text-gray-600 dark:text-gray-300">
        {countPost}/300
      </p>
    </div>
  );
}
