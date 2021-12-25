/*
Delete Vowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

Problem
  Convert (same or different array?) an array of strings so that all the vowels are removed from it (maybe try both?)

  Input: array of strings (which may or may not contain vowels)
  Output: array of strings (same strings unmodified except for having all vowels removed)

  Questions: what to do if an empty string is in the input? Or an empty array?

  Notes: could use replace with RegEx

Examples (see below)

Data structures
  Array
  String

Algorithm

  Need to modify each string so that it no longer has any vowels

  Map over the array
    Pass in a callback that returns the string with vowels replaced by an empty string
  Return this array
*/

function removeVowels(arrStrings) {
  return arrStrings.map(string => string.replace(/[aeiou]/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]