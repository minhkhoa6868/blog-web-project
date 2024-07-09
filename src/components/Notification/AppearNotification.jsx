import "./appearNotification.css";

export default function AppearNotification({ noti, handleClick }) {
  return (
    <div className="px-3 pb-3">
      <a
        href="#"
        className="flex justify-between items-center hover:bg-gray-200 hover:text-black px-3 py-2 border border-transparent
                rounded-lg transition-all ease-out duration-300 h-[100px] dark:bg-gray-700 dark:hover:bg-gray-400"
        id="status-notification"
      >
        <div className="flex items-center gap-4 w-full">
          <img
            id="image-account"
            src={noti.imageAccount}
            alt="account"
            className="rounded-full border border-gray-300 w-[80px] h-[80px] object-cover bg-white"
          />
          <p id="status" className="w-5/6 text-wrap">
            {noti.type === "accept"
              ? `${noti.nameAccount} ${noti.title1} ${noti.nameAccount} ${noti.title2}`
              : `${noti.nameAccount} ${noti.title}`
            }
          </p>
        </div>
        <button
          onClick={handleClick}
          className="flex justify-center items-center rounded-full hover:bg-gray-300 hover:fill-black 
                    w-[30px] h-[30px] transition ease duration-300 text-[30px] 
                    dark:fill-white dark:hover:fill-black"
          id="status-checked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="13"
            width="12"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </a>
    </div>
  );
}
