// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


//Answer
function repeatStr (n, s) {
    //repeat the string n number of times and concactenate it to itself.
    let repeatedString = ""
    for(let i = 0; i < n; i++){
        repeatedString = repeatedString + s
    }
    return repeatedString
  }