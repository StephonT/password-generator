// Assignment code here
function generatePassword(passwordLength, charsSet) {
  // For Loop to generate password
  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    var charIndex = Math.floor(Math.random() * charsSet.length);

    password += charsSet.charAt(charIndex);
  }

  return password; // return value
} // End of For Loop
//
//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //
  //
  // Defining How Many Characters User Wants In Generated Password
  var passwordLength = prompt(
    "Please enter a number between 8 and 128 for your desired password length."
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm(`You have chosen the password length of ${passwordLength}.`);
  }
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    passwordLength = prompt(
      "Please enter a number between 8 and 128 for your desired password length."
    ); //While Loop that does not allow the user to continue unless statement is true.
  }
  //
  //

  //Characters to be inputed into generate password
  lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";

  upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  numberChars = "123456789";

  specialChars = "~!%^&*()+=@#$";

  charsSet = ""; //<==== Empty string so chosen characters by user can be written in it.
  //
  //

  // Confirming what characters to include in password
  if (confirm("Would you like lowercase letters?")) {
    charsSet += lowerCaseChars; //append the charSet
  }

  if (confirm("Would you like uppercase letters?")) {
    charsSet += upperCaseChars; //append the charSet
  }

  if (confirm("Would you like numbers?")) {
    charsSet += numberChars; //append the charSet
  }

  if (confirm("Would you like special characters?")) {
    charsSet += specialChars; //append the charSet
  }

  var password = generatePassword(passwordLength, charsSet);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
