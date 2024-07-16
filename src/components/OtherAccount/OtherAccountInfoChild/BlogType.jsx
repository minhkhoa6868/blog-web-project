export default function BlogType({ children, openBlogType }) {
    return (
        <button 
            onClick={openBlogType}
            className="flex justify-center items-center border w-fit h-[30px] rounded-xl
            border-blue-500 hover:bg-blue-500 hover:text-white shadow-lg transition 
            ease-out duration-300 dark:border-blue-400 dark:hover:bg-blue-400 px-[10px] hover:scale-110"
        >
            {children}
        </button>
    );
}