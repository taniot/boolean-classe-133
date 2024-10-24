console.log('cronometro');

// Recuperiamo gli elementi
const display = document.getElementById('display');
const startButton = document.querySelector('.btn-success');
const stopButton = document.querySelector('.btn-danger');
const pauseButton = document.querySelector('.btn-secondary');

let timer;
let count;
let isPaused = false;

const incrementTimer = () => {
  timer = setInterval(() => {
    display.innerText = ++count;
  }, 1000);
};

startButton.addEventListener('click', () => {
  // Gestiamo i bottoni
  startButton.disabled = true;
  stopButton.disabled = false;
  pauseButton.disabled = false;

  // Gestiamo il timer
  count = 0;
  display.innerText = count;

  // incremento il tempo
  incrementTimer();
});

stopButton.addEventListener('click', () => {
  // Gestiamo i bottoni
  startButton.disabled = false;
  pauseButton.disabled = true;
  stopButton.disabled = true;
  pauseButton.innerText = 'PAUSE';

  // Blocco il timer
  clearInterval(timer);
});

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timer);
    pauseButton.innerText = 'RESUME';
  } else {
    pauseButton.innerText = 'PAUSE';
    // Incremento il timer
    incrementTimer();
  }
});
