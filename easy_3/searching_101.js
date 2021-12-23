/*
Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Problem
  Get six numbers from user and log whether or not the last number appeared in the first 5

Examples

  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 17

  The number 17 appears in [25, 15, 20, 17, 23].

  -----

  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 18

  The number 18 does not appear in [25, 15, 20, 17, 23].
*/

const rlSync = require('readline-sync');

const firstFiveNums = [];
let num;

for (let i = 0; i < 6; i += 1) {
  let prompt = {
    0: '1st',
    1: '2nd',
    2: '3rd',
    3: '4th',
    4: '5th',
    5: 'last'
  };

  num = rlSync.question(`Enter the ${prompt[i]} number: `);

  if (i < 5) firstFiveNums.push(num);
}

console.log(`The number ${num} ${firstFiveNums.includes(num) ? 'appears' : 'does not appear'} in [${firstFiveNums.join(', ')}]`);