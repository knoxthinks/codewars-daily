// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
    // good luck
   }

//params: two arrays, one thats a key, one that is the answer
//return: "sum of correct", each correct is 4pts, -1 for incorrect, 0 for ""
//example: above
//pseudo: 
//compare the first array and the second array
//if same, +4
//if no same, -1
//else "", 0
//reduce the array to a single #

// function checkExam(arr1, arr2) {
//     let sum = 0
//     for(i=0; i<arr1.length;i++)
//     if(arr1[i] = ''){
//         return sum +=0
//     }
//     if(arr1[i] = arr2[i]) {
//         return sum += 4
//     }
//     if(arr1[i] != arr2[i]) {
//         return sum -= 1
//     }else{
//       return sum
//     }  
// }

function checkExam(arr1, arr2) {
    let sum = 0;
    for(i=0; i<arr1.length;i++)
    if(arr2[i] === ''){
       sum += 0
    }
    else if(arr1[i] == arr2[i]) {
       sum += 4
    }
    else{
       sum -= 1
    }
    return sum < 0 ?  0 : sum
}

//notes
//i needed make sure i used "=="
//i can remove the "return statements on ifs"
//the final return statement for the "if lower than 0"
// i solved this 80% of the way