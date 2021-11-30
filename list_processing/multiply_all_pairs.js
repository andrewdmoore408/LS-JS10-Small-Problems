function multiplyAllPairs(firstArr, secondArr) {
  const products = firstArr.flatMap(firstNum => {
    return secondArr.map(secondNum => firstNum * secondNum);
  });
  
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
