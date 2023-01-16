// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//Answer

function howMuchILoveYou(nbPetals) {
    //create array of answers for each petal
    let petalArray = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    //if nbPetals is 1 return index 0, if 2, return index 1 until 6. if 7 restart from index 0 again repeating 
    //the process
    let chosenPetal = []
  for(let i = 0; i < nbPetals;i++){
    //% sign allows for multiple loops through the same array until maximum value i.
    chosenPetal.push(petalArray[i%petalArray.length])
  }
  return chosenPetal.pop()
}
