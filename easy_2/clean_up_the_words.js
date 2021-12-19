/*
Clean Up the Words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

cleanUp("---what's my +*& line?");    // " what s my line "

Problem
  Given a string with non-alphabetic characters mixed in, return a string that has those non-alphabetic chars replaced with a space. There should never be more than one space together

  Input
    String (which may or may not have random special chars inside it)

  Output
    String (the input str but with non-alpha chars replaced by a single space)

  Notes
    - Spaces should only occur in groups of 1
    - Output should only contain letters and spaces
    - Return an empty string if empty string is passed as input?
    - What about numbers? (replace them as well—not alphabetic)
    - trailing or leading punctuation/digits should be replaced as well
    - should be able to use RegEx with ReplaceAll
    - need to make sure only one space together after replacing non-letters
    - original spaces should be maintained

Examples
  cleanUp("---what's my +*& line?");    // " what s my line "
  cleanUp("---' +*& ?");    // " "
  cleanUp("");    // ""
  cleanUp("5192837$$$+")  // " "
  clearUp("There are no chars not letters and spaces here") // "There are no chars not letters and spaces here"

Data Structures
  String

Algorithm
  Get all non-letter sequences in the input and replace them with a space using RegEx
  Replace multiple spaces with just one space
    - may need to repeat this multiple times depending on replacements and changing spaces
  Return string with non-letters replaced by spaces

*/

function cleanUp(string) {
  const noNonLetters = string.replaceAll(/[^A-Za-z ]+/g, ' ');

  let noDoubleSpaces;

  do {
    noDoubleSpaces = noNonLetters.replaceAll(/( ){2,}/g, ' ');
  } while (/( ){2,}/g.test(noDoubleSpaces));

  return noDoubleSpaces;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("---' +*& ?"));    // " "
console.log(cleanUp(""));    // ""
console.log(cleanUp("5192837$$$+"));  // " "
console.log(cleanUp("There are no chars which are not letters and spaces here")); // "There are no chars which are not letters and spaces here"