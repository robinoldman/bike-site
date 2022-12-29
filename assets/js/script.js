var guess = ['banana', 'apple', 'orange', 'satsuma', 'grape'];

// selects random word
var randomGuess = Math.floor(Math.random() * guess.length);

//brings up _ _ _ for random guess
var answerArray = [];
for (var i = 0; i < guess[randomGuess].length; i++) {
    answerArray[i] = " _ ";
}

//refresh button 
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', function() {
  location.reload();
});


console.log(answerArray);
console.log(guess[randomGuess]);

var letterLeft = guess[randomGuess].length;
document.getElementsByClassName("clue-container")[0].innerHTML = answerArray;

//wrong guess score card
var maximimumMistake = 6;
document.getElementById('maximimumMistake').innerHTML = maximimumMistake;

//keys to change letters being pressed
function guess_letter(letter) {
  for (let i = 0; i < answerArray.length; i++) {
    if (guess[randomGuess][i] === letter) {
      // Update the answerArray to replace the dash with the correct letter
      answerArray[i] = letter;
    }
  }
  // Update the clue-container element to show the updated answerArray
  document.getElementsByClassName("clue-container")[0].innerHTML = answerArray;
}

//keyboard click to be registered
document.getElementById("keya").onclick = function() { guess_letter("a"); };
document.getElementById("keyb").onclick = function() { guess_letter("b"); };
document.getElementById("keyc").onclick = function() { guess_letter("c");};
document.getElementById("keyd").onclick = function() { guess_letter("d"); };
document.getElementById("keye").onclick = function() { guess_letter("e"); };
document.getElementById("keyf").onclick = function() { guess_letter("f"); };
document.getElementById("keyg").onclick = function() { guess_letter("g"); };
document.getElementById("keyh").onclick = function() { guess_letter("h"); };
document.getElementById("keyi").onclick = function() { guess_letter("i"); };
document.getElementById("keyj").onclick = function() { guess_letter("j"); };
document.getElementById("keyk").onclick = function() { guess_letter("k"); };
document.getElementById("keyl").onclick = function() { guess_letter("l"); };
document.getElementById("keym").onclick = function() { guess_letter("m"); };
document.getElementById("keyn").onclick = function() { guess_letter("n"); };
document.getElementById("keyo").onclick = function() { guess_letter("o"); };
document.getElementById("keyp").onclick = function() { guess_letter("p"); };
document.getElementById("keyq").onclick = function() { guess_letter("q"); };
document.getElementById("keyr").onclick = function() { guess_letter("r"); };
document.getElementById("keys").onclick = function() { guess_letter("s"); };
document.getElementById("keyt").onclick = function() { guess_letter("t"); };
document.getElementById("keyu").onclick = function() { guess_letter("u"); };
document.getElementById("keyv").onclick = function() { guess_letter("v"); };
document.getElementById("keyw").onclick = function() { guess_letter("w"); };
document.getElementById("keyx").onclick = function() { guess_letter("x"); };
document.getElementById("keyy").onclick = function() { guess_letter("y"); };
document.getElementById("keyz").onclick = function() { guess_letter("z"); };
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




