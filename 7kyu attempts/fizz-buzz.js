// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


function fizzbuzz(n) {
    let fooArr = [];
    
    for(i=1; i <= n; i++)
      if(i%3 == 0 && i%5 ==0){
       fooArr.push("FizzBuzz")
      }
      else if(i % 3 == 0){
        fooArr.push('Fizz')
      }
      else if(i % 5 == 0){
        fooArr.push(`Buzz`)
      }
      else{
        fooArr.push(i)
        }
      return fooArr
      //
    }
    
    // i didnt get this one.
    // notes on fizzbuzz RETURN an ARRAY
    // pay attention to if statements and else if statements
    // the for loop i<n
    // you have to make the array and .push it into it