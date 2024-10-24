console.log('cronometro');

// Recuperiamo gli elementi
const display = document.getElementById('display');
const startButton = document.querySelector('.btn-success');
const stopButton = document.querySelector('.btn-danger');

let timer; // va dichiarato qui, affinchè sia visibile allo stop.

// QUANDO SCHIACCIO START
startButton.addEventListener('click', () => {
  // Gestiamo i bottoni
  startButton.disabled = true;
  stopButton.disabled = false;

  // Gestiamo il timer
  count = 0;
  display.innerText = count;

  // incremento il tempo
  timer = setInterval(() => {
    display.innerText = ++count;
  }, 1000);
});

// QUANDO SCHIACCIO STOP
stopButton.addEventListener('click', () => {
  // Gestiamo i bottoni
  startButton.disabled = false;
  stopButton.disabled = true;

  // Blocco il timer
  clearInterval(timer);
});
