// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Answer

function fakeBin(str){
    //turn string into an array
      let strArr = str.split('')
      //iterate through each item in the array
      for (let i = 0; i < strArr.length; i++){
      //if the item at a respective index is below 5, reassign it to 0. 
        if (strArr[i] < 5){
            strArr[i] = '0'
        } else {
      //if the item at a respective index is 5 and above, reassign it to 1.
            strArr[i] = '1'
        }
      }
      return strArr.join('')
    }

//Answer 2
function fakeBin(str){
    return str.split('').map( n => n < 5 ? 0 : 1).join('');
}