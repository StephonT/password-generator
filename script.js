// Assignment code here

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
