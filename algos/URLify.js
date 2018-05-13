let testStr = "Mr. John Smith    "
let testLen = testStr.trim().length

// create empty str
// strip trailing white space off str
// for loop using the passed true val as a stopping condition
// if char is space insert %20 otherwise insert char

// console.time("str") // Ave Speed 2.7
// URLify = (str, len) => {
//     if(len === 0) {return str}
//     let newStr = "";
//     str = str.trim()
//     for (let x=0; x<len; x++) {
//         if (str[x] !== " ") {
//             newStr += str[x];
//         }
//         else {
//             newStr += "%20"
//         }
//     }
//     return newStr
// }
// console.log(URLify(testStr, testLen))
// console.timeEnd("str")

// strip trailing white space off str
// split str on each char
// for loop using the passed true len val as a stopping condition
// if char is space change char to %20 otherwise ignore

console.time('arr') // Ave Speed 2.7
URLify = (str, len) => {
    if(len === 0) {return str}
    str = str.trim();
    str = str.split("");
    for (let x=0; x<len; x++) {
        if (str[x] === " ") {
            str[x] = "%20"
        }
    }
    return str.join("");
}
console.log(URLify(testStr, testLen))