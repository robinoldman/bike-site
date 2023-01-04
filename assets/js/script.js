var guess = ['everest', 'bennevis', 'montblanc', 'matterhorn', 'snowdon', 'mountfuji', 'kilimanjaro', 'elcapitan'];

// selects random word
var randomGuess = Math.floor(Math.random() * guess.length);




//brings up _ _ _ for random guess
var answerArray = [];
for (var i = 0; i < guess[randomGuess].length; i++) {
    answerArray[i] = " _ ";
}

//refresh button // resets to 0 but then goes back to orginal score 
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', function() {
  reset();
  location.reload();
});

var letterLeft = guess[randomGuess].length;
document.getElementsByClassName("clue-container")[0].innerHTML = answerArray.join('');

console.log(answerArray);
console.log(guess[randomGuess]);

//recognise when all letters have been done



//keys to change letters being pressed on screen
function guessLetter(letter) {
  for (let i = 0; i < answerArray.length; i++) {
    if (guess[randomGuess][i] === letter) {
      
      answerArray[i] = letter;
    }
  }
}

//wrong guess element 
//score element 
let wrongElement = document.getElementById('wrong');
let wrong = 0;
wrongElement.innerHTML = wrong;

//score element 
let scoreElement = document.getElementById('score');
let score = parseInt(localStorage.getItem('score')) || 0;
scoreElement.innerHTML = score;

//checks to see length of word and compares it to the one completed 
// problem in the if statement i am not comparing the right variables i think letters{i} works but not random Guess
function checkGuesses() {
  const letters = guess[randomGuess].split('');
  let allLettersGuessed = true;
  for (let i = 0; i < letters.length; i++) {
    
    if (!answerArray.includes(letters[i])) {
      allLettersGuessed = false;
      break;
    }
  }
  if (allLettersGuessed) {
    console.log('All the letters have been guessed');
    score++;
    localStorage.setItem('score', score);
    scoreElement.innerHTML = score;
    Swal.fire({
      title: 'You won',
      text: "You saved the mountain!",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Next go'
    
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      location.reload();
    }
  })
  
  }

  if (!allLettersGuessed) {
  console.log('There are still some letters that have not been guessed');
}
// taken from https://sweetalert2.github.io/
if (wrong > 6) {
  console.log('You lost');
  Swal.fire({
    title: 'You lost',
    text: "Sorry you lost this time",
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Try again'
  
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    location.reload();
  }
})
  
}}


let index = 0; 
//update the picture with a wrong guess
function guess_letter(letter) {
  let isCorrect = false; 

  for (let i = 0; i < answerArray.length; i++) {
    if (guess[randomGuess][i] === letter) {

      
// Update the answerArray to replace the dash with the correct letter
      answerArray[i] = letter;
      isCorrect = true;
    }
  }

  // Show the new picture if wrong answer
  let hangman = document.getElementById("hangman"); 
  let hangmanImages = ["assets/images/tnt2.png","assets/images/tnt3.png","assets/images/tnt4.png","assets/images/tnt5.png","assets/images/tnt6.png","assets/images/tnt7.png","assets/images/tnt8.png",]; // Array of hangman images
  
  document.getElementsByClassName("clue-container")[0].innerHTML = answerArray;
  


  if (!isCorrect) {
    hangman.src = hangmanImages[index];
    index++; 
    wrong++;
    wrongElement.innerHTML = wrong;
    // is only updating 1 image to the array  is not recognisiong the ++ console log says 
  }
}

//resets the game ready for a fresh start

function reset() {
  score= 0;
  localStorage.setItem('score', 0);
  document.getElementById('score').innerHTML = 0;

}

const buttons = document.querySelectorAll('.key');

for (let button of buttons) {
  button.addEventListener('click', function() {
    button.classList.toggle('keypressed');
  });
}




//keyboard click to be registered
document.getElementById("keya").onclick = function() { guess_letter("a");checkGuesses(); };
document.getElementById("keyb").onclick = function() { guess_letter("b");checkGuesses(); };
document.getElementById("keyc").onclick = function() { guess_letter("c");checkGuesses();};
document.getElementById("keyd").onclick = function() { guess_letter("d");checkGuesses(); };
document.getElementById("keye").onclick = function() { guess_letter("e");checkGuesses(); };
document.getElementById("keyf").onclick = function() { guess_letter("f");checkGuesses(); };
document.getElementById("keyg").onclick = function() { guess_letter("g");checkGuesses(); };
document.getElementById("keyh").onclick = function() { guess_letter("h");checkGuesses(); };
document.getElementById("keyi").onclick = function() { guess_letter("i");checkGuesses(); };
document.getElementById("keyj").onclick = function() { guess_letter("j");checkGuesses(); };
document.getElementById("keyk").onclick = function() { guess_letter("k");checkGuesses(); };
document.getElementById("keyl").onclick = function() { guess_letter("l");checkGuesses(); };
document.getElementById("keym").onclick = function() { guess_letter("m");checkGuesses(); };
document.getElementById("keyn").onclick = function() { guess_letter("n");checkGuesses(); };
document.getElementById("keyo").onclick = function() { guess_letter("o");checkGuesses(); };
document.getElementById("keyp").onclick = function() { guess_letter("p");checkGuesses(); };
document.getElementById("keyq").onclick = function() { guess_letter("q");checkGuesses(); };
document.getElementById("keyr").onclick = function() { guess_letter("r");checkGuesses(); };
document.getElementById("keys").onclick = function() { guess_letter("s");checkGuesses(); };
document.getElementById("keyt").onclick = function() { guess_letter("t");checkGuesses(); };
document.getElementById("keyu").onclick = function() { guess_letter("u");checkGuesses(); };
document.getElementById("keyv").onclick = function() { guess_letter("v");checkGuesses(); };
document.getElementById("keyw").onclick = function() { guess_letter("w");checkGuesses(); };
document.getElementById("keyx").onclick = function() { guess_letter("x");checkGuesses(); };
document.getElementById("keyy").onclick = function() { guess_letter("y");checkGuesses(); };
document.getElementById("keyz").onclick = function() { guess_letter("z");checkGuesses(); };
