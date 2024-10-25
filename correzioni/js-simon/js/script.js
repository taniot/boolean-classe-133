//elementi del dom
const countDownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list');
const instructionsElement = document.getElementById('instructions');
const answersFormElement = document.getElementById('answers-form');
const inputsElement = document.querySelectorAll('#input-group input');
const messageElement = document.getElementById('message');
const buttonElement = document.querySelector('button');

//variabili di gioco
const numbersToGuess = 5; //numeri da indovinare
const minValue = 1;
const maxValue = 50;
let playTime = 5; //secondi di gioco per ricordare i numeri

// Generare TOT numeri random
const numbers = generateRandomNumbersArray(numbersToGuess, minValue, maxValue);
// Inseriamo i numeri in pagina
appendElements(numbersListElement, numbers);

// # Conto alla rovescia
countDownElement.innerText = playTime;

const playInterval = setInterval(function () {
  playTime = playTime - 1;
  countDownElement.innerText = playTime;
  if (playTime === 0) {
    clearInterval(playInterval);
    numbersListElement.classList.add('d-none');
    instructionsElement.innerText = 'Quanti numeri riesci a ricordare?';
    answersFormElement.classList.remove('d-none');
  }
}, 1_000);

//giochiamo
answersFormElement.addEventListener('submit', playGame);
