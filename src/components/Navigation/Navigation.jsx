import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function Navigation({ isSelected, onSelect }) {
  const hoverNotActive =
    "hidden transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg dark:fill-gray-400 dark:hover:fill-gray-600 mid:flex";
  const hoverActive =
    "hidden transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full mid:flex";
  const hoverAccountNotActive =
    "hidden transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg mid:flex";
  const hoverAccountActive =
    "hidden transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full opacity-100 mid:flex";
  const hoverMenuNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg dark:fill-gray-400 dark:hover:fill-gray-600 mid:hidden";
  const hoverMenuActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full mid:hidden";

  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <nav
        className="py-2 flex justify-between w-full h-fit bg-transparent backdrop-blur-[12px] shadow-lg
                top-0 sticky z-[1]"
      >
        <button className="px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 64 64"
          >
            <linearGradient
              id="gPWjxlu7lDdzZroFFR7GZa_79041_gr1"
              x1="32"
              x2="32"
              y1="9.083"
              y2="54.676"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#1a6dff"></stop>
              <stop offset="1" stop-color="#c822ff"></stop>
            </linearGradient>
            <path
              fill="url(#gPWjxlu7lDdzZroFFR7GZa_79041_gr1)"
              d="M50,55H14c-2.757,0-5-2.243-5-5V14c0-2.757,2.243-5,5-5h36c2.757,0,5,2.243,5,5v36 C55,52.757,52.757,55,50,55z M14,11c-1.654,0-3,1.346-3,3v36c0,1.654,1.346,3,3,3h36c1.654,0,3-1.346,3-3V14c0-1.654-1.346-3-3-3H14 z"
            ></path>
            <linearGradient
              id="gPWjxlu7lDdzZroFFR7GZb_79041_gr2"
              x1="32"
              x2="32"
              y1="19"
              y2="45"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#6dc7ff"></stop>
              <stop offset="1" stop-color="#e6abff"></stop>
            </linearGradient>
            <path
              fill="url(#gPWjxlu7lDdzZroFFR7GZb_79041_gr2)"
              d="M43,29h-1c-1.11,0-2-0.9-2-2c0-4.4-3.6-8-8-8h-5c-4.4,0-8,3.6-8,8v10c0,4.4,3.6,8,8,8h10 c4.4,0,8-3.6,8-8v-6C45,29.9,44.1,29,43,29z M27,25h5c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2C25,25.9,25.9,25,27,25z M37,39H27c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2C39,38.1,38.1,39,37,39z"
            ></path>
          </svg>
        </button>
        <div className="flex gap-1 sm:gap-3 md:gap-5 xl:gap-8 text-sm transition-all ease duration-300">
          <button
            className={isSelected === "home" ? hoverActive : hoverNotActive}
            onClick={() => onSelect("home")}
            key="home"
          >
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="25"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
            </svg>
          </button>
          <button
            className={isSelected === "friend" ? hoverActive : hoverNotActive}
            onClick={() => onSelect("friend")}
            key="friend"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height="50"
              width="25"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
          </button>
          <button
            className={
              isSelected === "notification" ? hoverActive : hoverNotActive
            }
            onClick={() => onSelect("notification")}
            key="notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="50"
              width="20"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
          </button>
          <button
            className={
              isSelected === "account"
                ? hoverAccountActive
                : hoverAccountNotActive
            }
            onClick={() => onSelect("account")}
            key="account"
            id="account"
          >
            <img
              src="account.gif"
              alt="account"
              id="account-img"
              className="rounded-full w-[40px] h-[40px] object-cover m-auto border-[3px] border-gray-400"
            />
          </button>
          <button
            className={isOpen ? hoverMenuActive : hoverMenuNotActive}
            onClick={() => {
              handleOpen();
            }}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="50"
                width="20"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height="50"
                width="16"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            )}
          </button>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] h-[36px] pl-[8px] md:w-[260px] xl:w-[320px]
                        focus:border-violet-400 hover:border-violet-400 outline-none 
                        rounded-xl border-[3px] border-gray-300 dark:border-gray-400 
                        dark:text-black dark:focus:border-violet-400 dark:hover:border-violet-400
                        translate-y-[8px] transition-all ease duration-200"
            />
            <button
              className="flex absolute transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 
                        w-[28px] h-[28px] justify-center rounded-full translate-y-[-24px] translate-x-[165px]
                        md:translate-x-[225px] xl:translate-x-[285px]"
              onClick={() => onSelect("search")}
              key="account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="50"
                width="13"
                className="translate-y-[-11px]"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-6">
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
}
