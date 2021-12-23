/*
How Old is Teddy

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

Teddy is 69 years old!

Problem
  Choose a random number between (20..200) inclusive and output it in a message saying 'Teddy is X years old!'

  Input
    None

  Output
    String

  Notes
    - generate random number from 20-200
    - output it as part of a string

Examples
  'Teddy is 49 years old!'
  'Teddy is 200 years old!'
  'Teddy is 20 years old!'

Data Structures
  String

Algo
  Generate a random number 20 <= x <= 200
  Interpolate it into the string template and log it
*/

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const logTeddyAge = (min, max) => {
  if (max < min) [min, max] = [max, min];
  console.log(`Teddy is ${getRandomNum(min, max)} years old!`);
}

logTeddyAge(20, 200);
logTeddyAge(200, 20);
logTeddyAge(20, 200);
logTeddyAge(20, 200);
logTeddyAge(20, 200);
logTeddyAge(20, 200);
logTeddyAge(20, 200);

// Further exploration: The Math.round() function could lead to the range being off by one, possibly return 201 depending on the number that's returned. This is because it will round up as well as down, where Math.floor() only rounds down

// To make the function more robust, we can switch the local variables inside logTeddyAge if max is lower than min before invoking getRandomNum