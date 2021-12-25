/*
Staggered Caps Part 1

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Problem
  Given a string, return it transformed so that even indexes are uppercase and odd indexes are lowercase. Leave other types of characters unchanged.

  Input: string
  Output: string (with MiXeD CaSe lIkE So)--even indexes upper, odd indexes lower

Examples (see below)

Data Structures
  String
  Array

Algo
  Change the string into an array of chars
  Transform the array of chars such that even indexes are assigned to be uppercase and odds are lowercase
  Join the transformed array
  Return it

*/

function staggeredCase(string) {
  const letters = string.split('');

  return letters.map((letter, index) => {
    if (index % 2 === 0) return letter.toUpperCase();

    return letter.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"