/*
Search Word Part 1

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

Problem
  Given a word and a string, return the number of times that word appears in the string

  Input: word; string of text (both will always be present)
  Output: integers: number of times the word appears in the string

  Notes: case-insensitive matching
    Problem text mentions possible punctuation: is a word still counted if it appears with punctuation? How should that be handled?

Example (see below)

Data Structures
  String
  Array?

Algorithm
  1. Use RegEx to search for matches for the input word in the text
    - Assign the matches to an array?
  2. Return the number of matches
*/

function searchWord(word, text) {
  return text.match(new RegExp(`\\b${word}\\b`, 'gi'))?.length || 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

const longString = `This is a long text which Andrew has written. Who, Andrew? Yes, Andrew!!!

It's important to realize that sometimes Andrew is silly; however, Andrew's not always silly. Sometimes he can be pretty serious, in fact. Andrew's a complex person (as are most).`;

console.log(searchWord('Andrew', longString)); // 6
console.log(searchWord('flugel', longString)); // 0

console.log(searchWord('qui', text));      // should return 4, NOT 13