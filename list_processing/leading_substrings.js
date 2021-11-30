function leadingSubstrings(str) {
  return str.split('')
            .map((_, index, arr) => arr.slice(0, index + 1).join(''));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
