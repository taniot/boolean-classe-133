console.log('js-dom-1');

// const lampadinaElement = document.querySelector('img');
// const lampadinaElement = document.querySelector('img#lampadina');
const lampadinaElement = document.getElementById('lampadina');

// const btnElement = document.querySelector('button');
const btnElement = document.getElementById('interruttore');

//versione 1

// btnElement.addEventListener('click', function () {
//   // console.log('ho cliccato sul bottone');

//   // console.log('id', lampadinaElement.id);
//   // console.log('alt', lampadinaElement.alt);
//   // console.log('src', lampadinaElement.src);

//   lampadinaElement.src = 'img/yellow_lamp.png';
//   lampadinaElement.alt = 'Lampadina Accesa';
// });

// function addEventListener(action, callback){}

//versione bonus

btnElement.addEventListener('click', function () {
  // console.log('ho cliccato sul bottone');

  // console.log('id', lampadinaElement.id);
  // console.log('alt', lampadinaElement.alt);
  // console.log('src', lampadinaElement.src);

  // console.log(lampadinaElement.classList);
  // console.log(lampadinaElement.className);

  //legenda
  const classOff = 'off';
  const onLampPath = 'img/yellow_lamp.png';
  const offLampPath = 'img/white_lamp.png';

  if (lampadinaElement.classList.contains(classOff)) {
    lampadinaElement.src = onLampPath;
    //lampadinaElement.classList.remove('off');

    btnElement.innerText = 'Spegni';
  } else {
    lampadinaElement.src = offLampPath;
    //lampadinaElement.classList.add('off');
    btnElement.innerText = 'Accendi';
  }

  lampadinaElement.classList.toggle(classOff);
  // lampadinaElement.src = 'img/yellow_lamp.png';
  // lampadinaElement.alt = 'Lampadina Accesa';
});
