// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.sort((a,b) => a-b);
  }

//parameter: 2 dimensional array?
//return: flattened version of array
//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//pseudo:
//make the inner arrays one big array
//sort that big array
//how do we make an array of arrays an array?

//function flattenAndSort(array) {
//     return array
//     .reduce((result, current) => [...result, ...current],[])
//     .sort((a, b) => a - b)
//     ;
// }

//notes: i still have no idea what [..result, ...current] means.
// i have to ask about the english definition of what ... means. this is popping up more than i'd like