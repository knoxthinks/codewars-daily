// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){

}

//parameters: array a, limit value
//return: true or false. if ALL numbers are below limit value
//example?
//pseudo code
// check EVERY number if less than limit.
// if it is return true
// else false

function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

//notes: i got this one
// had to know the .every() array method
// had to read more carefully the question. "checks that ALL"
// had  x < limit  before i saw x <= limit as the issue