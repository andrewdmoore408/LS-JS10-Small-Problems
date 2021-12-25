/*
Capitalize Words

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Problem

  Given a string, convert its first character to uppercase (if a letter) with all other letters lowercase

  Input: string (with varying cases of letters and possible other characters)
  Output: The string with the first character (not letter--character) capitalized and all subsequent letters lowercased

  Questions: is it possible to use Regex for the actual change...?

  Notes: only first character of each word; if not a letter, no capitalized letters in that word

Examples (see below)

Data Structure
  Strings
  Arrays

Algorithm
  For each word in the string: make sure the first character is uppercase and all others lowercase

  1. Get the individual words from the string into an array
    -split()
  2. Transform each word so that its first character is uppercase and all others are lowercase
    - use bracket notation to get first character and slice for the rest
    - invoke toUpperCase() on first char and toLowerCase() on the rest
    - concatenate the results into a new word
  3. Combine the words into a string and return it
*/

function wordCap(string) {
  const words = string.split(' ');

  return words.map(word => {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'