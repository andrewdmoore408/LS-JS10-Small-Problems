/*
Running Totals

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Problem
  Given an array, return an array with the value of the running total (of the input array elements) as the element at each index
*/
const runningTotal = arr => {
  let total = 0;

  return arr.reduce((sumsList, currentElement) => {
    total += currentElement;
    sumsList.push(total);

    return sumsList;
  }, []);
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further exploration using map:
const runningTotalMap = arr => {
  let total = 0;

  return arr.map(currentElement => {
    total += currentElement;
    return total;
  });
};

console.log(runningTotalMap([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalMap([3]));                    // [3]
console.log(runningTotalMap([]));                     // []