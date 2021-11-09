const rlSync = require('readline-sync');

const target = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);

const operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
const opText = (operation === "s" ? 'sum' : 'product');

let total = 1;

for (let num = 1; num <= target; num += 1) {
  if (num === 1 && operation === "s") continue;

  if (operation === "s") {
    total += num;
  } else {
    total *= num;
  }
}

console.log();
console.log(`The ${opText} of the integers between 1 and ${target} is ${total}.`);
