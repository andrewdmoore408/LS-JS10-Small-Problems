/*
Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Problem

  Given a positive integer, log a right triangle whose sides each have the input's number of stars. The right angle should be at the bottom-right of the triangle as it's output on the screen

  Input:
    integer (length of each side in stars)

  Output:
    (SIDE EFFECT) a right triangle logged to the console with its right angle on the bottom right

  Notes:
    - first row has n - 1 spaces, then 1 star
    - second row has n - 2 spaces, then 2 stars
    - pattern continues until there are no spaces and n stars
    - can begin a for loop at 1 and increment it
      - loop index will be number of stars to output, and inputNum minus loop index will be number of spaces to precede the stars

Examples (see below)

Data structure
  Number

Algorithm
  Begin iterating from 1 to inputNum
  With each iteration, output inputNum - currentNum spaces and currentNum stars
*/

const triangle = (sideLength) => {
  for (let index = 1; index <= sideLength; index += 1) {
    console.log(`${' '.repeat(sideLength - index)}${'*'.repeat(index)}`);
  }
};

triangle(5);
/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/