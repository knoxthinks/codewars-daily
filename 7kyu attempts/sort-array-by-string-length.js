// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
  };

  //Paramters: array of strings
  //return: sorted array, shortest to longest
  //example: above.
  //pseudo code: find the length of the string
  //             sort them by length

function sortByLength (arrayOfStrings) {
    return arrayOfStrings.sort(a,b => a.length - b.length)
}

//notes: I had to know that a-b sorts smallest to largest
//       Had to know that the string method .length, gave you the length
//       Had to know the array method .sort