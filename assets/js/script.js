// Assignment code here

// Lowercase Letters Array
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

// Uppercase Letters Array
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

// Special Characters Array
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

// Number Array
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define ALL characters
var allCharacters = alphabetUpper.concat(
  alphabetLow,
  numerals,
  specialCharacters
);

//Start of Generate Button Function
function generatePassword() {
  //Set Password Length and prompt
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

    return;
  } else if (lengthAsNumber !== NaN) {
    alert(
      "You did not choose a number. Press 'Generate Password' button to try again. "
    );
    return;
  }

  //Choose Character Type
  var characterType = prompt(
    "Choose characters for your password. For lowercase letters, type 'lowercase'. For uppercase letters, type 'uppercase'. For numbers, type 'numbers'. For special characters, type 'special'. For mix of all characters, type 'all'."
  );
  if (characterType === null) {
    return;
  }

  // Create a final password empty array
  var finalPassword = [];

  //Lowercase "For" Loop
  if (characterType.toLowerCase() === "lowercase") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        alphabetLow[Math.floor(Math.random() * alphabetLow.length)]
      );
    }

    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "You've chosen lowercase! Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");

    // Uppercase "For" Loop
  } else if (characterType.toLowerCase() === "uppercase") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
      );
    }
    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "You've chosen uppercase! Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");

    // Numbers "For" Loop
  } else if (characterType.toLowerCase() === "numbers") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(numerals[Math.floor(Math.random() * numerals.length)]);
    }
    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "You've chosen numbers! Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");

    // Special Characters "For" Loop
  } else if (characterType.toLowerCase() === "special") {
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
    }
    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "You've chosen special characters! Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");

    //All Characters "For" Loop
  } else if (characterType.toLowerCase() === "all") {
    var allCharacters = alphabetUpper.concat(
      alphabetLow,
      numerals,
      specialCharacters
    );
    for (i = 0; i < setPasswordLength; i++) {
      finalPassword.push(
        allCharacters[Math.floor(Math.random() * allCharacters.length)]
      );
    }
    console.log("The user password is: " + finalPassword.join(""));
    alert(
      "You've chosen all characters! Your password will be displayed inside of the box. Please save it for your records."
    );
    return finalPassword.join("");
  } else {
    alert("You did not choose a valid option");
  }
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
