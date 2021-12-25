/*
1000 Lights

You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Problem
  Given an input integer n, output an array of the lights (1-indexed) that are on after going through all lights and toggling them n times
  
  Input
    number (integer): n
    
  Output
    array (of integers: numbers of switches that are on after making n passes through all the lights): lightsOn
    
  Notes:
    - lights begin at 1, NOT zero!
    - all switches/lights are off initially
    - each pass begins at currentNum and adds that same initialNum to itself: begin at 1, add 1 to get to next light: 1 -> 2 -> 3 -> 4...; beginning at 4, add 4 each time: 4 -> 8 -> 12 -> 16...
    - light 1 will always be on; 2 will always be off
    - odd plus odd is even; even plus even is even; odd plus even is odd
    - for a positive integer n, output is all numeric squares up to and including n

Examples
  - do we need to validate input?
    - will input always be present? 
    - could the input be non-numeric? or zero or negative?
      - if so, what should we do in that case?
        - could return an empty for input < 1: no lights will be on
        - could return undefined or error msg for non-numeric input
        
  lightsOn(7);
// Round 1: all lights are on
// Round 2: 1, 3, 5, 7 on
// Round 3: 1, 5, 6, 7 on
// Round 4: 1, 4, 5, 6, 7 on
// Round 5: 1, 4, 6, 7 on
// Round 6: 1, 4, 7 on
// Round 7: 1, 4 on
// Final output: [1, 4]
  
  lightsOn(8);
// Round 1: all lights are on
// Round 2: 1, 3, 5, 7 on
// Round 3: 1, 5, 6, 7 on
// Round 4: 1, 4, 5, 6, 7, 8 on
// Round 5: 1, 4, 6, 7, 8 on
// Round 6: 1, 4, 7, 8 on
// Round 7: 1, 4, 8 on
// Round 8: 1, 4 on
// Final output: [1, 4]
  
  lightsOn(10);
// Round 1: all lights are on
// Round 2: 1, 3, 5, 7, 9 on
// Round 3: 1, 5, 6, 7 on
// Round 4: 1, 4, 5, 6, 7, 8 on
// Round 5: 1, 4, 6, 7, 8, 10 on
// Round 6: 1, 4, 7, 8, 10 on
// Round 7: 1, 4, 8, 10 on
// Round 8: 1, 4, 10 on
// Round 9: 1, 4, 9, 10 on
// Round 10: 1, 4, 9 on
// Final output: [1, 4, 9]
  
  lightsOn(11);
// Round 1: all lights are on
// Round 2: 1, 3, 5, 7, 9, 11 on
// Round 3: 1, 5, 6, 7, 11 on
// Round 4: 1, 4, 5, 6, 7, 8, 11 on
// Round 5: 1, 4, 6, 7, 8, 10, 11 on
// Round 6: 1, 4, 7, 8, 10, 11 on
// Round 7: 1, 4, 8, 10, 11 on
// Round 8: 1, 4, 10, 11 on
// Round 9: 1, 4, 9, 10, 11 on
// Round 10: 1, 4, 9, 11 on
// Round 11: 1, 4, 9 on
// Final output: [1, 4, 9]

Data Structures
  Number (valid would be a positive integer)
  Array (of numbers representing switches on)

Algorithm

  Validate input
    - if input isn't a positive integer, return an empty array
  Generate a list of squares up to and including input
    Iterate from 1 through inputNum
      - if currentNum squared <= inputNum, add it to list of squares
      - when currentNum squared > inputNum, break
  Return this list
  
*/

// function lightsOn(switches) {
//   if (typeof switches !== 'number' || switches < 1) return [];
  
//   const lightsOn = [];
  
//   for (let currentNum = 1; currentNum < switches; currentNum += 1) {
//     let currentSquare = currentNum * currentNum;
    
//     if (currentSquare <= switches) {
//       lightsOn.push(currentSquare);
//     } else {
//       break;
//     }
//   }
  
//   return lightsOn;
// }

// console.log(lightsOn('nine lights')); // []
// console.log(lightsOn(-4)); // []
// console.log(lightsOn(0)); // []
// console.log(lightsOn([null, undefined, 14])); // []
// console.log(lightsOn(5));   // [1, 4]
// console.log(lightsOn(7)); // [1, 4]
// console.log(lightsOn(8)); // [1, 4]
// console.log(lightsOn(10)); // [1, 4, 9]
// console.log(lightsOn(11)); //[1, 4, 9]
// console.log(lightsOn(99)); 
// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// console.log(lightsOn(3000));

// brute force approach
/*
Algo
  
  Validate input: return [] if not a number or less than 1
  
  generate array of each number from 1 to input; set 0 to undefined and 1..end to false
  Iterate from 1 to n
    For each num:
      Beginning with currentNum, toggle that array element and add index to currentNum through entire array, toggling each index each time
  Return the array indexes which are currently true
    - iterate through the array (after all toggles are done) and push the currentIndex to a new array if its element is true
  
  Helper function: toggle the array index
*/
function toggleAt(array, index) {
  if (index > array.length - 1) return;
  
  array[index] = !array[index]; 
}

function generateLights(num) {
  const lights = [null];
  
  for (let index = 1; index <= num; index += 1) {
    lights.push(false);
  }
  
  return lights;
}

function lightsOn(switches) {
  if (typeof switches !== 'number' || switches < 1) return [];
  
  const lights = generateLights(switches);
  
  for (let index = 1; index <= switches; index += 1) {
    let currentNum = index;
    
    while (currentNum <= switches) {
      toggleAt(lights, currentNum);
      currentNum += index;
    }
  }
  
  const currentlyOn = lights.map((light, index) => { if (light) return index});
  
  return currentlyOn.filter(element => element);
}

console.log(lightsOn(101));
