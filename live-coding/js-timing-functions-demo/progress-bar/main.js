const message = document.getElementById('message');
const progressBar = document.querySelector('.progress-bar');
const uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', function () {
  //  Blocco il bottone e cambio il testo
  uploadButton.disabled = true;
  uploadButton.innerText = 'Uploading...';

  // inizializzo valore e mi preparo la stringa in percentuale
  let progress = 0;
  let percentageValue = progress + '%';

  // imposto il valore della progress bar come testo e come stile
  progressBar.innerText = percentageValue;
  progressBar.style.width = percentageValue;

  // Inizio a simulare l'upload
  const interval = setInterval(function () {
    if (progress === 100) {
      // Mostro il messaggio di completamento
      message.classList.remove('d-none');

      // Faccio sparire il bottone
      uploadButton.classList.add('d-none');

      clearInterval(interval);
    } else {
      percentageValue = ++progress + '%';
      progressBar.innerText = percentageValue;
      progressBar.style.width = percentageValue;
    }
  }, 200);
});
