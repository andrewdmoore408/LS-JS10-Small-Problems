/*
Caesar Cipher

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Problem
  Given a string and a key, return the string shifted over as many letters as the key
  
  Input
    string plaintext 
    integer key (number of letters to shift)
    
  Output
    string ciphertext (input string shifted over the key number of letters)
    
  Notes:
    - key can be zero
    - don't change any chars which aren't a letter
    - keep case the same for letters: 
      - shifted lowercase is still lower, shifted uppercase is still upper
    - if shift would go past end of alphabet, wrap back around
    
  Questions:
    - can key be negative? or a different type other than number?
      - CHOICE: different type for key: return null;
      - what if key is a float?
        - CHOICE: truncate float and use that integer
      - if negative key, are we left-shifting?
        - CHOICE: negative key means a left shift (rather than right)
      - can key be NaN? 
        - CHOICE: no, key will never be NaN

Examples (see below)

Data Structures
  String (input and output)

Algorithm
  Validate input
    - plaintext (firstArg)
      - If plaintext isn't a string, return null
      - If plaintext is empty, return an empty string
    - key (secondArg)
      - if key isn't a number, return null
      - use Math.floor to truncate positive integer, Math.ceil to truncate negative
integer
      - if key is 0, return plaintext
  Transform the string char by char
    - keep non-letters the same
    - if a letter, shift left (if negative) or right (if positive)
    - HELPER FUNCTION:
      - input: letter and shift
        - if shift > 25, use shift modulo 25 
        - if shift is negative, add it to 26 (to get forward shift)
        - get currentCharCode from current letter, make new letter adding shift to currentCharCode
        - return new letter
        
  Return new string (transformed from input)
*/

function getShiftedLetter(letter, shift) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const LETTERS_IN_ALPHABET = 26
  
  while (shift < 0) {
    shift += LETTERS_IN_ALPHABET;
  }

  shift = shift % LETTERS_IN_ALPHABET;
  
  let index = (UPPERCASE.indexOf(letter.toUpperCase()) + shift) % LETTERS_IN_ALPHABET;
  
  if (/[A-Z]/.test(letter)) {
    return UPPERCASE[index];
  } else {
    return LOWERCASE[index];
  }  
}

// console.log(getShiftedLetter('y', 0)); // 'y'
// console.log(getShiftedLetter('Z', -1)); // 'Y'
// console.log(getShiftedLetter('A', 25)); // 'Z'
// console.log(getShiftedLetter('A', 26)); // 'A'
// console.log(getShiftedLetter('a', 5)); // 'f'
// console.log(getShiftedLetter('a', 25)); // 'z'
// console.log(getShiftedLetter('a', 26)); // 'a'
// console.log(getShiftedLetter('A', -1)); // 'Z'
// console.log(getShiftedLetter('a', -1)); // 'z'
// console.log(getShiftedLetter('A', -19)); // 'H'
// console.log(getShiftedLetter('a', -19)); // 'h'
// console.log(getShiftedLetter('A', -26)); // 'A'
// console.log(getShiftedLetter('a', -26)); // 'a'

function caesarEncrypt(plaintext, key) {
  if (typeof plaintext !== 'string' || typeof key !== 'number') return null;
  if (plaintext === '') return '';
  if (key === 0) return plaintext;
  key = (key < 0) ? Math.ceil(key) : Math.floor(key);
  
  let ciphertext = '';
  
  for (let i = 0; i < plaintext.length; i += 1) {
    let currentChar = plaintext[i];
    
    if (/[^A-Za-z]/.test(currentChar)) {
      ciphertext += currentChar;
    } else { 
      ciphertext += getShiftedLetter(currentChar, key);
    }
  }
  
  return ciphertext;
}

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// negative key means left-shifting (instead of right)
console.log(caesarEncrypt('A', -3));       // "X"
console.log(caesarEncrypt('Andrew', -3));       // "Xkaobt"
console.log(caesarEncrypt('Andrew', -29));       // "Xkaobt"

// empty string plaintext
console.log(caesarEncrypt('', 0));        // ''
console.log(caesarEncrypt('', 99));       // ''
console.log(caesarEncrypt('', -12));      // ''

// floats passed in: truncate and use integer as valid key
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25.1));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25.9999));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"

// // negative float needs to be handled
console.log(caesarEncrypt('Andrew', -29.8));    // "Xkaobt"

// // non-string for first argument (plaintext)
console.log(caesarEncrypt(['encode this text'], 3));  // null
console.log(caesarEncrypt({a: 1, b: 2}, 3));  // null

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
