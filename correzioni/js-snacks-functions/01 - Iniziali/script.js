/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = [
  'Anna',
  'Luca',
  'Marco',
  'Adele',
  'Giovanni',
  'Alessandra',
  'Gaetano',
];

// Dichiara la funzione qui.

/*
wow: questa funzione deve fare quello che ce scritto sopra
*/
function getElementsFirstChar(array) {
  //parametro
  //funzione con parametro array
  //codice da eseguire

  const result = [];

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i][0]);
    // console.log(array[i].charAt(0));

    const element = array[i]; //elemento dell'array
    const firstLetter = element[0]; //element.charAt(0);

    result.push(firstLetter);
  }

  // console.log(array);

  return result;
}

function getElementsFirstChar(array) {
  const result = array.map((element) => element);
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getElementsFirstChar(names)); //pizza è un argomento

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
