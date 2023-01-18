// Starter code
let generateBtn = document.querySelector("#generate");
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// Logic to generate password:

function generatePassword() {
  // Validate the password length:
  const passwordLength = prompt('How many characters do you need in your password?');
  const isValidLength = validateLength(passwordLength);
  if (!isValidLength) {
    alert('The length is not valid, it must be at least 8 characters and no more than 128 characters!')
    generatePassword();
  }

  // Ask the user about the type of characters to include
  const numOfNumeric = prompt('How many numeric characters do you need?');
  const numOfUpperCase = prompt('How many upper case letters do you need?');
  const numOfLowerCase = prompt('How many upper case letters do you need?');
  const numOfSpecialCharacters = prompt('How many special characters do you need?');

}

function validateLength(number) {
  return number > 7 & number < 129;
}


