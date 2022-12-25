const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnStop = document.getElementById('btn-stop');
const btnDelete = document.getElementById('btn-delete');
const textInput = document.getElementById('text');

let currentCharacter

btnPlay.addEventListener('click', () => {
  playText(textInput.value)
});

btnPause.addEventListener('click', pauseText);
btnStop.addEventListener('click', stopText);

btnDelete.addEventListener("click", function () {
  textInput.value = "";
});


const utterance = new SpeechSynthesisUtterance();

utterance.addEventListener('end', () => {
  textInput.disabled = false
});

utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex
});

function playText(text) {

  if(speechSynthesis.paused && speechSynthesis.speaking) {

    return speechSynthesis.resume()

  }

  if(speechSynthesis.speaking) 

  return
  utterance.text = text
  textInput.disabled = true
  speechSynthesis.speak(utterance)

}

function pauseText() {
  if(speechSynthesis.speaking) 
    speechSynthesis.pause()
}

function stopText() {
  speechSynthesis.resume()
  speechSynthesis.cancel()
}