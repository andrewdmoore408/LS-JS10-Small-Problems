/*
Vigenere Cipher

The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don\'t go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

Problem
  Given a plaintext string and a keyword, encrypt the plaintext using a cipher of letter shifts based on the keyword input. Each letter of the plaintext should be shifted a number of letters that matches the current letter of the keyword (e.g., char 'a' represents no shift since it's at index 0; char 'e' represents a shift of 4 letters). Only alphabetic letters should be shifted, and when all letters of the keyword have been used, begin again at the beginning of the keyword
  
  Input
    plaintext (string, the message to be encrypted)
    keyword (string, the letters to use to determine the shift for each letter)
    
  Output
    ciphertext (string: the message after it's been encrypted)
    
  Notes
    - keyword isn't case-sensitive: the shift each letter indicates is the same regardless of its case
    - the ciphertext cases should match their original input: if a letter is lowercase in plaintext, it should be lower in ciphertext as well (and vice versa for ciphertext)
    - expecting two strings for arguments
    - non-alphabetic chars should not be altered, including spaces

Examples

vigenereEncrypt(['Pineapples don't go on pizzas!'], 'meat');             
// TypeError raised
vigenereEncrypt(['Pineapples don't go on pizzas!'], {keyword: 'meat'}); 
// TypeError raised
vigenereEncrypt(['Pineapples don't go on pizzas!'], 14); 
// TypeError raised
vigenereEncrypt(['Pineapples don't go on pizzas!'], NaN); 
// TypeError raised
vigenereEncrypt('Pineapples don't go on pizzas!', ''); 
// Pineapples don't go on pizzas!
vigenereEncrypt('', 'meat'); 
// '' (empty string)
vigenereEncrypt('Pineapples don't go on pizzas!', 'meat'); 
// Bmnxmtpeqw dhz'x gh ar pbldal!
vigenereEncrypt('Pineapples don't go on pizzas!', 'mEAt'); 
// Bmnxmtpeqw dhz'x gh ar pbldal!
vigenereEncrypt('Pineapples don't go on PIZZAS!', 'mEAt'); 
// Bmnxmtpeqw dhz'x gh ar PBLDAL!
vigenereEncrypt('&& (***)..!^', 'mEAt'); 
// && (***)..!^
vigenereEncrypt(['Shorter message'], 'aaaa'); 
// Shorter message
vigenereEncrypt(['Shorter message'], 'a'); 
// Shorter message
vigenereEncrypt(['Shorter message1234'], 'a'); 
// Shorter message1234

Data Structures
  String (inputs and output: plaintext message to encrypt; keyword to use for shifts; ciphertext to be returned)
  Array (of characters to use when transforming plaintext into ciphertext)
  
Algorithm
  Validate input
    - check that both input args are strings, raise an Error if incorrect type
    - if plaintext is empty string, return empty string
    - if keyword is an empty string, return plaintext as-is
  Transform the plaintext using the keyword (split into array of chars and transform it using helper function)
    - If character isn't a letter, add it as-is
    - If character is a letter
      - using current letter from keyword, get number to shift 
        - if we've reached the last keyword letter, begin again at the first letter of keyword
      - shift the current letter from plaintext that far and add this shifted letter (same case) to the transformed string
  Return ciphertext (join the array and return it)
*/
const getLetterIndex = (() => {
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  
  return (letter) => LOWERCASE.indexOf(letter.toLowerCase());
})();

const getShiftedLetter = (() => {
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const HIGHEST_INDEX = 26;
  
  return (letter, shiftNum) => {
    let currentIndex = getLetterIndex(letter);
    let shiftedIndex = currentIndex + shiftNum;
    if (shiftedIndex >= HIGHEST_INDEX) shiftedIndex %= HIGHEST_INDEX;
    
    if (/[a-z]/.test(letter)) {
      return LOWERCASE[shiftedIndex];
    } else {
      return UPPERCASE[shiftedIndex];
    }
  };
})();

function vigenereEncrypt(plaintext, keyword) {
  if (typeof plaintext !== 'string' || typeof keyword !== 'string') throw new TypeError('Both arguments must be strings!');
  if (plaintext === '') return '';
  if (keyword === '') return plaintext;
  
  let keywordIndex = 0;
  
  let ciphertext = plaintext.split('').map(char => {
    if (/[^a-z]/i.test(char)) return char;
    
    let shiftedLetter = getShiftedLetter(char, getLetterIndex(keyword[keywordIndex]));
    keywordIndex = keywordIndex === (keyword.length - 1) ? 0 : keywordIndex + 1;
    
    return shiftedLetter;
  });
  
  return ciphertext.join('');
}

// console.log(vigenereEncrypt(['Pineapples don\'t go on pizzas!'], 'meat'));             
// TypeError raised
// console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', {keyword: 'meat'})); 
// TypeError raised
// console.log(vigenereEncrypt(['Pineapples don\'t go on pizzas!'], 14)); 
// TypeError raised
// console.log(vigenereEncrypt(['Pineapples don\'t go on pizzas!'], NaN)); 
// TypeError raised
// console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', '')); 
// Pineapples don\'t go on pizzas!
console.log(vigenereEncrypt('', 'meat')); 
// '' (empty string)
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat')); 
// // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'mEAt')); 
// // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Pineapples don\'t go on PIZZAS!', 'mEAt')); 
// // Bmnxmtpeqw dhz'x gh ar PBLDAL!
console.log(vigenereEncrypt('&& (***)..!^', 'mEAt')); 
// // && (***)..!^
console.log(vigenereEncrypt('Shorter message', 'aaaa')); 
// // Shorter message
console.log(vigenereEncrypt('Shorter message', 'a')); 
// // Shorter message
console.log(vigenereEncrypt('Shorter message1234', 'a')); 
// // Shorter message1234
