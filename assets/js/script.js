// Assignment code here

// Characters to be used to generate password

var lowerCaseChars = [
  "a",
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
  "z",
];

var upperCaseChars = [
  "A",
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
  "Z",
];

var specialChars = [
  "\u0020",
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
  ,
  "\u007C",
  "\u007D",
  "\u007E",
];

var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var allChars = upperCaseChars.concat(lowerCaseChars, numberChars, specialChars);

//Start of Generate Button Function
function generatePassword() {
  //Set Password Length Prompt
  var setPasswordLength = prompt(
    "Please choose a number between 8 and 128 for your desired password length."
  );

  //Set Password Length As Number
  var lengthAsNumber = parseInt(setPasswordLength);

  console.log(lengthAsNumber);

  //Create conditional statement for Password Length
  if (lengthAsNumber >= 8 && lengthAsNumber <= 128) {
    confirm("You have selected a character length of " + lengthAsNumber + ".");
  } else if (lengthAsNumber <= 8 || lengthAsNumber >= 128) {
    alert(
      "You did not choose a number between 8 and 128. Press 'Generate Password' button to try again."
    );

    //   return;
    // } else if (lengthAsNumber !== NaN) {
    //   alert(
    //     "You did not choose a number. Press 'Generate Password' button to try again. "
    //   );
    //   return;
  }

  //Choose Character Type
  var characterType = "";

  //questions prompted to ask user which characters to include in their password

  if (confirm("Would you like lowercase characters?")) {
    characterType += lowerCaseChars;
  }

  if (confirm("Would you like uppercase characters?")) {
    characterType += upperCaseChars;
  }

  if (confirm("Would you like number characters?")) {
    characterType += numberChars;
  }

  if (confirm("Would you like special characters?")) {
    characterType += specialChars;
  }

  // Create a final password empty array
  var finalPassword = [];

  //Lowercase "For" Loop
  // if (characterType.toLowerCase() === "lowercase") {
  //   for (i = 0; i < setPasswordLength; i++) {
  //     finalPassword.push(
  //       lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
  //     );
  //   }

  //   console.log("The user password is: " + finalPassword.join(""));
  //   alert(
  //     "You've chosen lowercase! Your password will be displayed inside of the box. Please save it for your records."
  //   );
  //   return finalPassword.join("");

  //   // Uppercase "For" Loop
  // } else if (characterType.toLowerCase() === "uppercase") {
  //   for (i = 0; i < setPasswordLength; i++) {
  //     finalPassword.push(
  //       upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
  //     );
  //   }
  //   console.log("The user password is: " + finalPassword.join(""));
  //   alert(
  //     "You've chosen uppercase! Your password will be displayed inside of the box. Please save it for your records."
  //   );
  //   return finalPassword.join("");

  //   // Numbers "For" Loop
  // } else if (characterType.toLowerCase() === "numbers") {
  //   for (i = 0; i < setPasswordLength; i++) {
  //     finalPassword.push(
  //       numberChars[Math.floor(Math.random() * numberChars.length)]
  //     );
  //   }
  //   console.log("The user password is: " + finalPassword.join(""));
  //   alert(
  //     "You've chosen numbers! Your password will be displayed inside of the box. Please save it for your records."
  //   );
  //   return finalPassword.join("");

  //   // Special Characters "For" Loop
  // } else if (characterType.toLowerCase() === "special") {
  //   for (i = 0; i < setPasswordLength; i++) {
  //     finalPassword.push(
  //       specialChars[Math.floor(Math.random() * specialChars.length)]
  //     );
  //   }
  //   console.log("The user password is: " + finalPassword.join(""));
  //   alert(
  //     "You've chosen special characters! Your password will be displayed inside of the box. Please save it for your records."
  //   );
  //   return finalPassword.join("");

  //   //All Characters "For" Loop
  // } else if (characterType.toLowerCase() === "all") {
  //   var allCharacters = upperCaseChars.concat(
  //     lowerCaseChars,
  //     numberChars,
  //     specialChars
  //   );
  //   for (i = 0; i < setPasswordLength; i++) {
  //     finalPassword.push(
  //       allCharacters[Math.floor(Math.random() * allCharacters.length)]
  //     );
  //   }
  //   console.log("The user password is: " + finalPassword.join(""));
  //   alert(
  //     "You've chosen all characters! Your password will be displayed inside of the box. Please save it for your records."
  //   );
  //   return finalPassword.join("");
  // } else {
  //   alert("You did not choose a valid option");
  // }
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
