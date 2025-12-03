let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const guessField = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //for checking a valid number
  if (isNaN(guess)) {
    alert("Please enter a valid numbet");
  } else if (guess < 1) {
    alert("Please enter a numbet more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checking for nearest to the number
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`numberis TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = ``;
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  userInput.value = "";
  userInput.setAttribute("disable", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appenChild(p);
  playGame = false;
  newGame();
}

function newGame(guess) {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    statusbar.removeChild(p);

    playGame = true;
  });
}
