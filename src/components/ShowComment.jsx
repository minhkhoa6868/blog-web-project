import ParentComment from "./ShowComment/ParentComment";
import PostButton from "./ShowComment/PostButton";

export default function ShowComment({ showComment, openComment, comments }) {
  return (
    <div
      className={
        showComment
          ? "flex justify-center items-center fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-50 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative items-center gap-2 w-full h-[500px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500
        transition-all ease duration-300 md:w-[742px]"
      >
        <div className="flex flex-col gap-3 h-[390px] w-full">
          <h2 className="font-semibold text-center">Comments</h2>
          {comments.length > 0 && (
            <div className="flex flex-col gap-4 overflow-scroll">
              {comments[0].items?.length > 0 &&
                comments[0].items.map((cmt) => (
                  <ParentComment key={cmt.id} comment={cmt} />
                ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between w-full border-t dark:border-gray-500 pt-[10px]">
          <button onClick={() => onSelect("account")}>
            <img
              id="image-account"
              src="account.gif"
              alt="account-img"
              className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300"
            />
          </button>
          <textarea
            id="comment"
            placeholder="Write your comment"
            className="w-4/5 h-fit border border-gray-300 rounded-[15px] outline-none
            resize-none pl-[10px] pt-[5px] focus:border-gray-400 transition-all ease duration-300
            bg-transparent dark:border-gray-500 dark:focus:border-gray-400"
          />
          <PostButton />
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={() => openComment([])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="50"
            width="12"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
