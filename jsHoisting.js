// 1
// Before 
// console.log(hello);                                   
// var hello = 'world';                                 

// After
// var hello;
// console.log(hello);
// hello = 'world';


// 2
// Before
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// After
// var needle = 'haystack';
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// test();


// 3
// Before
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// After
// var brendan = 'super cool';
// console.log(brendan);
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }

// 4
// Before
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// After
// var food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();

// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// After
// mean();
// console.log(food);
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }

// 6
// Before
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// After
// var genre = "disco";
// console.log(genre);
// console.log(genre);
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }

// 7
// Before
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// After
// dojo = "san jose";
// console.log(dojo);
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// learn();
// console.log(dojo);

// 8 - Bonus ES6: const
// Before
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// After 
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }