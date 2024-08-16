/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let givenStr = str.toLowerCase();
  let strlen = givenStr.length - 1;
  let testStr1 = "";
  let testStr2 = "";
  for (let i = strlen; i >= 0; i--) {
    if (givenStr[strlen - i].match(/[a-z]/i)) {
      testStr1 += givenStr[strlen - i];
    }
    if (givenStr[i].match(/[a-z]/i)) {
      testStr2 += givenStr[i];
    }
  }
  if (testStr1 === testStr2) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPalindrome;
