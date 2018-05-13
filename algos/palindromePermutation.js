let testStr = "fffllf"
// Roughly all same run time

// console.time('My algo')
// palindromePermutation = str => {
//     if (!str) {
//         return false;
//     }
//     str = str.toLowerCase();
//     let flag = false;
//     let trueLength = str.length;
//     let counts = {};
//     for (let x=0; x<str.length; x++) {
//         if (str[x] !== " ") {
//             if (counts[str[x]] === undefined) {
//                 counts[str[x]] = 1;
//             }
//             else { counts[str[x]] += 1 };
//         }
//         else { trueLength -= 1 }
//     }
    
//     if (trueLength % 2 !== 0) { flag = true };
//     let trigger = false;
//     for (let key in counts) {
//         if (counts[key] % 2 !== 0) {
//             if (flag && !trigger) { trigger = true }
//             else { return false };
//         }
//     }
//     return true;
// }
// console.log(palindromePermutation(testStr))
// console.timeEnd('My algo')

// console.time('My algo')
// palindromePermutation = str => {
//     if (!str) {
//         return false;
//     }
//     str = str.toLowerCase();
//     let flag = false;
//     let counts = {};
//     for (let x=0; x<str.length; x++) {
//         if (str[x] !== " ") {
//             if (counts[str[x]] === undefined) {
//                 counts[str[x]] = 1;
//             }
//             else { counts[str[x]] += 1 };
//         }
//     }
    
//     for (let key in counts) {
//         if (counts[key] % 2 !== 0) {
//             if (flag) { return false }
//             else { flag = true };
//         }
//     }
//     return true;
// }
// console.log(palindromePermutation(testStr))
// console.timeEnd('My algo')

// console.time('other algo')

// var palinPerm = function(string) {
//     // create object literal to store charcount
//     var chars = {};
//     var currChar;
//     var mulligan = false;
//     var isPerm = true;
//     // pump characters in, spaces not counted, all lowercase
//     string.split('').forEach((char) => {
//       if (char !== ' ') {
//         currChar = char.toLowerCase();
//         if (chars[currChar] === undefined) {
//           chars[currChar] = 0;
//         }
//         chars[currChar]++;
//       }
//     });
//     // check that all chars are even count, except for one exception
//     Object.keys(chars).forEach((char) => {
//       if (chars[char] % 2 > 0) {
//       // if more than one exception, return false
//         if (mulligan) {
//           isPerm = false; // return in a forEach statment doesn't flow out of function scope
//         } else {
//           mulligan = true;
//         }
//       }
//     });
//     // if not return true
//     return isPerm;
//   };
  
//   // TESTS
//   console.log(palinPerm(testStr));
//   console.timeEnd('other algo')

  console.time("set algo")
  function isPalindromePermutationsSet(str) {
    if (!str) {
      return false;
    }
  
    let chars = new Set();
    for (let char of str) {
      if (char !== ' ') { // ignore spaces
        if (chars.has(char)) {
          chars.delete(char);
        }
        else {
          chars.add(char);
        }
      }
    }
  
    return chars.size <= 1;
  }
  console.log(isPalindromePermutationsSet(testStr))
  console.timeEnd("set algo")