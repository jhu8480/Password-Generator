// Password Class
class Password {
  constructor(passwordLength) {
    this.leftToChoose = passwordLength;
  }

  getNumeric() {
    const userInput = window.prompt('How many numeric characters do you need?');
    const userInputNumber = parseInt(userInput);
    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return false;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getUpperCase() {
    const userInput = window.prompt(`How many upper case characters do you need?You can choose no more than ${this.leftToChoose} characters`);
    const userInputNumber = parseInt(userInput);
    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return false;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getLowerCase() {
    const userInput = window.prompt(`How many lower case characters do you need?You can choose no more than ${this.leftToChoose} characters`);
    const userInputNumber = parseInt(userInput);
    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return false;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getSpecialCharacter() {
    const userInput = window.prompt(`How many special characters do you need?You can choose no more than ${this.leftToChoose} characters`);
    const userInputNumber = parseInt(userInput);
    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return false;
    console.log(this.leftToChoose);
    return userInputNumber;
  }
}




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

  const password = new Password(parseInt(passwordLength));

  // Ask the user about the type of characters to include
  const numOfNumeric = password.getNumeric();
  if(!numOfNumeric) return 'Something went wrong, try again';

  const numOfUpperCase = password.getUpperCase();
  if(!numOfUpperCase) return 'Something went wrong, try again';

  const numOfLowerCase = password.getUpperCase();
  if(!numOfLowerCase) return 'Something went wrong, try again';

  const numOfSpecialCharacters = password.getUpperCase();
  if(!numOfSpecialCharacters) return 'Something went wrong, try again';
  

  // Generate the password based on user's criteria
  return producePassword(numOfNumeric, numOfUpperCase, numOfLowerCase, numOfSpecialCharacters);
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
