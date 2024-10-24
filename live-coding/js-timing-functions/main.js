console.log('timing functions');

//addEventListener
//evento scatenato da utente
const btnElement = document.querySelector('button'); //prenderà l'elemento bottone in pagina

// btnElement.addEventListener('click', saluta); //saluta => funzione di callback

// //evento scatenato da setTimeOut
// setTimeout(saluta, 3000); //3000ms => 3s saluta => funzione di callback

function saluta() {
  console.log('ciao');
}

// // btnElement.addEventListener('click', function () {
// //   setTimeout(saluta, 3000);
// // });

// //esegui la funzione saluta DOPO 3 secondi e OGNI 3 secondi;
// const intervalID1 = setInterval(function () {
//   console.log('sono il primo intervallo');
// }, 1000);

// console.log(intervalID1);

// const intervalID2 = setInterval(function () {
//   console.log('sono il secondo intervallo');
// }, 1000);

// console.log(intervalID2);

// //stoppo l'esecuzione di intervalID 1 dopo 5 secondi
// setTimeout(function () {
//   clearInterval(intervalID1);
// }, 5_000);

// //stoppo l'esecuzione di intervalID 2 dopo 5 secondi
// setTimeout(function () {
//   clearInterval(intervalID2);
// }, 10_000);

// console.log(intervalID); //id generato dall'environment js che identifica quella specifica funzione di setInterval e NON dipende dai secondi

// btnElement.addEventListener('click', function () {
//   clearInterval(intervalID);
// });

// console.log('ciao');
// alert('ciao');
// console.log('sono dopo alert');

setTimeout(myFunction, 0); //evento asicrono

console.log('Ciao');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');

//1) o da errore o lo stampa subito;
//2) stampa tutto all'istante
//3) ciao - ancora un evento asincrono - ciao asincrono

function myFunction() {
  console.log('Ciao Asincrono');
}
