const addCharacters = function concatToString(str, charToAdd, amount, chaser = false) {
  let tail = null;
  
  if (chaser) {
    tail = str;
  }
  
  for (let added = 0; added < amount; added++) {
    str += charToAdd;
  }
  
  if (tail) {
    str += tail;
  }
  
  return str;
};

function logInBox(text) {
  const bannerWidth = text.length + 2; 
  
  const topAndBottom = addCharacters('+', '-', bannerWidth, true);
  const spacerRow = addCharacters('|', ' ', bannerWidth, true);
  
  console.log(topAndBottom);
  console.log(spacerRow);
  console.log(`| ${text} |`);
  console.log(spacerRow);
  console.log(topAndBottom);                                    
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
