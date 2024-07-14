const AddCommentSection = ({ openComment }) => {
  return (
    <div className="flex items-center gap-5">
      <button>
        <img
          src="account.gif"
          alt="account-img"
          className="w-[40px] h-[40px] rounded-full object-cover border border-gray-300"
          loading="lazy"
        />
      </button>
      <button
        className="bg-gray-200 text-gray-400 w-[400px] h-[35px] rounded-2xl text-left 
            px-[15px] hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-400 
            transition-all ease-out duration-300 sm:w-[460px] md:w-[550px] xl:w-[600px] text-[15px]"
        onClick={openComment}
      >
        Add your comment here!
      </button>
    </div>
  );
};

export default AddCommentSection;