export default function checkValidAgain() {
  const password = document.getElementById("pw");
  const passwordAgain = document.getElementById("cpw");
  const validAgain = document.getElementById("valid-again");
  // check if password and confirm password is empty => do nothing
  if (password.value === "" || passwordAgain.value === "") {
    validAgain.innerHTML = "";
    return;
  }
  // check if confirm password is same with password
  if (password.value === passwordAgain.value) {
    validAgain.innerHTML = "Valid";
    validAgain.classList.add("text-green-500");
    validAgain.classList.remove("text-red-500");
  } 
  // check if confirm password is different with password
  else {
    validAgain.innerHTML = "Invalid";
    validAgain.classList.remove("text-green-500");
    validAgain.classList.add("text-red-500");
  }
}
