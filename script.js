 // Assignment Code
var generateBtn = document.querySelector("#generate");
// Empty Array To be Filled With Characters The User Choses
var userChoiceArray = [];

// Arrays With All Valid Characters To Be Used In Password
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];

// For Loop To Generate Passord
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChoice = Math.floor(Math.random() * userChoiceArray.length);
    password = password + userChoiceArray[randomChoice]
  }
  return password;
}

// Screen Prompts For Generating The Password
function screenPrompts() {
  userChoiceArray = [];

  passwordLength = parseInt(prompt("How Many Characters Do You Want Your Password To Be? Needs To Be Between 8 - 128 Characters"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please Select A Password Length Between 8 - 128. Please Try Again");
    return false;
  }
   if (confirm("Would You Like Lowercase Letters In Your Password?")) {
   userChoiceArray = userChoiceArray.concat(lowerCaseArray)
   }
   if (confirm("Would You Like Uppercase Letters In Your Password?")) {
    userChoiceArray = userChoiceArray.concat(upperCaseArray)
  }
  if (confirm("Would You Like Numbers Letters In Your Password?")) {
    userChoiceArray = userChoiceArray.concat(numsArray)
  }
  if (confirm("Would You Like Special Characters Letters In Your Password?")) {
    userChoiceArray = userChoiceArray.concat(specialCharactersArray)
  }
  return true;
}

// Write password to the #password input
// Added a Variable If Statement To The writePassword Function To Write Password Based On The User Selected Prompts
function writePassword() {
  var completePrompts = screenPrompts();

  if (completePrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

