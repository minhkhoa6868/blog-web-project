import { createContext, useState } from "react";

export const PageContext = createContext({
  active: false,
  follow: false,
  updateActive: () => {},
  updateFollow: () => {},
});

const PageContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(
    window.location.pathname == "/" ? "home" : localStorage.getItem("isActive")
  );
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = () => {
    setIsFollow((prevState) => !prevState);
  };

  function handleActive(buttonActive) {
    setIsActive(buttonActive);
    localStorage.setItem("isActive", buttonActive);
  }

  const ctxPage = {
    active: isActive,
    follow: isFollow,
    updateActive: handleActive,
    updateFollow: handleFollow,
  };

  return (
    <PageContext.Provider value={ctxPage}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
