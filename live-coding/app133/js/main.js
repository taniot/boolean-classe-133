console.log('app 133');

//unica fonte di verità -> source of truth
const elements = [
  'Filippo',
  'Damiano',
  'Giovanni',
  'Giulia',
  'Mattia',
  'Simone',
];

//ul contenitore
const listName = document.getElementById('list-name');

//form add element
const formElement = document.getElementById('form-add-element');
console.log(formElement);

const newDOMElement = document.getElementById('new-element');

formElement.addEventListener('submit', function (event) {
  //impedirà al form html di essere inviato autonomamente (non ricarico la pagina, non aggiungo query parameters all'url etc etc)
  event.preventDefault();

  const newElement = newDOMElement.value;

  // listName.innerHTML += `<li class="list-group-item">${newElement}</li>`;

  elements.push(newElement);

  console.log(elements);

  drawHTML(listName, elements);

  //svuotando elemento nel form
  newDOMElement.value = '';

  //logica per inserimento in array e rapprentazione del DOM
});

// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];

//   listName.innerHTML += `<li class="list-group-item classe133">${element}</li>`;
//   //console.log('elemento');
// }

drawHTML(listName, elements);

function drawHTML(parent, elements) {
  //svuoto il contenitore dove appenderò i nuovi elementi
  parent.innerHTML = '';

  console.log('sto generando HTML');
  //creo un elemento DOM contenitore che vive in memoria
  const domElementContenitore = document.createDocumentFragment(); //<template></template>

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    //<li></li> //memoria
    const liElement = document.createElement('li');

    liElement.classList.add('list-group-item');

    if (i === 3) {
      liElement.classList.add('classe-133');
    }

    liElement.innerHTML = element;

    liElement.addEventListener('click', function () {
      console.log(element);
    });

    //variazione del dom
    // listName.appendChild(liElement);
    domElementContenitore.appendChild(liElement);

    //appendo l'elemento LI all'elemento DOM che vive in memoria

    // console.log(liElement);

    //listName.innerHTML += `<li class="list-group-item classe133">${element}</li>`;
    //console.log('elemento');
  }
  parent.appendChild(domElementContenitore);
}

// console.log(domElementContenitore);

/*



<DOM ELEMENTO CONTENITORE>
  <li class="list-group-item">Filippo</li>
  <li class="list-group-item">Filippo</li>
  <li class="list-group-item">Filippo</li>
  <li class="list-group-item">Filippo</li>
  <li class="list-group-item">Filippo</li>
  <li class="list-group-item">Filippo</li>
</DOM ELEMENTO CONTENITORE>



*/

// listName.append(DOMELEMENTOCONTENITORE);

// function generateElement('', classes, id, innerHTML){
//   return "elemento html con le caratteristiche dei parametri";
// }

// const listItem = document.querySelectorAll('.list-group-item'); //nodeList NO classList no className
// console.log(listItem);

// //soluzione possibile
// for (let j = 0; j < listItem.length; j++) {

//   const domElement = listItem[j];

//   domElement.className += ' classe133';
//   domElement.classList.add('classe133');
// }

//creo qualcosa che non esiste con delle caratteristiche
//lo aggiungo al dom
//cerco tutti gli elementi con quelle caratteristiche nel dom
//quando lo trovo, ciclo (???) tutti gli elementi per aggiungere caratteristiche (attributi, eventi, etc)

// console.log(listItem.classList);

/*
         <li class="list-group-item">Filippo</li>
            <li class="list-group-item">Filippo</li>
            <li class="list-group-item">Filippo</li>
            <li class="list-group-item">Filippo</li>
            <li class="list-group-item">Filippo</li>

          */
