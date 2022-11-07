// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//Answer
function remove (string) {  
    for (let i = string.length; i > 0; i-- ) {
      if (string.endsWith("!")) {
        string = string.slice(0, -1);
      }
    }
        return string
  }