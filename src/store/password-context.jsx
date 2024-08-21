import { createContext, useState, useCallback } from "react";

export const PasswordContext = createContext({
  openPassword: false,
  openConfirmPassword: false,
  showPassword: () => {},
  showConfirmPassword: () => {},
});

const PasswordContextProvider = ({ children }) => {
  const [openPassword, setOpenPassword] = useState(false);
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);

  const handleOpenPassword = useCallback(() => {
    setOpenPassword((prevState) => !prevState);
  }, []);

  const handleOpenConfirmPassword = useCallback(() => {
    setOpenConfirmPassword((prevState) => !prevState);
  }, []);

  const showPassword = useCallback((password) => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    handleOpenPassword();
  }, [handleOpenPassword])

  const showConfirmPassword = useCallback((confirmPassword) => {
    if (confirmPassword.type === "password") {
      confirmPassword.type = "text";
    } else {
      confirmPassword.type = "password";
    }
    handleOpenConfirmPassword();
  }, [handleOpenConfirmPassword])

  const passwordCtx = {
    openPassword: openPassword,
    openConfirmPassword: openConfirmPassword,
    showPassword: showPassword,
    showConfirmPassword: showConfirmPassword,
  }; 

  return (
    <PasswordContext.Provider value={passwordCtx}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;