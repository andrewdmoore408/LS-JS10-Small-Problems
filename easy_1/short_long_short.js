function shortLongShort(first, second) {
  let short = null;
  let long = null;
  
  if (first.length < second.length) {
    [short, long] = [first, second];
  } else {
    [short, long] = [second, first];
  }

  console.log(`${short}${long}${short}`); 
}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');
