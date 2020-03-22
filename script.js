 // Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


let char = ['abcdefghijklmnopqrstuvwxyz'];
let num= ["0123456789"]
let sym = ["!@#$%^&*-_+"];

let passwordSize = prompt("How many characters would you like in your password?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  writePassword.vaule = passwordText.value;

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
//"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
//"!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+"


