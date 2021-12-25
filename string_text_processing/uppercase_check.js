/*
Uppercase Check

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. Ignore characters that are not alphabetic.

P

Implement a boolean function which returns true if all the alphabetic characters are uppercase; else false

Input: string
Output: boolean (whether all characters are uppercase)

Notes: length of string doesn't matter; nor does non-alphabetic characters. The only factor is whether any lowercase letter appears in the string. If even one lowercase letter is found, return false; else, true

Examples (see below)

Data Structures
  String

Algo

Determine whether or not there are any lowercase letters found in the string

Use RegEx to find if there's a match on a lowercase letter

*/

function isUppercase(string) {
  return string.match(/[a-z]+/) === null;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true