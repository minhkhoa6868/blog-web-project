import HomeSection from "./NavComponents/HomeSection.jsx";
import FiendSection from "./NavComponents/FriendSection.jsx";
import NotificationSection from "./NavComponents/NotificationSection.jsx";
import AccountSection from "./NavComponents/AccountSection.jsx";
import SearchSection from "./NavComponents/SearchSection.jsx";

const NavigationResponsive = () => {
  const hoverNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[60px] justify-center rounded-lg dark:hover:bg-gray-500 dark:fill-gray-300";
  const hoverActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 fill-white w-[60px] justify-center rounded-lg bottom-full hover:from-blue-500 hover:to-fuchsia-500";
  const hoverAccountNotActive =
    "flex transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 w-[60px] justify-center rounded-lg dark:hover:bg-gray-500";
  const hoverAccountActive =
    "flex transition ease-out duration-300 bg-gradient-to-tr from-blue-400 to-fuchsia-400 w-[60px] justify-center rounded-lg bottom-full opacity-100 hover:from-blue-500 hover:to-fuchsia-500";

  return (
    <nav 
        className="flex justify-center gap-2 py-2 w-full bg-transparent backdrop-blur-[12px] shadow-lg bottom-0 sticky z-[1] mid:hidden"
    >
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
    </nav>
  );
};

export default NavigationResponsive;
