export default function AccountFriend({ image, name, status }) {
    return (
        <div 
            className="flex flex-col text-center gap-2 border rounded-xl pb-[10px] shadow-md
            dark:bg-gray-700 dark:border-none"
        >
            <button>
                <img 
                    src={image} 
                    alt="image account" 
                    className="w-[220px] rounded-t-xl"
                />
            </button>
            <button className="font-semibold">{name}</button>
            <button 
                className="mx-[10px] py-[5px] rounded-lg bg-gradient-to-tr text-white
                from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500
                dark:border-none transition-all ease duration-300"
            >
                {status}
            </button>
            <button 
                className="mx-[10px] py-[5px] rounded-lg bg-gray-200 hover:bg-gray-300 
                dark:bg-gray-400 dark:hover:bg-gray-500 transition-all ease duration-300"
            >
                Delete
            </button>
        </div>
    );
}