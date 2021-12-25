// Seeing Stars

// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Problem
  Given an odd integer, display an 8-pointed star in a grid the size of the input. 
  
  Input
    integer (no lower than 7)
    
  Output
    SIDE EFFECT: log 8-pointed star
    
  Notes:
    - smallest star we need to handle is 7x7, but is that the smallest input we'll receive?
    - is input guaranteed to be a number/integer? What else could be passed in as an argument?
    - input number is width of each column and total height of star
    - What to do if input isn't an odd integer? Output an error message? Something else?
    - output pattern for star:
      - center row has n number of stars
      - rows above and below have 3 stars (centered)
      - rows above and below the 3-star rows also have 3 stars: middle is centered; side stars have one space between them in the row next to the center-adjacent row, then 2 spaces between each, and so on
      - top and bottom rows have a star, then (n - 3) / 2 spaces, then star, then (n - 3) / 2 spaces, then star  
      - top and bottom half of star are exactly the same, with center spacer in between
    - could generate an array of rows for top down, then all n stars, then reverse most of array and concat it
    - is there a top bound to argument? What if 200 is passed in? Perhaps 60 or 80 would be a good upper limit?

Examples
  star(11);
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    * 

Data Structures
  Array (generate rows and put them in an array)

Algorithm
  Validate input:
    - return null if input is not a number; is < 7; isn't odd? Or an error message? (would ask this)
  Generate top half
    - initialize empty array to hold result
    - build top half line by line
      - begin with outerSpaces = 0, innerSpaces = (n - 3) / 2
      - add line to array: outerSpaces spaces, star, innerSpaces spaces, star, innerSpaces, star
      - subtract one from innerSpaces and add one to outerSpaces
      - repeat until innerSpaces == 0
  Add full line (n number of stars) to array
  Add the reversed top half to array
  Output each row
*/

function star(size) {
  if (typeof size !== 'number' || size < 7 || size > 50 || size % 2 !== 1) {
    console.log('Invalid argument: must be an odd integer between 7 and 50 (inclusive).');
    return;
  }
  
  let outerSpaces = 0;
  let innerSpaces = (size - 3) / 2;
  
  const topHalf = [];
  
  do {
    topHalf.push(`${' '.repeat(outerSpaces)}*${' '.repeat(innerSpaces)}*${' '.repeat(innerSpaces)}*`);
    outerSpaces += 1;
    innerSpaces -= 1;
  } while (innerSpaces >= 0);
  
  let rows = topHalf.slice();
  topHalf.reverse();
  
  const centerRow = '*'.repeat(size);
  
  rows.push(centerRow);
  rows = rows.concat(topHalf);
  
  rows.forEach(row => console.log(row));
}

star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
  
  star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(47);
