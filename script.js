// Assignment code here

// Define alphabet (Upper and Lower case)
var alphabetLow = [
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

var alphabetUpper = [
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

// Define special characters
var specialCharacters = [
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

// Define numerals
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define ALL characters
var allCharacters = alphabetUpper.concat(
  alphabetLow,
  numerals,
  specialCharacters
);
console.log(allCharacters);

//Generate Button Function
function generatePassword() {
  //Set Password Length and prompt
  var setPasswordLength = prompt(
    "Please choose a number between 8 and 128 for your desired password length."
  );

  //Set Password Length As Number
  var lengthAsNumber = parseInt(setPasswordLength);

  console.log(lengthAsNumber);

  //Create conditional statement for password length
  if (lengthAsNumber > 8 && lengthAsNumber < 128) {
    confirm("You have selected a character length of " + lengthAsNumber + ".");
  } else if (lengthAsNumber <= 8 || lengthAsNumber >= 128) {
    alert(
      "You did not choose a number between 8 and 128. Press 'Generate Password' button to restart. Thank you!"
    );
  } else if (lengthAsNumber !== NaN) {
    alert(
      "You did not choose a number. Press 'Generate Password' button to restart. Thank you! "
    );
  }

  //Choose Character Type
  var characterType = prompt(
    "Select the characters you would like to include in your password. For lowercase letters, type 'lowercase'. For uppercase letters, type 'uppercase'. For numbers, type 'numbers'. For special characters, type 'special characters'. For mix of all characters, type 'All'."
  );
  if (characterType === null) {
    return;
  }

  // Create a final password empty array
  var finalPassword = [];

  //Create if statements to ensure the selected types are of the values: lowercase, uppercase, numeric and/or special characters
  //Create for loops to generate random password
  if (characterType.toLowerCase() === "lowercase") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        alphabetLow[Math.floor(Math.random() * alphabetLow.length)]
      );
    }

    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");
  } else if (characterType.toUpperCase() === "uppercase") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
      );
    }
  } else if (characterType.toLowerCase() === "lowercase") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        alphabetLow[Math.floor(Math.random() * alphabetLow.length)]
      );
    }
  }
} //End of generateButton Function

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
