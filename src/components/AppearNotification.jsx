import './appearNotification.css'

export default function AppearNotification() {
    return (
        <div className="px-3 pb-3">
            <a 
                href="#" 
                className="flex justify-between hover:bg-gray-200 hover:text-black px-3 py-2 border border-transparent
                rounded-lg transition-all ease-out duration-300 h-[100px]"
                id="status-notification"
            >
                <div className="flex gap-4">
                    <img 
                        id="image-account" 
                        src="account.jpg" 
                        alt="account"
                        className="rounded-full border border-gray-300 w-[80px] h-[80px] object-cover" 
                    />
                    <p 
                        id="status" 
                        className="w-[250px] md:w-[300px] lg:w-[350px] text-wrap 
                        translate-y-[15px] md:translate-y-[20px] lg:translate-y-[25px]"
                    >
                        Khoa have uploaded a blog! Check out here!
                    </p>
                </div>
                <button 
                    className="flex justify-center items-center rounded-full hover:bg-gray-300 hover:fill-black 
                    w-[40px] h-[40px] transition ease duration-300 translate-y-[25px] text-[30px] 
                    dark:fill-white dark:hover:fill-black"
                    id="status-checked"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        height="22"
                        width="22"
                    >
                        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                    </svg>
                </button>
            </a>
        </div>
    );
}