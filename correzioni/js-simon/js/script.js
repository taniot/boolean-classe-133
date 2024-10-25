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
const numbers = []; //numeri N non univoci
let playTime = 3; //secondi di gioco per ricordare i numeri
const minValue = 1;
const maxValue = 50;

//generazione di un array di numeri unici
while (numbers.length < numbersToGuess) {
  //generando il numero casuale
  const randomNumber = generateRandomNumber(minValue, maxValue);
  console.log(randomNumber);
  //inserisco il numero randomico nell'array SOLO se non esiste nell'array
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}

//Pubblicazione dei numeri dell'array nel DOM
//elemento fragment che vive in memoria
const createdTempElement = document.createDocumentFragment();

for (let i = 0; i < numbers.length; i++) {
  const randomNumber = numbers[i];
  const liElement = document.createElement('li');
  liElement.innerText = randomNumber;
  //appendiamo i list items al fragment che vive in memoria
  createdTempElement.appendChild(liElement);
  //numbersListElement.innerHTML += `<li>${randomNumber}</li>`;
}
//appendiamo al dom REALE il fragment 1 volta soltanto (che contiene tutti i list items)
numbersListElement.append(createdTempElement);

//gestione del timer
// nasconde i numeri dopo 30 secondi e mostra il form

countDownElement.innerText = playTime;

const playInterval = setInterval(function () {
  playTime = playTime - 1;
  countDownElement.innerText = playTime;

  if (playTime === 0) {
    clearInterval(playInterval);

    numbersListElement.classList.add('d-none');
    instructionsElement.innerText = 'Quanti numeri riesci a ricordare?';
    //- nascondo i numeri
    answersFormElement.classList.remove('d-none');
  }
}, 1_000);

//All'invio dei numeri logica di controllo e verifica

answersFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  let currentCount = 0;
  const guessedNumber = []; //array delle ipotesi numero utente

  // verificando la validità degli input
  for (let i = 0; i < inputsElement.length; i++) {
    const currentElement = parseInt(inputsElement[i].value);

    if (
      !isNaN(currentElement) && //deve essere un numero
      currentElement >= minValue && //deve essere >= 1
      currentElement <= maxValue && //deve essere <= 50
      !guessedNumber.includes(currentElement) //deve essere una risposta nuova
    ) {
      guessedNumber.push(currentElement);
    }
  }

  //se valori inseriti non validi stampo messaggio
  if (guessedNumber.length !== numbersToGuess) {
    messageElement.textContent = `Qualcosa non va, controlla i numeri inseriti`;
  }

  //confrontare i valore SICURAMENTE VALIDI inseriti dall'utente
  //con array di partenza

  for (let i = 0; i < guessedNumber.length; i++) {
    const guessedNumberValue = guessedNumber[i];

    if (numbers.includes(guessedNumberValue)) {
      currentCount++;
    }
  }

  if (currentCount > 0) {
    messageElement.classList.remove('text-danger');
    messageElement.classList.add('text-success');
  }
  messageElement.textContent = `Hai indovinato ${currentCount} numeri su ${numbersToGuess}`;
});

/*****
 *
 * Functions
 *
 */

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
