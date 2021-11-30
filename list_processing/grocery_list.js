console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(array) {
  return array.reduce((list, [fruit, amountNeeded]) => {
    while (amountNeeded > 0) {
      list.push(fruit);
      amountNeeded -= 1;
    }
    
    return list;
  }, []);
}
