import { createContext, useState, useCallback } from "react";

export const EditProfileContext = createContext({
  btn: false,
  oherGender: false,
  nameLength: 0,
  captionLength: 0,
  handleBtnChange: () => {},
  handleOtherGender: () => {},
  handleNameLength: () => {},
  handleCaptionLength: () => {},
});

const EditProfileContextProvider = ({ children }) => {
  const [changeBtn, isChangeBtn] = useState(false);
  const [otherGender, isOtherGender] = useState(false);
  const [countUserName, setCountUserName] = useState(0);
  const [countCaption, setCountCaption] = useState(0);

  // set for change password or not
  const handleBtnChange = useCallback(() => {
    isChangeBtn((prevState) => !prevState);
  });

  const editCtx = {
    btn: changeBtn,
    oherGender: otherGender,
    nameLength: countUserName,
    captionLength: countCaption,
    handleBtnChange: handleBtnChange,
    handleOtherGender: isOtherGender,
    handleNameLength: setCountUserName,
    handleCaptionLength: setCountCaption,
  };

  return (
    <EditProfileContext.Provider value={editCtx}>
      {children}
    </EditProfileContext.Provider>
  );
};

export default EditProfileContextProvider;