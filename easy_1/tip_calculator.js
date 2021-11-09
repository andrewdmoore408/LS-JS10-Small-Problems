const rlSync = require('readline-sync');

const calculateTip = (bill, percentage) => bill * (percentage / 100);
const calculateTotal = (bill, tip) => bill + tip;

const bill = parseInt(rlSync.question('What is the bill? '), 10);
const percentage = parseInt(rlSync.question('What is the tip percentage? '), 10);

const tip = calculateTip(bill, percentage);
const total = calculateTotal(bill, tip);

console.log();
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
