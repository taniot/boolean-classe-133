/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra'];

// Dichiara la funzione qui.

function filterByLetter(array, letter = '') {
  //array di partenza
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i]; //Anna

    //soluzione con confronto lettere

    if (element[0].toLowerCase() === letter.toLowerCase()) {
      result.push(element);
    }

    //soluzione con startswith (non consigliata)

    // if (element.toLowerCase().startsWith(letter.toLowerCase())) {
    //   result.push(element);
    // }

    //soluzione con charAt

    // if (element.charAt(0).toLowerCase() === letter.toLowerCase()) {
    //   result.push(element);
    // }
  }

  //restituisco array
  return result;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filterByLetter(names, 'a'));
// filterByLetter('qualcosa');

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
