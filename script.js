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
  }

  //Choose Character Type
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
