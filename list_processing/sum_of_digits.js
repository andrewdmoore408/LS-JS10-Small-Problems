function sum(number) {
  const digits = String(number).split('');
  
  const numericDigits = digits.map(digit => Number(digit));
  
  return numericDigits.reduce((total, digit) => total + digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
