// //Creating Arrays
// //There are many ways of creating Arrays
// //one way --> using square bracket notation
// const numbers = [1, 2, 3];
// console.log(numbers);
// // another way --> using the new keyword
// //creates a new array
// const letters = new Array("a", "b", "c");
// console.log(letters); //["a", "b", "c"]
// //but passing a number in the parameter  does something strange
// const moreNumbers = new Array(5);
// console.log(moreNumbers); // [returns <5 empty items>] --> returns an empty array with a fixed length of 5 O.o
// // way 1,000
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);
// //MORE USEFUL METHOD
// //this takes an iterable or an array-like object
// const animal = Array.from("cat");
// console.log(animal); // returns ["c", "a", "t"]

// const listItems = document.querySelectorAll("li");
// console.log(listItems);
// // converts node list to real array
// const nodeListToArray = Array.from(listItems);
// //list of li elements and its corresponding properties
// console.log(nodeListToArray);
// //accessig the text of the li element at index 0
// console.log(nodeListToArray[0].innerHTML);

// //storing data
// //Arrays of the same type
// const hobbies = ["Cooking", "Sports"];
// //Arrays of different types
// const personalData = [30, "max", { moreDetail: [] }];
// //nested arrays
// const analyticsData = [
//    [1, 1.6],
//    [-5.4, 2.1],
// ];

// //loop over outer array
// for (data of analyticsData) {
//    //loops over inner array
//    for (pointData of data) {
//       console.log(pointData);
//    }
// }

// //manipulating data in arrays
// let food = ["apple", "pear"];
// console.log("original array:");
// console.log(food);

// food.push("doughnuts");
// console.log(`food ${food[food.length - 1]} added to end of list `);
// console.log(food);

// food.unshift("chips");
// console.log(`food ${food[0]} added to start of list `);
// console.log(food);

// food.shift();
// console.log(`food at start of list removed `);
// console.log(food);

// food.pop();
// console.log(`last food in list removed`);
// console.log(food);

// console.log("value at index 1 has been changed.");

// food[0] = "oranges";
// console.log(food);

// // using splice
// const hobby = ["sports", "cooking", "coding"];
// // to insert elements
// //adds fishing into index 1
// hobby.splice(1, 0, "fishing");
// console.log(hobby); // returns  [ "sports", "fishing", "cooking", "coding" ]

// //adds "cleaning" to index 1 and replaces shifted "fishing" to "trapping"
// hobby.splice(1, 0, "cleaning", "trapping");
// console.log(hobby); //returns [ "sports", "cleaning", "trapping", "cooking", "coding" ]

// //deletes items from and including index 0 with a delete count of 3
// hobby.splice(0, 3);
// console.log(hobby); //returns [ "fishing", "cooking", "coding" ]

// //starts at end of array and deletes from and including last index 1 element
// hobby.splice(-2, 1);
// console.log(hobby); // returns [ "fishing", "cooking" ]

// // uncomment me:
// //removes second to last element
// // hobby.splice(-2, 1);
// // console.log(hobby); // returns ["fishing, "coding"]

// //delete items
// hobby.splice(0);
// console.log(hobby); //returns [ ]

//Selecting copies and creating copies with slice
const grades = ["A", "A", "C", "B", "D", "E"];
const copyOfGrades = grades.slice();
console.log(copyOfGrades);
// returns an exact copy of grades array but it is not the original

const AGrades = copyOfGrades.slice(0, 1);
// returns new array with 1 element copied at index 0
console.log(AGrades); //returns ["A"]

//does not include 3'd index (think of it as a count)
//for example, "from index zero, I want you to copy 3 elements"
const threeGrades = copyOfGrades.slice(0, 3); //returns ["A", "A", "C"]
console.log(threeGrades);

const moreGrades = copyOfGrades.slice(2, 3);
console.log(moreGrades); //returns ["C"]
//if i did copyOfGrades.slice(2, 1), it would return an empty array

const copyingGradesFromLastArray = copyOfGrades.slice(-2, -1);

//fromt the third last element to the last element but new array DOES NOT INCLUDE last element
//returns ["B", "D"]

console.log(copyingGradesFromLastArray);

//Retrieving indexes with indexOf() and lastIndexOf()

const names = ["Pop Smoke", "Nas", "J Cole", "Tupac", "Doja Cat", "Kendrick"];

const foundTupacIndex = names.indexOf("Tupac"); //returns 3

console.log(foundTupacIndex);
// index of returns number. if it reurns -1 then item not found

//indexOf(searchElement, fromIndex)

const findColeFrom = names.indexOf("J Cole", 4);

console.log(findColeFrom);
// returns -1 because J Cole cannot be found form Index 4

//MDN docs example
//finding the occurance of an element

const array = ["dog", "cat", "cat", "fish", "cat", , "snake", "snail"];

const indicesOfCats = [];
const element = "cat";

let indexOfEachCat = array.indexOf(element);

while (indexOfEachCat != -1) {
   //put the index of cat in the indicesOfCats array
   indicesOfCats.push(indexOfEachCat);
   //find "cat" from next index (thats why we increment by + 1)
   indexOfEachCat = array.indexOf(element, indexOfEachCat + 1);
}

console.log(indicesOfCats); // returns [ 1, 2, 4 ]

/// finding stuff --> when index of does not work

const profile = [{ name: "Max" }, { name: "Manuel" }];

// method 1 --> findIndex

// find index of element that has a name property equal to "Manuel"
const found = profile.findIndex((element) => element.name === "Manuel");

console.log(found);

//method two --> find

//third argument passes full array
const foundAgain = profile.find((person, index, persons) => {
   return person.name === "Manuel";
});

//important ---> find does not create a copy
console.log(foundAgain);

//// for each

const prices = [10.99, 5.99, 3.99, 6.59];
