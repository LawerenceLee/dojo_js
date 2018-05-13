// const str1 = "abcdefghijklmnopqrstuvwxyza";
// const str2 = "nopqrstuvwxyzaabcdefghijklm";

const str1 = "abcdefghijklmnopqrstuvwxyza";
const str2 = "nopqrstuvwxyzaabcdefghijklm";


// console.time('Map Algo') // Ave Speed 3.9ms
// mapCheckPerm = (str1, str2) => {
//   if (str1.length === 0 || str1.length !== str2.length) {
//     return false
//   }

//   let chars = new Map();

//   for (let i=0; i<str1.length; ++i) {
//     chars.set(str1[i], chars.get(str1[i]) + 1 || 1)
//   }

//   for (let i=0; i< str2.length; ++i) {
//     let count = chars.get(str2[i])
//     if (!count) {
//       return false
//     }
//     if (count === 1) {
//       chars.delete(str2[i])
//     }
//     else {
//       chars.set(str2[i], count-1)
//     }
//   }
//   return chars.size === 0;
// }
// console.log(mapCheckPerm(str1, str2))
// console.timeEnd('Map Algo')

console.time("My 2 Algo") // Ave Speed 3.7ms
checkPerm = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let counts = {};
  for (let x=0; x<str1.length; x++) {
    if (counts[str1[x]] === undefined) {
      counts[str1[x]] = 1
    }
    else {
      counts[str1[x]] += 1;
    }
  }

  for (let y=0; y<str2.length; y++) {
    if (counts[str2[y]] === undefined) {
      return false;
    }
    else {
      counts[str2[y]] -= 1;
      if (counts[str2[y]] < 0) {
        return false
      }
    }
  }
  return true
}

console.log(checkPerm(str1, str2))
console.timeEnd("My 2 Algo")

// console.time("My 1 Algo") // Ave Speed 3.9ms
// checkPerm = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let counts = {};
//   for (let x=0; x<str1.length; x++) {
//     if (counts[str1[x]] === undefined) {
//       counts[str1[x]] = {str1: 1, str: 0}
//     }
//     else {
//       counts[str1[x]].str1 += 1;
//     }
//   }

//   for (let y=0; y<str2.length; y++) {
//     if (counts[str2[y]] === undefined) {
//       return false;
//     }
//     else {
//       counts[str2[y]] += 1;
//       if (counts[str2[y].str1 < counts[str2[y].str2]]) {
//         return false
//       }
//     }
//   }
//   return true
// }

// console.log(checkPerm(str1, str2))
// console.timeEnd("My 1 Algo")





// console.time('Sort Algo') // Ave. Speed 4.5ms
// var checkPermute = function(stringOne, stringTwo) {
//   // if different lengths, return false
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//   // else sort and compare 
//   // (doesnt matter how it's sorted, as long as it's sorted the same way)
//   } else {
//     var sortedStringOne = stringOne.split('').sort().join('');
//     var sortedStringTwo = stringTwo.split('').sort().join('');
//     return sortedStringOne === sortedStringTwo;
//   }
// };

// // Tests
// console.log(checkPermute(str1, str2));
// console.timeEnd('Sort Algo')