
var albumList = ["my_beautiful_dark_twisted_fantasy", "late_registration", "graduation", "808s", "college_dropout"];

var chosenAlbum = "";

var lettersInChosenAlbum = [];


var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;

function startGame() {

  numGuesses = 12;

  chosenAlbum = albumList[Math.floor(Math.random() * albumList.length)];

  lettersInChosenAlbum = chosenAlbum.split("");

  numBlanks = lettersInChosenAlbum.length;

  blanksAndSuccesses = [];

  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (chosenAlbum[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < numBlanks; j++) {

      if (chosenAlbum[j] === letter) {

        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }
  else {

    wrongGuesses.push(letter);

    numGuesses--;

  }
}

function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenAlbum.toString() === blanksAndSuccesses.toString()) {

    winCounter++;

    alert("W!\n" +'"My music isn’t just music — it’s medicine" -Ye');

    document.getElementById("win-counter").innerHTML = winCounter;

    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

    alert("L\n" + "You aint got the ANSWERS!!!");

    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();

  }

}
startGame();

document.onkeyup = function (event) {

  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);

  roundComplete();
};

$(document).ready(function () {

  var audioElement = document.createElement("audio");

  audioElement.setAttribute("src", "Devil In A New Dress (Instrumental).mp3");

  $(".theme-button").on("click", function () {
    audioElement.play();
  });

  $(".pause-button").on("click", function () {
    audioElement.pause();
  })
});