/**
 * PlayGame: funzione di gioco
 * @param {Event} event
 */
function playGame(event) {
  event.preventDefault();
  //validate inputs
  const guessedNumber = validateAnswersFromDom(inputsElement);

  //se valori inseriti non validi stampo messaggio
  if (guessedNumber.length !== numbersToGuess) {
    messageElement.textContent = `Qualcosa non va, controlla i numeri inseriti`;
    return;
  }

  const result = checkResult(guessedNumber, numbers);

  if (result > 0) {
    messageElement.classList.remove('text-danger');
    messageElement.classList.add('text-success');
  }
  messageElement.textContent = `Hai indovinato ${result} numeri su ${numbersToGuess}`;
}

/**
 * generateRandomNumber
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description
 * @param {number} length
 * @param {number} minValue
 * @param {number} maxValue
 * @returns {number[]}
 */
function generateRandomNumbersArray(length, minValue, maxValue) {
  const result = []; //numeri N non univoci

  while (result.length < length) {
    //generando il numero casuale
    const randomNumber = generateRandomNumber(minValue, maxValue);
    //inserisco il numero randomico nell'array SOLO se non esiste nell'array
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
}

/**
 * Description
 * @param {HTMLElement} parent
 * @param {number[]} elements
 */
function appendElements(parent, elements) {
  const createdTempElement = document.createDocumentFragment();

  for (let i = 0; i < elements.length; i++) {
    const randomNumber = elements[i];
    const liElement = document.createElement('li');
    liElement.innerText = randomNumber;
    createdTempElement.appendChild(liElement);
  }

  parent.append(createdTempElement);
}

/**
 * Description
 * @param {HTMLElement[]} domElements
 * @returns {number[]}
 */
function validateAnswersFromDom(domElements) {
  const result = [];

  for (let i = 0; i < domElements.length; i++) {
    const currentElement = parseInt(domElements[i].value);

    if (
      !isNaN(currentElement) && //deve essere un numero
      currentElement >= minValue && //deve essere >= 1
      currentElement <= maxValue && //deve essere <= 50
      !result.includes(currentElement) //deve essere una risposta nuova
    ) {
      result.push(currentElement);
    }
  }

  return result;
}

/**
 * Description
 * @param {number[]} userInput
 * @param {number[]} values
 * @returns {number}
 */
function checkResult(userInput, values) {
  let currentCount = 0;

  for (let i = 0; i < userInput.length; i++) {
    const input = userInput[i];

    if (values.includes(input)) {
      currentCount++;
    }
  }
  return currentCount;
}
