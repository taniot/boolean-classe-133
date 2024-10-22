console.log('js dom');

/* 
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi. Sulla pagina html deve apparire “Ciao <nome>”, 
il colore del nome deve essere azzurro o rosa a seconda del sesso inserito */

//selezionare per ID => ottengo OUTER ELEMENT
const elementGaetano = document.getElementById('gaetano');
//selezione per ID che non esiste => NULL
const provaSbagliata = document.getElementById('pizza');

console.log(elementGaetano);
console.log(provaSbagliata);

const elementBySelector = document.querySelector('h1');
const provaQuerySelector = document.querySelector('.very-important-link');

const gaetanoByQuerySelector = document.querySelector('#gaetano');

console.log(elementBySelector);
console.log(provaQuerySelector);
console.log(gaetanoByQuerySelector);

//classList e className

const pQuerySelector = document.querySelector('.prova-query-selector');

console.log(pQuerySelector.classList);
console.log(pQuerySelector.className);

// pQuerySelector.classList.add('nuova-classe-css');
// pQuerySelector.classList.remove('show');
// pQuerySelector.classList.toggle('lorenzo');

console.log(pQuerySelector.className);

pQuerySelector.className += ' prova-aggiunta-da-js';

const testElement = document.getElementById('test');

// console.log(testElement.innerHTML);

// testElement.innerHTML =
//   '<a href="#">Link a canicattì</a>' + testElement.innerHTML;

testElement.innerText = 'prova testo normale';

// console.log(testElement.innerHTML);

console.log(testElement.style.fontSize);

testElement.style.fontSize = '40px';
testElement.style.backgroundColor = 'yellow';

//addEventListener

const myButton = document.getElementById('prova-button');
//const myButton = document.querySelector('button#prova-button');

console.log(myButton);

const testColor = document.getElementById('test-color');

myButton.addEventListener('click', function () {
  console.log('ho cliccato sul bottone');
  testColor.classList.toggle('color');

  if (testColor.classList.contains('color')) {
    myButton.innerText = 'Rimuovi il colore';
  } else {
    myButton.innerText = 'Aggiungi il colore';
  }
});

testElement.addEventListener('mouseenter', function () {
  console.log('sono sul paragrafo');
  testElement.classList.remove('blue');
  testElement.classList.add('red');
});

testElement.addEventListener('mouseleave', function () {
  console.log('sono uscito dal paragrafo');
  testElement.classList.remove('red');
  testElement.classList.add('blue');
});

myButton.addEventListener('click', function () {
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
  qualcosAltro('gaetano');
});

function qualcosAltro(nome) {
  console.log(`CIAO ${nome}`);
}
