let testTerm = "abcdef"

// console.time("My Algo") // Ave. Speed 3.5
// var allUniqueChars = function(string) { 
  
//     // O(n^2) approach, no additional data structures used
//     // for each character, check remaining characters for duplicates
//     for (var i = 0; i < string.length-1; i++) {
//       for (var j = i + 1; j < string.length; j++) {
//         if (string[i] === string[j]) {
//           return false; // if match, return false
//         }
//       }
//     }
//     return true; // if no match, return true
//   };

// console.log(allUniqueChars(testTerm))
// console.timeEnd("My Algo")



console.time("set algo")
isUnique = str => {
  if (!str) { return false };

  let unique = new Set();
  for (let letter of str) {
    if (unique.has(letter)) {
      return false;
    }
    else { unique.add(letter) }
  }
  return true;
}
console.log(isUnique(testTerm))
console.timeEnd("set algo")