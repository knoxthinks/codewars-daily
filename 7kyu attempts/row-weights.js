// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
    //your code here
  }

//parameters: array of postive integers
//return: first goes to team 1, second goes to team 2
//        sum the totals of team 1 and team 2
//        new array with [team1total,team2total]
//example:
// pseudo code: 
//loop through the array             
//split them to team 1 and 2
//add them

function rowWeights(arr){
    const arr1 =[]
    const arr2 =[]
    for (i=0; i<arr.length; i++) 
}

//A:make two variables, filter out then reduce
//A:loop through all , if divisible by 2 add to variable position 1, if not add to variable position 2