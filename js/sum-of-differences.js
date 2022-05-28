  //return sum
  //descending order
  //reduce then add sum
  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
  
//i have no idea why this works. what is math.max(...arr) ?? what is this notation?