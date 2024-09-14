const FollowAccount = ({ imageAccount, nameAccount }) => {
    return (
        <a 
            href="#" 
            className="flex items-center gap-2 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 
            p-[5px] rounded-[12px] transition-all ease duration-300 font-semibold text-[0.9rem]"
        >
            <img 
                src={imageAccount} 
                alt="image-account" 
                className="w-[50px] h-[50px] object-cover rounded-full bg-white border"
            />
            <p>{nameAccount}</p>
        </a>
    );
}

export default FollowAccount;