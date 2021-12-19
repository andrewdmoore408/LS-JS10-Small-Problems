/*
Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Problem

  Prompt the user for output for several words (could be different parts of speech), then output those words inside the story template

  Input:
    N/A to begin, then multiple strings entered by user as prompted

  Output:
    (SIDE EFFECT)  Output the strings the user input by filling the "blanks" the in template and outputting the entire text

  Notes:
    - Could define an object with prompt words as keys and iterate through that, reassigning the values for each to what the user's input

Example

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!

Data Structure
  Object (to associate parts of speech with the user's input)
  String

Algorithm
  Define an object with parts of speech for keys (values undefined)
  Iterate through the object's keys and ask the user to input that part of speech
  Save each answer in the object
  Use interpolation to output some text with the user's input in the text template

*/
function madLibs() {
  const rlSync = require('readline-sync');

  const words = {
    noun: null,
    verb: null,
    adjective: null,
    adverb: null,
  };

  for (let partOfSpeech in words) {
    words[partOfSpeech] = rlSync.question(`Enter a ${partOfSpeech}: `);
  }

  console.log(`Once there was a ${words.noun}. It liked to ${words.verb} ${words.adverb}, but only in ${words.adjective} circumstances.`);
}

madLibs();
