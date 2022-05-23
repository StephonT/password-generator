lowerCaseChars =
  ("a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z");

upperCaseChars =
  ("A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z");

numberChars = (1, 2, 3, 4, 5, 6, 7, 8, 9);

specialChars =
  ("\u0020",
  "\u0021",
  "\u0022",
  "\u0023",
  "\u0024",
  "\u0025",
  "\u0026",
  "\u0027",
  "\u0028",
  "\u0029",
  "\u002A",
  "\u002B",
  "\u002C",
  "\u002D",
  "\u002E",
  "\u002F",
  "\u003A",
  "\u003B",
  "\u003C",
  "\u003D",
  "\u003E",
  "\u003F",
  "\u0040",
  "\u005B",
  "\u005C",
  "\u005D",
  "\u005E",
  "\u005F",
  "\u0060",
  "\u007B",
  "\u007C",
  "\u007D",
  "\u007E");

charsSet = ""; //Characters chosen during character select prompt

// Assignment code here
function generatePassword() {
  // Defining How Many Characters User Wants In Generated Password
  passwordLength = prompt(
    "Please choose a number between 8 and 128 for your desired password length."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm("You have chosen a character length of " + passwordLength);
  } else if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    passwordLength === NaN
  ) {
    alert("You did not enter a valid number. Please try again.");
    generatePassword(); // recursive function
  }
  //console.log(passwordLength); // To see Password Length in Log

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
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
