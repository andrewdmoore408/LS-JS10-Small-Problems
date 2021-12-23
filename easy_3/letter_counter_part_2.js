/*
Letter Counter Part 2

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
*/

function wordSizes(phrase) {
  if (phrase === '') return {};

  return phrase.split(' ').reduce((countObj, word) => {
    let onlyLettersLength = word.match(/[a-z]/gi).join('').length;

    if (countObj[onlyLettersLength]) {
      countObj[onlyLettersLength] += 1;
    } else {
      countObj[onlyLettersLength] = 1;
    }

    return countObj;
  }, {});
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}