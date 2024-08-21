import { useContext, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeSwitcher from "./NavComponents/ThemeSwitcher.jsx";
import HomeSection from "./NavComponents/HomeSection.jsx";
import FiendSection from "./NavComponents/FriendSection.jsx";
import NotificationSection from "./NavComponents/NotificationSection.jsx";
import AccountSection from "./NavComponents/AccountSection.jsx";
import SearchSection from "./NavComponents/SearchSection.jsx";
import SignupButton from "./NavComponents/SignupButton.jsx";
import LogoIcon from "../../icons/LogoIcon.jsx";
import { PageContext } from "../../store/page-context.jsx";

const Navigation = memo(function Navigation() {
  const pageCtx = useContext(PageContext);

  const hoverNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[70px] md:w-[80px] justify-center rounded-lg dark:hover:bg-gray-500 dark:fill-gray-300";
  const hoverActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-[70px] md:w-[80px] justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500";
  const hoverAccountNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[70px] md:w-[80px] justify-center rounded-lg dark:hover:bg-gray-500";
  const hoverAccountActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 w-[70px] md:w-[80px] justify-center rounded-lg bottom-full opacity-100 hover:from-blue-500 hover:to-fuchsia-500";

  return (
    <>
      <nav className="py-2 flex justify-between w-full bg-transparent backdrop-blur-[12px] shadow-lg top-0 sticky z-[1]">
        <Link
          to="/"
          className="px-6"
          onClick={() => pageCtx.updateActive("home")}
          key="home"
        >
          <LogoIcon />
        </Link>
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
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <NotificationSection
            hoverActive={hoverActive}
            hoverNotActive={hoverNotActive}
          />
          <AccountSection
            hoverAccountActive={hoverAccountActive}
            hoverAccountNotActive={hoverAccountNotActive}
          />
        </div>
        <div className="flex items-center gap-2 px-6">
          <SignupButton />
          <ThemeSwitcher />
        </div>
      </nav>
      <Outlet />
    </>
  );
});

export default Navigation;