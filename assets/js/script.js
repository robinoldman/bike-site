var guess = ['banana', 'apple', 'orange', 'satsuma', 'grape'];
// selects random word
var randomGuess = Math.floor(Math.random() * guess.length);
//brings up _ _ _ for random guess
var answerArray = [];
for (var i = 0; i < guess[randomGuess].length; i++) {
    answerArray[i] = "_"}


var letterLeft = guess[randomGuess].length;
document.getElementsByClassName("clue-container")[0].innerHTML = answerArray;


console.log (answerArray);
console.log(guess[randomGuess]);
//main game 

//while (lettersLeft > 0 ) {
//alert(answerArray.join(' '));

//}



//for (var i = 0; i < guess[randomGuess].length; i++) {
   // if (playerGuesses.contains(guess[randomGuess].charAt(i))) {
     //   console.log(guess[randomGuess].charAt(i));
    //}
   // else {
     //   console.log("-");
    //}
//}

//console.log(answerArray);



//let mamimumMistake = 6; 
//let guessed = [];
//let wordStatus =null;



//document.getElementById('maximumMistake').innerHTML= mamimumMistake;



//function guessWord() {
   // wordStatus= randomGuess.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter: "_" )).joint('');
    //document.getElementsByClassName('word-container').innerHTML = wordStatus;}


//guessedWord():