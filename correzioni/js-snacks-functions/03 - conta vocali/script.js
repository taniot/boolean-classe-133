/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'cIaOclassE133';

// Dichiara la funzione qui.

// function countVowels(string) {
//   //aeiouAEIOU

//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i];

//     if (letter === 'a') {
//       //eseguo operazione
//       count = count + 1; //verboso
//       //count += 1; //meno verboso
//       //count++; //non verboso
//     } else if (letter === 'A') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'e') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'E') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'i') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'I') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'o') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'O') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'u') {
//       //eseguo operazione
//       count = count + 1;
//     } else if (letter === 'U') {
//       //eseguo operazione
//       count = count + 1;
//     }
//   }

//   return count;
// }

function countVowels(string) {
  //aeiouAEIOU

  string = string.toLowerCase(); //cIaOclassE133 => ciaoclasse133

  let count = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    //soluzione con if/else if

    // if (letter === 'a') {
    //   //eseguo operazione
    //   count = count + 1; //verboso
    //   //count += 1; //meno verboso
    //   //count++; //non verboso
    // } else if (letter === 'e') {
    //   //eseguo operazione
    //   count = count + 1;
    // } else if (letter === 'i') {
    //   //eseguo operazione
    //   count = count + 1;
    // } else if (letter === 'o') {
    //   //eseguo operazione
    //   count = count + 1;
    // } else if (letter === 'u') {
    //   //eseguo operazione
    //   count = count + 1;
    // }

    //soluzione con if/OR

    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count = count + 1;
    }

    //soluzione con ciclo for

    // for (let y = 0; y < vowels.length; y++) {
    //   if (vowels[y] === letter) {
    //     count = count + 1;
    //   }
    // }

    //soluzione con includes

    // if (vowels.includes(letter)) {
    //   count = count + 1;
    // }
  }

  return count;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
