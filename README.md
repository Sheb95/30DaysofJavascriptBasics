# What are "Iterables" and "Array-like Objects"?

## Iterables

-  Can use a for-of loop on it
-  Not every iterable is an array!!! (e.g, NodeList, String, Map, Sets)

## Array-like Objects

-  Objects that have a length property and use indexes to access items
-  Other array-likes are: NodeList, Strings
   -  E.g: ` let word = "hello"; console.log(word[1]); //returns "e"`

A NUMBER IS NOT ITERABLE!

## Ways of Creating Arrays

There are different ways of creating Arrays. However, the most interesting alternative is the `Array.from()` method which converts an array like object to an array

## Array.from

Is a method that creates a new array instance (shallow-copied) from an array-like or iterable object

method takes in three arguments:

-  an array like object (to convert into array)
-  a map function that can be called on every element of that converted array
-  thisArg: I am not sure what this does but according to the docs: "Value to use as this when executing mapFn."

## Experiments:

https://stackblitz.com/edit/js-8fm7cr?file=index.js

## Questions

-  the new keyword?
-  fixed length array? when will you need this?

## More information

-  `Array.from()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

## Data storage

-  Arrays are index based but the length of the array is not the same as the highest index of an array
-  you can have multi-dimentional arrays where arrays have different data types/ arrays nested in arrays

## Manipulating Arrays; Adding and Removing Data

-  array.push -> adds element to end of array
-  array.unshift -> adds element to start of an array
-  array.pop() -> removes last element from Array and returns it
-  array.shift -> removes first element in Array
-  because unshift and shift impacts all the elements in the array (shifting array left or right when executed), these methods are slower performance wise than push and pop
-  selecting direct index then change value `array[1] = "yay"`

## Splice

-  only can be applied to REAL ARRAYS
-  two different versions:
   -  1. `splice(start: number (from index), deleteCount? number (to index)): string[ ]` can be used to remove elements and replace them with a new element in their place. Returns deleted items
   -  2. `splice(start: number (from index), deleteCount? number (to index), ...items: string[ ] ): string[ ]` third argument adds items in that index place. (can also be used to replace)
-  splice(0) will delete all items up from that specific element
-  splice also works with a - ; goes to the last element of the array looks from the right

## Slice

-  ARRAYS ARE REFERENCE VALUES
-  returns a brand new array (can be used to copy)
-  can manipulate copy of array, meaning orginal array is not touched
-  copying part of array `slice(start? number, end?: number): number[ ]` --> returns new array which is copy of original

## Array Methods

Reduce --> `reduce((previousValue, currentValue, currentIndex, array)`

also
`reduce((previousValue, currentValue, currentIndex, array) => { /_ ... _/ }, initialValue)

reduce reduces an array to a simpler value

-  function called on each value
