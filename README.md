# What are "Iterables" and "Array-like Objects"?

## Iterables

-  Can use a for-of loop on it
-  Not every iterable is an array!!! (e.g, NodeList, String, Map, Sets)

## Array-like Objects

-  Objects that have a length property and use indexes to access items
-  Other array-likes are: NodeList, Strings
   -  E.g: ` let word = "hello"; console.log(word[1]); //returns "e"`

## Ways of Creating Arrays

There are different ways of creating Arrays. However, the most interesting alternative is the `Array.from()` method.
`// Arrow function
Array.from(arrayLike, (element) => { /_ ... _/ } )
Array.from(arrayLike, (element, index) => { /_ ... _/ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { /_ ... _/ })
Array.from(arrayLike, function mapFn(element, index) { /_ ... _/ })
Array.from(arrayLike, function mapFn(element) { /_ ... _/ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /_ ... _/ }, thisArg)
`

## Questions

-  the new keyword?
-  fixed length array? when will you need this?

## More information

-  `Array.from()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
