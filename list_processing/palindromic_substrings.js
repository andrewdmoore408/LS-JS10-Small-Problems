function leadingSubstrings(str) {
  return str.split('')
            .map((_, index, arr) => arr.slice(0, index + 1).join(''));
}

function substrings(str) {
  return str.split('')
            .flatMap((_, index) => leadingSubstrings(str.slice(index)));
}

function isPalindrome(phrase) {
  return (phrase.length > 1) && (phrase === phrase.split('').reverse().join(''));
}

function palindromes(phrase) {
  const substrs = substrings(phrase);
  
  return substrs.filter(substr => isPalindrome(substr));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
