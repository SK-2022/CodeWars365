// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Answer
function reverseWords(str){
    let myArray = str.split(" ")
    
  return myArray.reverse().join(' '); // reverse those words
}