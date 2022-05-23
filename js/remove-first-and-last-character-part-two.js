// function array(arr){
// //Good luck
// return arr.split(',').pop().shift()
// }

//parameters: string seperated by commas
//returns: new string, contains same character first and last removed, seperate by spaces
//Example: "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
//pseudo code


//answer

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }