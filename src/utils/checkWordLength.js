export default function checkWordLength(
  changeBtn,
  nickname,
  caption,
  password,
  passwordAgain,
  setCountNickName,
  setCountCaption,
  setCountPassword,
  setCountPasswordAgain
) {
  nickname.addEventListener("keyup", () => {
    setCountNickName(nickname.value.length);
  });
  caption.addEventListener("keyup", () => {
    setCountCaption(caption.value.length);
  });
  if (changeBtn) {
    password.addEventListener("keyup", () => {
      setCountPassword(password.value.length);
    });
    passwordAgain.addEventListener("keyup", () => {
      setCountPasswordAgain(passwordAgain.value.length);
    });
  }
}
