// Assignment code here
function generatePassword(passwordLength) {
  var passwordlgth = prompt("Enter desired password length between 12 and 128 characters.")
  console.log(passwordlgth)
  //If input is invalid return with alert saying invalid.
  if (!passwordlgth || !passwordlgth) {
    
  } if (passwordlgth > 128 || passwordlgth < 12) {
    alert("Invalid Input.");
    return false;
  }
  var event = prompt("Does your password require special characters? Yes or No.").toLowerCase()
  console.log(event);
  
  var upperLower = prompt("Does your password require uppercase Characters? Yes or No.").toLowerCase()
  console.log(upperLower)
  if (!upperLower || !upperLower) {
    
    return false;
  }
  var numeric = prompt("Does your password recquire numeric characters? Yes or No.").toLowerCase()
  console.log(numeric)
  if (!number || !numeric) {
    
  }
  var symbols = "!@#$%^&*()";
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUV"
  var number = "0123456789"
  var allChars = symbols + lower + upper + number
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = symbols;
  randPasswordArray[1] = lower;
  randPasswordArray[2] = upper;
  randPasswordArray[3] = number;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');  

}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i]
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}





//once prompts are selected password is generated matching the criteria. 

//password is then displayed. 


// Prompt window with password criteria.
// Select prompt criteria to include in the password.

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
