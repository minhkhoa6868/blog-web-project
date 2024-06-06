import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import HomeSection from "./NavComponents/HomeSection.jsx";
import FiendSection from "./NavComponents/FriendSection.jsx";
import NotificationSection from "./NavComponents/NotificationSection.jsx";
import AccountSection from "./NavComponents/AccountSection.jsx";

export default function Navigation({ isSelected, onSelect }) {
  const hoverNotActive =
    "hidden transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg dark:fill-gray-400 dark:hover:fill-gray-600 mid:flex";
  const hoverActive =
    "hidden transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500 mid:flex";
  const hoverAccountNotActive =
    "hidden transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg mid:flex";
  const hoverAccountActive =
    "hidden transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full opacity-100 hover:from-blue-500 hover:to-fuchsia-500 mid:flex";
  const hoverMenuNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-20 justify-center rounded-lg dark:fill-gray-400 dark:hover:fill-gray-600 mid:hidden cursor-pointer";
  const hoverMenuActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-20 justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500 mid:hidden cursor-pointer";
  const hoverNotActiveResponsive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-full justify-center rounded-lg dark:fill-gray-400 dark:hover:fill-gray-600 mid:hidden";
  const hoverActiveResponsive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-full justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500 mid:hidden";
  const hoverAccountNotActiveResponsive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-full justify-center rounded-lg mid:hidden";
  const hoverAccountActiveResponsive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-full justify-center rounded-lg bottom-full opacity-100 hover:from-blue-500 hover:to-fuchsia-500 mid:hidden";

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
        <Link
          to="/"
          className="px-6"
          onClick={() => onSelect("home")}
          key="home"
        >
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
              <stop offset="0" stopColor="#1a6dff"></stop>
              <stop offset="1" stopColor="#c822ff"></stop>
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
              <stop offset="0" stopColor="#6dc7ff"></stop>
              <stop offset="1" stopColor="#e6abff"></stop>
            </linearGradient>
            <path
              fill="url(#gPWjxlu7lDdzZroFFR7GZb_79041_gr2)"
              d="M43,29h-1c-1.11,0-2-0.9-2-2c0-4.4-3.6-8-8-8h-5c-4.4,0-8,3.6-8,8v10c0,4.4,3.6,8,8,8h10 c4.4,0,8-3.6,8-8v-6C45,29.9,44.1,29,43,29z M27,25h5c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2C25,25.9,25.9,25,27,25z M37,39H27c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2C39,38.1,38.1,39,37,39z"
            ></path>
          </svg>
        </Link>
        <div className="flex gap-3 sm:gap-4 md:gap-5 xl:gap-8 text-sm transition-all ease duration-300">
          <HomeSection
            isSelected={isSelected}
            onSelect={onSelect}
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <FiendSection
            isSelected={isSelected}
            onSelect={onSelect}
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <NotificationSection
            isSelected={isSelected}
            onSelect={onSelect}
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <AccountSection
            isSelected={isSelected}
            onSelect={onSelect}
            hoverAccountActive={hoverAccountActive}
            hoverAccountNotActive={hoverAccountNotActive}
          />

          <details className="dropdown">
            <summary
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
                  width="18"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  height="50"
                  width="14"
                >
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
              )}
            </summary>
            <ul
              id="dropdown"
              className="flex flex-col absolute border p-2 mt-4 shadow menu dropdown-content z-[1] rounded-[10px] w-[300px] md:w-[360px]
              mid:hidden gap-2 bg-white dark:bg-gray-700 dark:border-gray-500 transition-all ease duration-300"
            >
              <li>
                <HomeSection
                  isSelected={isSelected}
                  onSelect={onSelect}
                  hoverActive={hoverActiveResponsive}
                  hoverNotActive={hoverNotActiveResponsive}
                />
              </li>
              <li>
                <FiendSection
                  isSelected={isSelected}
                  onSelect={onSelect}
                  hoverActive={hoverActiveResponsive}
                  hoverNotActive={hoverNotActiveResponsive}
                />
              </li>
              <li>
                <NotificationSection
                  isSelected={isSelected}
                  onSelect={onSelect}
                  hoverActive={hoverActiveResponsive}
                  hoverNotActive={hoverNotActiveResponsive}
                />
              </li>
              <li>
                <AccountSection
                  isSelected={isSelected}
                  onSelect={onSelect}
                  hoverAccountActive={hoverAccountActiveResponsive}
                  hoverAccountNotActive={hoverAccountNotActiveResponsive}
                />
              </li>
            </ul>
          </details>
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
              key="search"
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
      <Outlet />
    </>
  );
}
