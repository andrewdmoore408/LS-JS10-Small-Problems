/*
When Will I Retire

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Problem
  Prompt the user for their current age and when they'd like to retire, then output a message saying the current year, their year of retirement, and how many years of work they have left (see example)

Example
  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!
*/

const rlSync = require('readline-sync');

function whenWillIRetire() {
  const currentAge = Number(rlSync.question('What is your age? '));
  const retirementAge = Number(rlSync.question('At what age would you like to retire? '));

  const yearsLeft = retirementAge - currentAge;
  const currentYear = 2021;

  console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
  console.log(`You have only ${yearsLeft} years of work to go!`);
}

whenWillIRetire();