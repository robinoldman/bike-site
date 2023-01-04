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
    alert('You have won');
    window.location.reload();
    score++;
    localStorage.setItem('score', score);
    scoreElement.innerHTML = score;}

  if (!allLettersGuessed) {
  console.log('There are still some letters that have not been guessed');
}

if (wrong > 7) {
  console.log('You lost');
  alert ('you lost try again');
  window.location.reload();
}
}



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
  let hangmanImages = ["assets/images/tnt1.png","assets/images/tnt2.png","assets/images/tnt3.png","assets/images/tnt4.png"]; // Array of hangman images
  let index = 0; 
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
    // Toggle the button-selected class
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
//const buttona =document.getElementById("keya");
//function buttonAClicked () {alert("button A clicked!"); } buttona.addEventListener('click', buttonAClicked) ;

//const buttonb =document.getElementById("keyb");
//function buttonBClicked () {alert("button B clicked!"); } buttonb.addEventListener('click', buttonBClicked);

//const buttonc =document.getElementById("keyc");
//function buttonCClicked () {alert("button C clicked!"); } buttonc.addEventListener('click', buttonCClicked) ;
     
//const buttond =document.getElementById("keyd");
//function buttonDClicked () {alert("button d clicked!"); } buttond.addEventListener('click', buttonDClicked) ;

//const buttone =document.getElementById("keye");
//function buttonEClicked () {alert("button e clicked!"); } buttone.addEventListener('click', buttonEClicked) ;

//const buttonf =document.getElementById("keyf");
//function buttonFClicked () {alert("button f clicked!"); } buttonf.addEventListener('click', buttonFClicked) ;

//const buttong =document.getElementById("keyg");
//function buttonGClicked () {alert("button g clicked!"); } buttong.addEventListener('click', buttonGClicked) ;

//const buttonh =document.getElementById("keyh");
//function buttonHClicked () {alert("button h clicked!"); } buttonh.addEventListener('click', buttonHClicked) ;

//const buttoni =document.getElementById("keyi");
//function buttonIClicked () {alert("button i clicked!"); } buttoni.addEventListener('click', buttonIClicked) ;

//const buttonj =document.getElementById("keyj");
//function buttonJClicked () {alert("button j clicked!"); } buttonj.addEventListener('click', buttonJClicked) ;

//const buttonk =document.getElementById("keyk");
//function buttonKClicked () {alert("button k clicked!"); } buttonk.addEventListener('click', buttonKClicked) ;

//const buttonl =document.getElementById("keyl");
//function buttonLClicked () {alert("button l clicked!"); } buttonl.addEventListener('click', buttonLClicked) ;

//const buttonm =document.getElementById("keym");
//function buttonMClicked () {alert("button m clicked!"); } buttonm.addEventListener('click', buttonMClicked) ;

//const buttonn =document.getElementById("keyn");
//function buttonNClicked () {alert("button n clicked!"); } buttonn.addEventListener('click', buttonNClicked) ;

//const buttono =document.getElementById("keyo");
//function buttonOClicked () {alert("button o clicked!"); } buttono.addEventListener('click', buttonOClicked) ;

//const buttonp =document.getElementById("keyp");
//function buttonPClicked () {alert("button p clicked!"); } buttonp.addEventListener('click', buttonPClicked) ;

//const buttonq =document.getElementById("keyq");
//function buttonQClicked () {alert("button q clicked!"); } buttonq.addEventListener('click', buttonQClicked) ;

//const buttonr =document.getElementById("keyr");
//function buttonRClicked () {alert("button r clicked!"); } buttonr.addEventListener('click', buttonRClicked) ;

//const buttons =document.getElementById("keys");
//function buttonSClicked () {alert("button s clicked!"); } buttons.addEventListener('click', buttonSClicked) ;

//const buttont =document.getElementById("keyt");
//function buttonTClicked () {alert("button t clicked!"); } buttont.addEventListener('click', buttonTClicked) ;

//const buttonu =document.getElementById("keyu");
//function buttonUClicked () {alert("button u clicked!"); } buttonu.addEventListener('click', buttonUClicked) ;

//const buttonv =document.getElementById("keyv");
//function buttonVClicked () {alert("button v clicked!"); } buttonv.addEventListener('click', buttonVClicked) ;

//const buttonw =document.getElementById("keyw");
//function buttonWClicked () {alert("button w clicked!"); } buttonw.addEventListener('click', buttonWClicked) ;

//const buttonx =document.getElementById("keyx");
//function buttonXClicked () {alert("button x clicked!"); } buttonx.addEventListener('click', buttonXClicked) ;

//const buttony =document.getElementById("keyy");
//function buttonYClicked () {alert("button y clicked!"); } buttony.addEventListener('click', buttonYClicked) ;

//const buttonz =document.getElementById("keyz");
//function buttonZClicked () {alert("button z clicked!"); } buttonz.addEventListener('click', buttonZClicked) ;
//main game 




