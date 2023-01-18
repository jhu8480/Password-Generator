// Starter code
const generateBtn = document.querySelector("#generate");
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// Logic to generate password below:

function generatePassword() {
  // Validate the password length:
  const passwordLength = window.prompt('How many characters do you need in your password?');
  const isValidLength = validateLength(passwordLength);
  if (!isValidLength) return 'The length is not valid, it must be at least 8 characters and no more than 128 characters! Try again';


  // Ask the user about the type of characters to include
  const numOfNumeric = prompt('How many numeric characters do you need?');
  const numOfUpperCase = prompt('How many upper case characters do you need?');
  const numOfLowerCase = prompt('How many lower characters do you need?');
  const numOfSpecialCharacters = prompt('How many special characters do you need?');


  // Generate the password based on user's criteria
  const result = producePassword(numOfNumeric, numOfUpperCase, numOfLowerCase, numOfSpecialCharacters);
  return result;
}


function validateLength(number) {
  return number > 7 & number < 129;
}

function producePassword(numOfNumeric, numOfUpperCase, numOfLowerCase, numOfSpecialCharacters) {
  const numericString = produceNumericString(numOfNumeric);
  const upperCaseString = produceUpperCaseString(numOfUpperCase);
  const lowerCaseString = produceLowerCaseString(numOfLowerCase);
  const specialCharacterString = produceSpecialCharacters(numOfSpecialCharacters);

  const stringArr = [];
  stringArr.push(numericString);
  stringArr.push(upperCaseString);
  stringArr.push(lowerCaseString);
  stringArr.push(specialCharacterString);
  
  // TODO: shuffle the order of elements here
  const joined = stringArr.join('');
  console.log(joined);
  return joined;
}

function produceNumericString(numOfNumeric) {
  const result = [];
  const numericCharacters = '0123456789';
  for (i = 0; i < numOfNumeric; i++) {
    let randomIndex = Math.floor(Math.random() * 10);
    const newStringPiece = numericCharacters.charAt(randomIndex);
    result.push(newStringPiece);
  }
  console.log(result.join(''));
  return result.join('');
}

function produceUpperCaseString(numOfUpperCase) {
  const result = [];
  const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i = 0; i < numOfUpperCase; i++) {
    let randomIndex = Math.floor(Math.random() * 26);
    const newStringPiece = upperCaseCharacters.charAt(randomIndex);
    result.push(newStringPiece);
  }
  console.log(result.join(''));
  return result.join('');
}

function produceLowerCaseString(numOfLowerCase) {
  const result = [];
  const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  for (i = 0; i < numOfLowerCase; i++) {
    let randomIndex = Math.floor(Math.random() * 26);
    const newStringPiece = lowerCaseCharacters.charAt(randomIndex);
    result.push(newStringPiece);
  }
  console.log(result.join(''));
  return result.join('');
}

function produceSpecialCharacters(numOfSpecialCharacters) {
  const result = [];
  const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~"`;
  for (i = 0; i < numOfSpecialCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * specialCharacters.length);
    const newStringPiece = specialCharacters.charAt(randomIndex);
    result.push(newStringPiece);
  }
  console.log(result.join(''));
  return result.join('');
}
