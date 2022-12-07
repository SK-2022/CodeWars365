// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//Answer

function squareDigits(num){
  // separate numbers so that they are single digits
  let numArr = num.toString().split('');
  //square each element in the array
  numArr = numArr.map( element => element ** 2);
  //return numbers concactenated
  return parseInt(numArr.join(''))
}