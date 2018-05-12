console.time("test")
checkPerm = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let counts = {};
  for (let x=0; x<str1.length; x++) {
    if (counts[str1[x]] === undefined) {
      counts[str1[x]] = {str1: 1, str: 0}
    }
    else {
      counts[str1[x]].str1 += 1;
    }
  }

  for (let y=0; y<str2.length; y++) {
    if (counts[str2[y]] === undefined) {
      return false;
    }
    else {
      counts[str2[y]] += 1;
      if (counts[str2[y].str1 < counts[str2[y].str2]]) {
        return false
      }
    }
  }
  return true
}



console.log(checkPerm('nnnnnn', 'nnnnnn'))
console.timeEnd("test")

console.time('test2')
var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
console.log(checkPermute('nnnnnn', 'nnnnnn'), true);
console.timeEnd('test2')