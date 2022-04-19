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

const listItems = document.querySelectorAll("li");
console.log(listItems);
// converts node list to real array
const nodeListToArray = Array.from(listItems);
//list of li elements and its corresponding properties
console.log(nodeListToArray);
//accessig the text of the li element at index 0
console.log(nodeListToArray[0].innerHTML);

//storing data
//Arrays of the same type
const hobbies = ["Cooking", "Sports"];
//Arrays of different types
const personalData = [30, "max", { moreDetail: [] }];
//nested arrays
const analyticsData = [
   [1, 1.6],
   [-5.4, 2.1],
];

//loop over outer array
for (data of analyticsData) {
   //loops over inner array
   for (pointData of data) {
      console.log(pointData);
   }
}

//manipulating data in arrays
let food = ["apple", "pear"];
console.log("original array:");
console.log(food);

food.push("doughnuts");
console.log(`food ${food[food.length - 1]} added to end of list `);
console.log(food);

food.unshift("chips");
console.log(`food ${food[0]} added to start of list `);
console.log(food);

food.shift();
console.log(`food at start of list removed `);
console.log(food);

food.pop();
console.log(`last food in list removed`);
console.log(food);

console.log("value at index 1 has been changed.");

food[0] = "oranges";
console.log(food);
