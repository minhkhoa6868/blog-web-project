export default function AddBlog({ onSelect }) {
  return (
    <>
      <div
        className="flex mx-auto shadow-lg w-[500px] sm:w-[580px] md:w-[680px] xl:w-[720px] 
        h-[90px] mt-[20px] p-[20px] border rounded-xl items-center justify-between
        dark:bg-gray-700 dark:border-gray-500 transition-all ease duration-300"
      >
        <div className="flex items-center gap-5">
          <button onClick={() => onSelect('account')}>
            <img
              src="account.gif"
              alt="account-img"
              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
            />
          </button>
          <button
            className="bg-gray-200 text-gray-400 w-[320px] h-[40px] rounded-2xl 
            text-left px-[15px] hover:bg-gray-300 dark:hover:border-violet-400 
            dark:border-gray-400 dark:border-[3px] dark:bg-white transition-all 
            ease-out duration-300 sm:w-[380px] md:w-[500px] xl:w-[540px]"
          >
            Add a new blog here!
          </button>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="50"
            width="25"
            x="0px"
            y="0px"
            className="fill-violet-400"
          >
            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
          </svg>
        </button>
      </div>
    </>
  );
}
