// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  writePassword.value = passwordText.value;

}

function generatePassword() {
  let pass = [];
  let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let sym = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+"];

  let passwordSize = prompt("How many characters between 8 and 128 would you like in your password?");
  let upperCase = confirm("Would you like upper case letters in your password?");
  let numbers = confirm("Would you like numbers in your password?");
  let symbols = confirm("Would you like symbols in your password?");

  let count = JSON.parse(passwordSize);
  console.log(count);
  console.log(pass);

  if (upperCase) {
    pass = pass.concat(big);
  }
  if (numbers) {
    pass = pass.concat(num);
  }
  if (symbols) {
    pass = pass.concat(sym);
  }
  if (pass.length === 0) {
    pass = pass.concat(char)
  }

  console.log(pass);

  let newPass = "";

  for (i = 0; i < count; i++) {
    //newPass = newPass.(pass)
    let randomIndex = Math.floor(Math.random() * pass.length);
    newPass += pass[randomIndex];
  }
  console.log(newPass);

  return newPass;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






