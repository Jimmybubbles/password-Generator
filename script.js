var generateBtn = document.querySelector("#generate");


function generatePassword() {

  //variables 
  var chars = ""
  //variables that will be called to populate the strings
  var specialCharacters = "!@#$%^&*()"
  var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var password = "";

  // promt user for password length
  var pwLength = prompt("Please choose password length (between 8 and 128 characters)")
  // converts string to integer for using in loop later.
  pwLength = parseInt(pwLength);
  
  // checks that newly converted string to integer is a integer, if not return to prompt
  if (isNaN (pwLength)){
    alert("Please press the Generate password button")
    return "Please pick a number between 8 and 128 characters"
  }

  // checks if the number is between 8 and 128
  if (pwLength < 8 || pwLength > 128) {
    alert("Please choose password length (between 8 and 128 characters)")
    return "Please pick a number between 8 and 128 characters"
  }

  //variables to call once the user has confirmed yes or no for suggestion.
  var upperCase = confirm("would you like uppercase letters?")
  var lowerCase = confirm("would you like lowercase letters?")
  var specialChar = confirm("would you like special case letters?")
  var num = confirm("would you like numbers letters?")

  //if statements to concatinate the variables to the empty char string

  //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  if (upperCase) {
    chars += chars.concat(capitalLetters)
  }
  if (lowerCase) {
    chars += chars.concat(lowercaseLetters)
  }
  if (specialChar) {
    chars += chars.concat(specialCharacters)
  }
  if (num) {
    chars += chars.concat(numbers)
  }

  // for loop variable i is equal to 0, i is less than or equal to the parsed value of input then increment by 1.
  // random variable will round to nearest whole number (math.floor), (math.random) will give a floating-point, pseudo-random number in the range 0 to less than 1.
  // then * by the length of the char variable
  for (var i = 0; i < pwLength; i++) {
    var random = Math.floor(Math.random() * chars.length);
    
    // The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
    password += chars.charAt(random);
  }

  document.getElementById("password").value = password;

  return password
  
}

// assesment code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// assesment code
generateBtn.addEventListener("click", writePassword);