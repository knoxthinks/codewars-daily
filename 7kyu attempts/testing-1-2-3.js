// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array){
    return array.split(',').map((elem,index) => elem.prepend(`${index}`))
   
}

number()
//parameters. an array
//return. return each line prepended by the correct number
//example. ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//pseudo code:
//go through each item in the array
//add the element position to each
//format to n: string

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

//NOTES:
//needed to understand that .map loops through and array
//did not need to split the array into substrings. 
//It was an array of strings, not 1 large string
//maintain best practice with .map(function (elem,index){})
