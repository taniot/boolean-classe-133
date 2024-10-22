/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Gaetano';

// Dichiara la funzione qui.

function sayHello(person) {
  const hello = `Ciao ${person}`;
  //const hello = 'Ciao ' + person;

  return hello;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(name));

//Risultato atteso se si passa 'Mario': // ciao Mario
