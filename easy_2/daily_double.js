// Ddaaiillyy ddoouubbllee

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let crunched = '';

  for (let index = 0; index < str.length; index += 1) {
    if (index === 0) {
      crunched += str[index];
      continue;
    }

    if (str[index] === str[index - 1]) {
      continue;
    } else {
      crunched += str[index];
    }
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""