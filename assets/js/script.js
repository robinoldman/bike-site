var guess = ['banana', 'apple', 'orange', 'satsuma', 'grape'];

var randomGuess = Math.floor(Math.random() * guess.length);

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

//for (var i = 0; i < guess[randomGuess].length; i++) {
   // if (playerGuesses.contains(guess[randomGuess].charAt(i))) {
     //   console.log(guess[randomGuess].charAt(i));
    //}
   // else {
     //   console.log("-");
    //}
//}

//console.log(answerArray);
console.log(guess[randomGuess]);


//let mamimumMistake = 6; 
//let guessed = [];
//let wordStatus =null;



//document.getElementById('maximumMistake').innerHTML= mamimumMistake;



//function guessWord() {
   // wordStatus= randomGuess.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter: "_" )).joint('');
    //document.getElementsByClassName('word-container').innerHTML = wordStatus;}


//guessedWord():