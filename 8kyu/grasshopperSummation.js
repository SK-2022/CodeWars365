// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//Answer
var summation = function (num) {
    let sum = 0
    for (let i = 0; i <= num; i++){
       sum+=i
    }
    return sum
  }
    
    //have a variable called sum and equal it to 0
    // have a loop iterate over values from 0 to whatever num is
    //during each iteration add 1 to num and add that new num to sum. 