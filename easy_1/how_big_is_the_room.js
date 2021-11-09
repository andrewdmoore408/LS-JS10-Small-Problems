const SQ_FEET_PER_SQ_METER = 10.7639;

const rlSync = require('readline-sync');

const unit = rlSync.question('Input in meters or feet?\n');

const usingFeet = (unit === 'feet' || unit === 'Feet');
const alternateUnit = (usingFeet ? 'meters' : 'feet');

console.log(`Enter the length of the room in ${unit}:`);
const length = parseInt(rlSync.prompt(), 10);

console.log(`Enter the width of the room in ${unit}:`);
const width = parseInt(rlSync.prompt(), 10);

const area = width * length;

const alternateArea = function() {
  if (usingFeet) {
    return area / SQ_FEET_PER_SQ_METER;
  } else {
    return area * SQ_FEET_PER_SQ_METER;
  }
}();

console.log(`The area of the room is ${area.toFixed(2)} square ${unit} (${alternateArea.toFixed(2)} square ${alternateUnit}).`);
