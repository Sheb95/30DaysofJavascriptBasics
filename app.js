//Creating Arrays
//There are many ways of creating Arrays
//one way --> using square bracket notation
const numbers = [1, 2, 3];
console.log(numbers);
// another way --> using the new keyword
//creates a new array
const letters = new Array("a", "b", "c");
console.log(letters); //["a", "b", "c"]
//but passing a number in the parameter  does something strange
const moreNumbers = new Array(5);
console.log(moreNumbers); // [returns <5 empty items>] --> returns an empty array with a fixed length of 5 O.o
// way 1,000
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);
//MORE USEFUL METHOD
//this takes an iterable or an array-like object
const animal = Array.from("cat");
console.log(animal); // returns ["c", "a", "t"]
// takes in
