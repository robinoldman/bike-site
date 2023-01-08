const words = ['everest', 'bennevis', 'montblanc', 'matterhorn', 'snowdon', 'mountfuji', 'kilimanjaro', 'elcapitan'];
let answerArray = [];
// selects random word
let randomWordIndex = Math.floor(Math.random() * words.length);
let index = 0; 
const keyboardKeys = document.getElementsByClassName('key')



//event listener fo keyboard in game
for (let key of keyboardKeys) {
  key.addEventListener('click', function(event) {
    let clickedKey = event.currentTarget

    key.classList.toggle('keypressed');

    let clickedLetter = clickedKey.dataset.value

    guessLetter(clickedLetter);
    checkGuesses();
  })
}



//refresh button - refreshes the whole game so that score goes back to 0
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', function() {
  reset();
  location.reload();
});




//brings up _ _ _ for random guess
for (let i = 0; i < words[randomWordIndex].length; i++) {
    answerArray[i] = " _ ";
}



// sets the text content of the first element with the class 
//"clue-container" to the elements of answerArray 
let letterLeft = words[randomWordIndex].length;
document.getElementsByClassName("clue-container")[0].innerHTML = answerArray.join('');
console.log(words[randomWordIndex]);





//checks the words array at the index randomGuess to see if any letters in the selected word match the input letter. 
//If there is a match, the corresponding index in the answerArray is updated to contain the matching letter. 
function guessLetter(letter) {
  for (let i = 0; i < answerArray.length; i++) {
    if (words[randomGuess][i] === letter) {
      
      answerArray[i] = letter;
    }
  }
}



//wrong guess element 
// sets wrong guesses to 0
let wrongElement = document.getElementById('wrong');
let wrong = 0;
wrongElement.innerHTML = wrong;



//score element sets score to 0 
let scoreElement = document.getElementById('score');
let score = parseInt(localStorage.getItem('score')) || 0;
scoreElement.innerHTML = score;



//checks to see length of word and compares it to the one completed 
// if the letters all match and the word is guessed corrrectly the 'you won alert appears
//if more than 7 wroing attemps have been made an error message appears sayin 'sorry you lost'
function checkGuesses() {
  const letters = words[randomWordIndex].split('');
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
      confirmButtonText: 'Next go',
      
    
  }).then((result) => {
    if (result.value) {
      location.reload();
    }
  })
  
  }

  if (!allLettersGuessed)
// taken from https://sweetalert2.github.io/
if (wrong > 6) {
  console.log('You lost');
  setTimeout(function() {
    Swal.fire({
      title: 'You lost',
      text: "Sorry you lost this time",
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Try again',
      
    }).then((result) => {
      if (result.value) {
        location.reload();
      }
    });
  }, 2000);
}}




//checks if the letter that was guessed is correct If there is a match, the value of isCorrect is set to true.
function guessLetter(letter) {
  let isCorrect = false; 

  for (let i = 0; i < answerArray.length; i++) {
    if (words[randomWordIndex][i] === letter) {

      


// Update the answerArray to replace the dash with the correct letter
      answerArray[i] = letter;
      isCorrect = true;
    }
  }



  // Shows the new picture if wrong answer by going through the array of images
  let hangman = document.getElementById("hangman"); 
  let hangmanImages = ["assets/images/tnt2.png","assets/images/tnt3.png","assets/images/tnt4.png","assets/images/tnt5.png","assets/images/tnt6.png","assets/images/tnt7.png","assets/images/explosion2.jpg",]; // Array of hangman images
  document.getElementsByClassName("clue-container")[0].innerHTML = answerArray.join('');
  



//if a wrong letter the next picture adds one
//if wrong letterthe wrong letter index goes up by 1
  if (!isCorrect) {
    hangman.src = hangmanImages[index];
    index++; 
    wrong++;
    wrongElement.innerHTML = wrong;
    
  }
}



//resets the game ready for a fresh start
//this resets the score to 0



function reset() {
  score= 0;
  localStorage.setItem('score', 0);
  document.getElementById('score').innerHTML = 0;
}


