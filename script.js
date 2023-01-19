// Password Class

class Password {
  constructor(passwordLength) {
    this.leftToChoose = passwordLength;
  }

  getNumeric() {
    const userInput = window.prompt('How many numeric characters do you need?');
    const userInputNumber = parseInt(userInput);
    console.log(parseInt(userInputNumber));

    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return 0;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getUpperCase() {
    if(this.leftToChoose <= 0) return 0;

    const userInput = window.prompt(`How many upper case characters do you need?You can choose no more than ${this.leftToChoose} characters`);
    const userInputNumber = parseInt(userInput);

    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return 0;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getLowerCase() {
    if(this.leftToChoose <= 0) return 0;
    if(this.leftToChoose === NaN) return NaN;

    const userInput = window.prompt(`How many lower case characters do you need?You can choose no more than ${this.leftToChoose} characters`);
    const userInputNumber = parseInt(userInput);

    this.leftToChoose = this.leftToChoose - userInputNumber;
    if(this.leftToChoose === NaN) return 0;
    console.log(this.leftToChoose);
    return userInputNumber;
  }

  getSpecialCharacter() {
    if(this.leftToChoose <= 0) return 0;
    if(this.leftToChoose === NaN) return NaN;
    window.alert(`You will have ${this.leftToChoose} special characters in your password`);
    return this.leftToChoose;
  }
}




// Starter code ----------------------------------------
const generateBtn = document.querySelector("#generate");
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// ------------------------------------------------------



// Logic to generate password below:

function generatePassword() {
  // Validate the password length:
  const passwordLength = window.prompt('How many characters do you need in your password?');
  const isValidLength = validateLength(passwordLength);
  if (!isValidLength) return 'The length is not valid, it must be at least 8 characters and no more than 128 characters! Try again';

  const password = new Password(parseInt(passwordLength));

  // Ask the user about the type of characters to include
  const numOfNumeric = password.getNumeric();
  const numOfUpperCase = password.getUpperCase();
  const numOfLowerCase = password.getLowerCase();
  const numOfSpecialCharacters = password.getSpecialCharacter();

  // Generate the password based on user's criteria
  return producePassword(numOfNumeric, numOfUpperCase, numOfLowerCase, numOfSpecialCharacters);
}


function validateLength(number) {
  return number > 7 & number < 129;
}


function producePassword(numOfNumeric, numOfUpperCase, numOfLowerCase, numOfSpecialCharacters) {
  // Generate different type of strings
  const numericString = produceNumericString(numOfNumeric);
  const upperCaseString = produceUpperCaseString(numOfUpperCase);
  const lowerCaseString = produceLowerCaseString(numOfLowerCase);
  const specialCharacterString = produceSpecialCharacters(numOfSpecialCharacters);

  const stringArr = [];
  stringArr.push(specialCharacterString);
  stringArr.push(numericString);
  stringArr.push(upperCaseString);
  stringArr.push(lowerCaseString);
  
  // shuffle the the password string here three times!
  const joined = stringArr.join('');
  const randomIndex = Math.floor(Math.random() * joined.length);
  const joined1 = joined.slice(0, randomIndex);
  const joined2 = joined.slice(randomIndex, joined.length);
  const joined3 = joined2.concat(joined1);

  const randomIndex2 = Math.floor(Math.random() * joined3.length);
  const joined4 = joined3.slice(0, randomIndex2);
  const joined5 = joined3.slice(randomIndex2, joined3.length);
  const joined6 = joined5.concat(joined4);

  const randomIndex3 = Math.floor(Math.random() * joined6.length);
  const joined7 = joined6.slice(0, randomIndex3);
  const joined8 = joined6.slice(randomIndex3, joined6.length);
  const joined9 = joined8.concat(joined7);

  return joined9;
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
