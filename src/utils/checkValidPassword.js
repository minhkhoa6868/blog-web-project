export default function checkValidPassword() {
  const password = document.getElementById("pw");
  const passOver8 = document.getElementById("pass-over-8");
  const passHasDigit = document.getElementById("number");
  const passHasUppercase = document.getElementById("uppercase");
  const passHasSpeChar = document.getElementById("special-char");
  const criteria = {
    length: password.value.length >= 8 && password.value.length <= 25,
    uppercase: /[A-Z]/.test(password.value),
    digit: /\d/.test(password.value),
    specialChar: /[@$!%*?&]/.test(password.value),
  };
  if (password.value.length > 0) {
    if (criteria.length) {
      passOver8.classList.remove("text-gray-400");
      passOver8.classList.add("text-green-500");
      passOver8.classList.add("line-through");
    } else if (!criteria.length) {
      passOver8.classList.remove("text-green-500");
      passOver8.classList.remove("line-through");
      passOver8.classList.add("text-gray-400");
    }
    if (criteria.uppercase) {
      passHasUppercase.classList.remove("text-gray-400");
      passHasUppercase.classList.add("text-green-500");
      passHasUppercase.classList.add("line-through");
    } else if (!criteria.uppercase) {
      passHasUppercase.classList.remove("text-green-500");
      passHasUppercase.classList.remove("line-through");
      passHasUppercase.classList.add("text-gray-400");
    }
    if (criteria.digit) {
      passHasDigit.classList.remove("text-gray-400");
      passHasDigit.classList.add("text-green-500");
      passHasDigit.classList.add("line-through");
    } else if (!criteria.digit) {
      passHasDigit.classList.remove("text-green-500");
      passHasDigit.classList.remove("line-through");
      passHasDigit.classList.add("text-gray-400");
    }
    if (criteria.specialChar) {
      passHasSpeChar.classList.remove("text-gray-400");
      passHasSpeChar.classList.add("text-green-500");
      passHasSpeChar.classList.add("line-through");
    } else if (!criteria.specialChar) {
      passHasSpeChar.classList.remove("text-green-500");
      passHasSpeChar.classList.remove("line-through");
      passHasSpeChar.classList.add("text-gray-400");
    }
  } else if (password.value.length === 0) {
    if (!passOver8.classList.contains("text-gray-400")) {
      passOver8.classList.add("text-gray-400");
      passOver8.classList.remove("text-green-500");
      passOver8.classList.remove("line-through");
    }
    if (!passHasUppercase.classList.contains("text-gray-400")) {
      passHasUppercase.classList.add("text-gray-400");
      passHasUppercase.classList.remove("text-green-500");
      passHasUppercase.classList.remove("line-through");
    }
    if (!passHasDigit.classList.contains("text-gray-400")) {
      passHasDigit.classList.add("text-gray-400");
      passHasDigit.classList.remove("text-green-500");
      passHasDigit.classList.remove("line-through");
    }
    if (!passHasSpeChar.classList.contains("text-gray-400")) {
      passHasSpeChar.classList.add("text-gray-400");
      passHasSpeChar.classList.remove("text-green-500");
      passHasSpeChar.classList.remove("line-through");
    }
  }
}
