console.log ("connected")

let guess = ['banana', 'apple', 'orange', 'satsuma', 'grape'];

let randomGuess = Math.floor(Math.random() *guess.length);
let mamimumMistake = 6; 
let guessed = [];

document.getElementById('maximumMistake').innerHTML= mamimumMistake;

function guessWord() {
    wordStatus = randomGuess.split('').map(key ==> (guessed.indexOf(key)>=0?key: "_" )).joint('');
    document.getElementsByClassName('word-container').innerHTML = wordStatus;
}

console.log(guess[randomGuess]);