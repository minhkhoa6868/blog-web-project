export default function checkValidAgain() {
  const password = document.getElementById("pw");
  const passwordAgain = document.getElementById("cpw");
  const validAgain = document.getElementById("valid-again");
  if (password.value === "" || passwordAgain.value === "") {
    validAgain.innerHTML = "";
    return;
  }
  if (password.value === passwordAgain.value) {
    validAgain.innerHTML = "Valid";
    validAgain.classList.add("text-green-500");
    validAgain.classList.remove("text-red-500");
  } else {
    validAgain.innerHTML = "Invalid";
    validAgain.classList.remove("text-green-500");
    validAgain.classList.add("text-red-500");
  }
}
