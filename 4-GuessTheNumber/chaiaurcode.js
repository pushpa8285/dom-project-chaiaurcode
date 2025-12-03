const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const guessField = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let nkumGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess)
    validateGuess(guess);
    })
}

function validateGuess(guess){
    //for checking a valid number
if(isNaN(guess)){
    alert('Please enter a valid numbet')
} else if(guess < 1){
    alert('Please enter a ')
} else if(guess > 100){
    alert('Please enter a ')
}
}

function checkGuess(guess){
    //checking for nearest to the number
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}

function endGame(guess) {
  //
}

function newGame(guess){
    //
}
