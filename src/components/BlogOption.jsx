const BlogOption = ({ showOption }) => {
  return (
    <ul
      className={
        showOption
          ? "absolute border translate-x-[-120px] bg-gray-200 w-[150px] text-[0.9rem] mt-2 shadow-xl rounded-[7px] border-gray-300 transition-all ease duration-300 dark:bg-gray-500 dark:border-gray-400 dark:fill-white"
          : "hidden"
      }
    >
      <li className="hover:bg-gray-300 dark:hover:bg-gray-400 px-[10px] py-[5px] rounded-t-[7px] transition-all ease duration-30">
        <button className="flex items-center gap-2 w-full text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="15"
            width="15"
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
          </svg>
          <p>Edit Post</p>
        </button>
      </li>
      <li className="hover:bg-gray-300 dark:hover:bg-gray-400 px-[10px] py-[5px] rounded-b-[7px] transition-all ease duration-300">
        <button className="flex items-center gap-2 w-full text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="11"
            width="11"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
          <p>Delete Post</p>
        </button>
      </li>
    </ul>
  );
};

export default BlogOption;
