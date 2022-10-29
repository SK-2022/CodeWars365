// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//ANSWER
function solution(str){
    var string = str.split("")
    
    var reverseArray = string.reverse()
    
    var joinedArray = reverseArray.join("")
    
    return joinedArray
  }