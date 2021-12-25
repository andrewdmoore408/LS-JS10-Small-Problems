/*
Search Word Part 2

The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and a string of text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

Problem
  Given a word and a string of text, return the text with each instance of the passed-in word all in uppercase and surrounded on each side by two asterisks like so: **SEARCHED**

  Input: word; string of text (which may or may not contain the word)
  Output: the same string of text with any occurrences of the input word all in uppercase and surrounded by two asterisks on each side

  Notes: Use RegEx for matches? Does punctuation matter? Are we still supposed to look for a whole word or not?

  Can use String.replace() to modify the word as needed

Example (see below)

Data Structures
  String
  Array(?)

Algorithm
  1. Use RegEx to make a pattern that will search for the word
  2. Invoke String.replace(), passing in the pattern to search for and using string interpolation to construct the highlighted version of the word
  3. Return this new string
*/

function searchWord(word, text) {
  const pattern = new RegExp(`\\b${word}\\b`, 'gi');

  return text.replace(pattern, `**${word.toUpperCase()}**`);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const longString = `This is a long text which Andrew has written. Who, Andrew? Yes, Andrew!!!

It's important to realize that sometimes Andrew is silly; however, Andrew's not always silly. Sometimes he can be pretty serious, in fact. Andrew's a complex person (as are most).`;

console.log(searchWord('Andrew', longString));
console.log(searchWord('flugel', longString));

console.log(searchWord('qui', text));