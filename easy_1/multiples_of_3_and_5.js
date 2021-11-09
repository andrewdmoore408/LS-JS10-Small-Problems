function multisum(max) {
  let sum = 0;

  for (let currentNum = 3; currentNum <= max; currentNum += 1) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
