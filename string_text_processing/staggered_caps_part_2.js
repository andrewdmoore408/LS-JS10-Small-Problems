/*
Staggered Caps Part 2

Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

Problem
  Given a string, return it tranformed with alternating letters upper- and lowercase. Disregard non-alphabetic characters

  Input: string
  Output: string (letters switch case; uppercase comes first)

Examples (see below)

Data structures
  String
  Array

Algorithm
  Initialize a boolean to mark whether we should invoke uppercase or lowercase
  Transform the string:
    Set the first letter to uppercase
    For each additional letter, alternate case so that it's UpPeR aNd LoWer.
    If any character isn't a letter, keep it as-is

*/

function staggeredCase(string) {
  let makeUppercase = true;

  return string.split('').map(char => {
    if (/[A-Z]/i.test(char)) {
      if (makeUppercase) {
        makeUppercase = false;
        return char.toUpperCase();
      } else {
        makeUppercase = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"