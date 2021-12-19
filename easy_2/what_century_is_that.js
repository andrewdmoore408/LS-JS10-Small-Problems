/*
What Century is That

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Problem
  Given a year (a number), return a string containing which century that year falls in as well as the appropriate suffix for that number (e.g. "1st" has the suffix 'st'; "3rd" has the suffix 'rd', etc).

  Input
    number (need to validate?)

  Output
    string (containing the century and its appropriate suffix matching the number)

  Notes
    - teens have different suffixes; need to watch out for those
    - can split the numeric century calculation and the suffix appending
    - input validation?
      - is input guaranteed to be a number? Is a negative number possible?
      - how should the function behave if input isn't numeric?
    - centuries begin with year ending 01 and continue up until ending in 00
      - unless ending in 00, can get the relevant century by removing final two digits and adding one
    - need to handle fewer than 3 digits: should become 0, add 1 to get 1

Examples (see below)

Data Structures
  String

Algorithm
  Get 'century number': cardinal(?) number representing which century we're in
    Convert the number to a string
      Remove the rightmost two digits
        - If the rightmost two digits were '00', return the resulting number as is
        - else return the resulting number plus 1
  Get appropriate suffix for that number
    Use a lookup obj? or switch statement
      - teens are all 'th'
      - otherwise: ending in 1 gets 'st', 2 -> 'nd', 3 -> 'rd', and ending in 4-0 -> 'th'
  Combine the two into one string and return it
*/
function getCenturyNumber(number) {
  const end = String(number).slice(-2);
  const centuryNum = Number(String(number).slice(0, -2));

  if (end === '00') {
    return centuryNum;
  } else {
    return centuryNum + 1;
  }
}

function addSuffix(num) {
  let numberEnd;

  if (String(num).length >= 2) {
    numberEnd = String(num).slice(-2);
  } else {
    numberEnd = '0' + String(num).slice();
  }

  let centuryString = String(num);

  switch (true) {
    case (numberEnd[0] === '1'):
      centuryString += 'th';
      break;
    case (numberEnd[1] === '1'):
      centuryString += 'st';
      break;
    case (numberEnd[1] === '2'):
      centuryString += 'nd';
      break;
    case (numberEnd[1] === '3'):
      centuryString += 'rd';
      break;
    default:
      centuryString += 'th';
      break;
  }

  return centuryString;
}

function century(num) {
  return addSuffix(getCenturyNumber(num));
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"