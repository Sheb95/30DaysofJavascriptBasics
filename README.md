# What are "Iterables" and "Array-like Objects"?

## Iterables

-  Can use a for-of loop on it
-  Not every iterable is an array!!! (e.g, NodeList, String, Map, Sets)

## Array-like Objects

-  Objects that have a length property and use indexes to access items
-  Other array-likes are: NodeList, Strings
   -  E.g: ` let word = "hello"; console.log(word[1]); //returns "e"`

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
