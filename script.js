//Creating criteria variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = [" ", "!", "\"", "#", "$", "%", "\&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', "^", "_", "`", "{", "|", "}", "~"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var userPasswordArray = [];

// randomize array function
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));     
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }

// Function to generate the password
function generatePassword() {
    var userLength = prompt("How long would you like the password to be? Select a number from 8 to 128.");
    if (userLength < 8 || userLength > 128) {
        alert("Please select a number between 8 and 128.");
        generatePassword();
    } else {
        var lowerCaseLetter = prompt("Would you like to include lowercase letters? Type \"yes\" or \"no\".");
        var upperCaseLetter = prompt("Would you like to include uppercase letters? Type \"yes\" or \"no\".");
        var specialCharacters = prompt("Would you like to include special characters? Type \"yes\" or \"no\".");
        var numbers = prompt("Would you like to include numbers? Type \"yes\" or \"no\".");

        if (lowerCaseLetter === "no" && upperCaseLetter === "no" && specialCharacters === "no" && numbers === "no") {
            alert("You need some characters");
            generatePassword();
        } else {
            if (lowerCaseLetter === "yes") {
                userPasswordArray = userPasswordArray.concat(lowerCase);
            }
            if (upperCaseLetter === "yes") {
                userPasswordArray = userPasswordArray.concat(upperCase);
            }
            if (specialCharacters === "yes") {
                userPasswordArray = userPasswordArray.concat(specialCharacter);
            }
            if (numbers === "yes") {
                userPasswordArray = userPasswordArray.concat(number);
            }
        }

        // Double the length of the array 
        userPasswordArray = userPasswordArray.concat(userPasswordArray);

        // Randomize array
        var randomArray = shuffleArray(userPasswordArray);

        // Changing userLength variable from a string to a number
        var userLengthNumber = Number(userLength);

        // Slice userLenthNumber from array
        var password = randomArray.slice(0, userLengthNumber).join("");

        // Write password to the #password input
        var passwordText = document.querySelector("#password");
        passwordText.value = password;

    }
}
