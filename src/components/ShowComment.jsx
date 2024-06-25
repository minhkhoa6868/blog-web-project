import CommentSection from "./ShowComment/CommentSection";

export default function ShowComment({ showComment, openComment }) {
  return (
    <div
      className={
        showComment
          ? "flex justify-center items-center fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-50 z-[1000]"
          : "hidden"
      }
    >
      <div
        className="flex flex-col relative justify-center items-center gap-3 w-[400px] h-[450px] bg-white
        rounded-[20px] p-[20px] border dark:bg-gray-700 dark:border-gray-500 sm:w-[470px] md:w-[550px]
        xl:w-[620px] transition-all ease duration-300"
      >
        <h2 className="font-semibold">Comments</h2>
        <div className="flex flex-col gap-4 overflow-scroll w-full">
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor. fjd mn kdjhs  dkfhisd vdkjf"
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor. fjd mn kdjhs  dkfhisd vdkjf"
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
          <CommentSection
            imageAccountParent="/account.gif"
            nameAccountParent="David"
            commentParent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
            imageAccountChild="/account.gif"
            nameAccountChild="David"
            commentChild="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dolor."
          />
        </div>
        <div className="flex items-center justify-between w-full border-t dark:border-gray-500 pt-[10px]">
          <button onClick={() => onSelect("account")}>
            <img
              src="account.gif"
              alt="account-img"
              className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300"
            />
          </button>
          <textarea
            placeholder="Write your comment"
            className="w-[270px] h-fit border border-gray-300 rounded-[15px] outline-none
            resize-none pl-[10px] pt-[5px] focus:border-gray-400 transition-all ease duration-300
            sm:w-[330px] md:w-[420px] xl:w-[480px] bg-transparent dark:border-gray-500
            dark:focus:border-gray-400"
          />
          <button 
            className="p-[8px] rounded-full bg-gradient-to-tr from-blue-400 to-fuchsia-400 
            hover:from-blue-500 hover:to-fuchsia-500 fill-white"
          >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512"
                width='15'
                height='15'
            >
              <path d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z" />
            </svg>
          </button>
        </div>
        <button
          className="absolute right-[25px] top-[8px] fill-black dark:fill-white"
          onClick={openComment}
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
