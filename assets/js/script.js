const words = ['everest', 'bennevis', 'montblanc', 'matterhorn', 'snowdon', 'mountfuji', 'kilimanjaro', 'elcapitan'];
let answerArray = [];
// selects random word
let randomWordIndex = Math.floor(Math.random() * words.length);
let index = 0;
const keyboardKeys = document.getElementsByClassName('key');
let hangman = document.getElementById("hangman");
let hangmanImages = ["assets/images/tnt2.png", "assets/images/tnt3.png",
    "assets/images/tnt4.png", "assets/images/tnt5.png", "assets/images/tnt6.png",
    "assets/images/tnt7.png", "assets/images/explosion2.jpg",
]; // Array of hangman images

//event listener fo keyboard in game
for (let key of keyboardKeys) {
    key.addEventListener('click', function(event) {
        let clickedKey = event.currentTarget;

        key.classList.toggle('keypressed');

        let clickedLetter = clickedKey.dataset.value;

        guessLetter(clickedLetter);
        checkGuesses();
    });
}

//refresh button - refreshes the whole game so that score goes back to 0
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', function() {
    reset();
    location.reload();
});

//brings up _ _ _ each time there is a random guess from the 'words' index
for (let i = 0; i < words[randomWordIndex].length; i++) {
    answerArray[i] = " _ ";
}

// sets the text content of the first element with the class 
//"clue-container" to the elements of answerArray 

document.getElementsByClassName("clue-container")[0].innerHTML = answerArray.join('');

//checks the words array at the index randomGuess to see if any letters in the 
//selected word match the input letter. If there is a match, the corresponding 
//index in the answerArray is updated to contain the matching letter. 

/* Given a letter, check whetherit's in the correct word.

@param {string} letter -The letter to check
*/

function guessLetter(letter) {
    for (let i = 0; i < answerArray.length; i++) {
        if (words[randomWordIndex][i] === letter) {

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
//if more than 7 wrong attempts have been made an error message appears sayin 'sorry you lost'
/*
@param {string} words[randomWordIndex] -The word to check
*/
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
        });

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
        }
}

//checks if the letter that was guessed is correct If there is a match, the value of is Correct is set to true.
/*
 * guessLetter(letter) - check if the letter guessed is present in the word to be guessed
 * @param letter: {string}  - letter guessed
 */
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

/* Resets the score to 0 and updates the score.
sets the value of 'score' variable to 0, 
updates the score in the local storage to 0,
updates score*/

function reset() {
    score = 0;
    localStorage.setItem('score', 0);
    document.getElementById('score').innerHTML = 0;
}