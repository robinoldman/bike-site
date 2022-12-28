var guess = ['banana', 'apple', 'orange', 'satsuma', 'grape'];
// selects random word
var randomGuess = Math.floor(Math.random() * guess.length);
//brings up _ _ _ for random guess
var answerArray = [];
for (var i = 0; i < guess[randomGuess].length; i++) {
    answerArray[i] = " _ "}


var letterLeft = guess[randomGuess].length;
document.getElementsByClassName("clue-container")[0].innerHTML = answerArray;


//wrong guess score card
var maximimumMistake = 6;
document.getElementById('maximimumMistake').innerHTML = maximimumMistake

console.log (answerArray);
console.log(guess[randomGuess]);
//main game 

//while (letterLeft > 0 ) {

  //var guess = prompt 



