//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Answer

function solution(str, ending){
    if (str.substr(-ending.length) === ending || ending === '') {
      
      return true;
    }else {
      return false;
    }
  }
  