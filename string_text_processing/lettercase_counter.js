/*
Lettercase Counter

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

Problem
  Given a string, return an object which counts the number of lowercase letters in the string; uppercase letters in the string; and non-alphabetic chars in the string

  Input: string (which may or may not contain letters of any case)
  Output: an object with three properties: count of lowercase, uppercase, and non-letter chars

  Notes:
    property keys are 'lowercase', 'uppercase', and 'neither'
    for an empty string, return an object with the same properties with counts of 0

Examples (see below)

Data structures
  Strings
  Objects

Algorithm

  Split the string into an array of characters
  Invoke reduce
    Callback to reduce: initial object w/three properties set to zero
      - If lowercase char, increment that property value
      - If uppercase char, increment that one
      - If neither, increment neither

  Return the constructed object
*/

function letterCaseCount(string) {
  let countObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split('').reduce((count, letter) => {
    if (/[a-z]/.test(letter)) {
      count['lowercase'] += 1;
    } else if (/[A-Z]/.test(letter)) {
      count['uppercase'] += 1;
    } else {
      count['neither'] += 1;
    }

    return countObj;
  }, countObj);

  return countObj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }