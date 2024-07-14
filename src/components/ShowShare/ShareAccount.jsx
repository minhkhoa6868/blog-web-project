const ShareAccount = ({ imageAccount, nameAccount }) => {
    return (
        <button 
            className="flex items-center gap-2 p-[5px] hover:bg-gray-200 hover:text-black dark:bg-gray-600 dark:hover:bg-gray-400
            rounded-[12px] transition-all ease duration-300 font-semibold text-[0.9rem] w-full"
        >
            <img 
                src={imageAccount} 
                alt="image-account" 
                className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300 bg-white"
                loading="lazy"
            />
            <p>{nameAccount}</p>
        </button>
    );
}

export default ShareAccount;