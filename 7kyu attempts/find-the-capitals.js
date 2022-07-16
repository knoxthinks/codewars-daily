// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
};

//Parameters: single string 'word'
//Return: an ordered list, with the indexs of all capital letters
//example: ( capitals('CodEWaRs'), [0,3,4,6] );
//pseudo: split the 'word' into an array of letters
//        loop through the array of letters
//        if capital letter,
//        make an array of the index

var capitals = function (word) {
	// Write your code here
  const arrWords = word.split('')
  return arrWords.map((elem,index) => elem  )
};

//answer
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

  //i had to understand that
  // word[i].toUpperCase() == word[i] 
  //checks if a letter is uppercase
  //if index uppercased is equal to the index letter, then it is uppercase.