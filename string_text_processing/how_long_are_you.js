/*
How Long Are You

Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

Problem
  Given a string, return an array where each element consists of a string of a word from the string (in order) followed by a space and then the length of that word. (If an empty string or no input, return an empty array)

  Input: String
  Output: An array of strings (or an empty array if input is empty string or not provided). Each string contains the next word from the input, a space, then that word's length

  Notes: Every pair of words will be separated by a space (can split by ' ' or use \b in RegEx)
    What would happen if the string started and/or ended with a space? Is this possible and should this change the behavior of the function? (Would ask interviewer)

Examples (see below)

Data Structures
  String
  Array

Algorithm
  1.Take the string and transform it into an array of words
    - Use split() and assign the result to a variable words

  2. Build the output array to return: for each word in the array, calculate its length and add the word itself, a space, and the word length to the return array
    - Invoke map on the array which words points to
      - For the callback passed to map(), return the current word, a space, and the current word's length
  3. Return the output array
*/
function wordLengths(string) {
  if (string === '' || string === undefined) return [];

  const words = string.trim().split(/\s/);

  return words.map(word => `${word} ${word.length}`);
}

console.log(wordLengths(' cow sheep chicken '));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths(' baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it? "));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []