// 1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = String(9); // Cannot assign type Number to a variable of type string


// 2. Setting the types for function parameters
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(String(9))); // Cannot assign type Number to a paramerter of type string


// 3. Optional parameters
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", "Jeffries")); // Expected three args not two


// 4. Interfaces and function parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay)); // Type checking of objects down to the presence keys and thier types


 // 5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Mr. ", "Shane"); // Ninjas are not callable, need to use keyword new
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
//  const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
//  }
 const turing = new Ninja("Alan", "Turing")
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing)); // Turing is not of type Ninja


// 6. Arrow functions
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y; // Missing parens for parameters
// Nor is this working:
var math = (x, y) => {let sum = x + y; // Missing curly braces
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}