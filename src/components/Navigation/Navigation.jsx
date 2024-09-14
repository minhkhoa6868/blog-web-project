import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";

import ThemeSwitcher from "./NavComponents/ThemeSwitcher.jsx";
import HomeSection from "./NavComponents/HomeSection.jsx";
import FiendSection from "./NavComponents/FriendSection.jsx";
import NotificationSection from "./NavComponents/NotificationSection.jsx";
import AccountSection from "./NavComponents/AccountSection.jsx";
import SearchSection from "./NavComponents/SearchSection.jsx";
import RequireButton from "./NavComponents/RequireButton.jsx";
import LogoIcon from "../../icons/LogoIcon.jsx";
import { signupActions } from "../../store/signup-slice.js";
import { pageActions } from "../../store/page-slice.js";

const Navigation = memo(function Navigation() {
  const dispatch = useDispatch();
  const isSignup = useSelector(state => state.signup.isSignup);

  const hoverNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[70px] md:w-[80px] justify-center rounded-lg dark:hover:bg-gray-500 dark:fill-gray-300";
  const hoverActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-[70px] md:w-[80px] justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500";
  const hoverAccountNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[70px] md:w-[80px] justify-center rounded-lg dark:hover:bg-gray-500";
  const hoverAccountActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 w-[70px] md:w-[80px] justify-center rounded-lg bottom-full opacity-100 hover:from-blue-500 hover:to-fuchsia-500";

  const toggleWarningHandler = () => {
    dispatch(signupActions.toggleShow());
  }
  // bg-transparent backdrop-blur-[12px]

  return (
    <>
      <nav className="py-2 flex justify-between w-full bg-white dark:bg-[#212121]  shadow-lg top-0 sticky z-[1]">
        <NavLink
          to="/"
          className="px-6"
          onClick={() => dispatch(pageActions.setActive('home'))}
        >
          <LogoIcon />
        </NavLink>
        <div className="mid:flex hidden gap-2 text-sm transition-all ease duration-300">
          <HomeSection
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <SearchSection
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <FiendSection
            isSignup={isSignup}
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
            toggleWarningHandler={toggleWarningHandler}
          />
          <NotificationSection
            isSignup={isSignup}
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
            toggleWarningHandler={toggleWarningHandler}
          />
          {isSignup && (<AccountSection
            hoverAccountActive={hoverAccountActive}
            hoverAccountNotActive={hoverAccountNotActive}
          />)}
        </div>
        <div className="flex items-center gap-2 px-6">
          {!isSignup && <RequireButton status='Signup' navigate='/signup' />}
          <ThemeSwitcher />
        </div>
      </nav>
      <Outlet />
    </>
  );
});

export default Navigation;