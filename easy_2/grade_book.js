/*
Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Problem
  Given an array of three numeric scores, return the letter grade associated with the mean

  Input
    3 numbers (individual nums) between 0 and 100

  Output
    letter: a single character corresponding to the arithmetic mean of the 3 input values

  Questions:
    - is input guaranteed to be exactly 3 scores? Are fewer or more values possible?
      - could they be passed in an array?
      - what should be returned if not all of them are numeric?
        - problem text says no


Examples (see below)

Data Structures
  String (single character)

Algorithm
  Add the three inputs together and divide them by 3 (arithmetic mean)
  Find the letter which corresponds to the resulting score
  Return the letter
  */
const getGradeLetter = ((mean) => {
  const LOOKUP = {
    A: [90, 100],
    B: [80, 89],
    C: [70, 79],
    D: [60, 69],
    F: [0, 59]
  };

  return function (mean) {
    const grade = Object.entries(LOOKUP).filter(([letter, grades]) => grades[0] <= mean && grades[1] >= mean)[0][0];

    return grade;
  };
})();

const getGrade = (...scores) => {
  const mean = scores.reduce((total, score) => total + score) / (scores.length);

  return getGradeLetter(mean);
  // if (mean >= 90) {
  //   return 'A';
  // } else if (mean >= 80) {
  //   return 'B';
  // } else if (mean >= 70) {
  //   return 'C';
  // } else if (mean >= 60) {
  //   return 'D';
  // } else {
  //   return 'F';
  // }
};

console.log(getGrade(75, 75, 75));    // 'C'
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(80, 93, 82));    // "B"
console.log(getGrade(80, 20, 62));    // "F"