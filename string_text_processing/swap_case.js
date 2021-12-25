/*
Swap Case

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Problem
  Given a string, return a string that matches the input except with lowercase <-> uppercase switched for all letters

  Input: string
  Output: string (with the case of each letter inverted/switched)

Examples (see below)

Data Structures
  String

Algorithm
  Initialize an empty string to hold the result
  Go through each char in the input
  If it's a lowercase letter, add its uppercased version to the result
  Otherwise, if uppercase, add its lowercased version to result
  Else, add the current character to result
  Return the result
*/

const swapCase = (string) => {
  let swapped = '';

  for (let index = 0; index < string.length; index += 1) {
    if (/[a-z]/.test(string[index])) {
      swapped += string[index].toUpperCase();
    } else if (/[A-Z]/.test(string[index])) swapped += string[index].toLowerCase(); else {
      swapped += string[index];
    }
  }

  return swapped;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"