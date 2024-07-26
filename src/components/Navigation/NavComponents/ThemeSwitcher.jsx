import { useState, useEffect } from "react";
import LightModeIcon from "../../../icons/LightModeIcon";
import DarkModeIcon from "../../../icons/DarkModeIcon";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      id="mode"
      className="flex transition-all ease-out duration-200 justify-center items-center w-10 h-10 rounded-full 
            bg-gradient-to-tr hover:from-blue-400 hover:to-fuchsia-400 fill-gray-600 hover:fill-white
            dark:fill-gray-400 dark:hover:fill-white"
      onClick={toggleDarkMode}
    >
      {!darkMode ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </button>
  );
};

export default ThemeSwitcher;
