console.log('objs');

//variabili
const nomeVariabile = '';
let nuovaVariabile;
nuovaVariabile = '';

//array
const array = [1, 2, 3, 4, 5, 6]; //valori omogenei di qualunque tipo string, boolean, number, array

//?????

const personaArray = [
  'Gaetano', //nome
  'Frascolla', //cognome
  41, //eta
  'Siviglia', //dovevivo
  180, //altezza
  true, //piacelapizza
  false, //sovolare
  2, //occhi
  'verde', //colore occhi
];

// persona[0]; //gaetano
// persona[4]; //180

// persona['nome'] //gaetano
// persona['altezza'] // 180

//definizione oggetto persona
// const demo = [];
const persona = {
  nome: 'Gaetano', //proprieta = chiave: valore
  cognome: 'Frascolla',
  eta: 41, //number
  piaceLaPizza: true,
  amici: ['Paolo', 'Marco', 'Manuel'],
  inputUtente: 'sono strano',
  'prova-prova': 'ciao',
};
// delete persona.nome;
// delete persona.prova;

console.log(persona);

//

const piove = false;

//comprombrello
if (piove) {
  persona.comprombrello = true;
}

console.log(persona);

for (let key in persona) {
  console.log(persona[key]);
}

// console.log(demo.length);
// console.log(persona.length);

// const eta = 'qualcosa';

// console.log(persona);
// console.log(persona['piace_la_pizza']);
// console.log(persona.piace - la - pizza);
// function prova(text){}

// prova('gaetano')

// const inputUtente = prompt('che cosa vuoi sapere?'); //'inputUtente'
// console.log(inputUtente);

// console.log(persona['inputUtente']); //persona['nome'];
// console.log(persona.inputUtente);

const studente1 = {
  nome: 'Arianna',
  cognome: 'Cristiani',
};

const studente2 = {
  nome: 'Gioi',
  cognome: 'Pronesti',
};

const classe133 = [studente1, studente2];

const classi = [
  {
    nome: 'gaetano',
    cognome: 'frascolla',
  },
  {
    nome: 'pippo',
    cognome: 'solo',
  },
  {
    nome: 'paperino',
    cognome: 'zio',
  },
];

// console.log(classe133);

for (let i = 0; i < classe133.length; i++) {
  const obj = classe133[i]; //oggetto
  // console.log(classe133[i]);

  console.log(obj);

  // console.log(obj.cognome);
  // console.log(obj.nome);

  //iterare su tutte le chiavi dell'oggetto //obj

  // const myArray = [];
  // for (let key in obj) {
  //   console.log(key);
  //   myArray.push(key);
  //   // console.log(obj[key]);
  // }
}

class Gaetano {
  //zucchero sintattico
}

function Gaetano() {}
