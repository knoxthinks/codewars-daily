// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    // Return all non-odd values
  }

//parameters: an array of integers
//return: integers that are not odd
//example: not given. 1,2,3,4? return 2,4?
//pseudo code:
// iterate through the array with an array method
// if even, make new array
// probably filter() or map()

function foo(array){
    return array.filter((x) => x % 2 === 0)
}

//notes
//knowledge of the % 2 === 0 code. you can tell if a value is even.
//understand the array method .filter()