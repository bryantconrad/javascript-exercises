const reverseString = function(inputText) {
// Get the last character of the string
// Write it as the first character in a new string
// Repeat for the second to last character, continue looping backwards
    let reversedText = "";
    for (let i = inputText.length-1; i >= 0; i--) {
        reversedText += inputText[i];
    }
    return reversedText;

// Shorter solution: return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
