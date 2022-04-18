# What are "Iterables" and "Array-like Objects"?

## Iterables

-  Can use a for-of loop on it
-  Not every iterable is an array!!! (e.g, NodeList, String, Map, Sets)

## Array-like Objects

-  Objects that have a length property and use indexes to access items
-  Other array-likes are: NodeList, Strings
   -  E.g: ` let word = "hello"; console.log(word[1]); //returns "e"`
