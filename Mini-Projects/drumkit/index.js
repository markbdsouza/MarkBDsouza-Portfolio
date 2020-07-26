const buttonsEl = document.querySelectorAll('.drum');
// let audio;

let SOUND_MAPPING = {
  W: './sounds/crash.mp3',
  A: './sounds/kick-bass.mp3',
  S: './sounds/snare.mp3',
  D: './sounds/tom-1.mp3',
  J: './sounds/tom-2.mp3',
  K: './sounds/tom-3.mp3',
  L: './sounds/tom-4.mp3',
};

function drumClicked(e) {
  const alphabet = e.currentTarget.innerHTML.toUpperCase();
  playSound(alphabet);
  animateButton(alphabet);
}

function keyboardEvent(e) {
  const alphabet = e.key.toUpperCase();
  if (Object.keys(SOUND_MAPPING).includes(alphabet)) {
    playSound(alphabet);
    animateButton(alphabet);
  }
}

function playSound(alphabet) {
  let audio = new Audio(SOUND_MAPPING[alphabet]);
  audio.play();
}

function animateButton(key) {
  const button = document.querySelector(`.${key.toLowerCase()}`);
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 200);
}

buttonsEl.forEach((btn) => btn.addEventListener('click', drumClicked));
document.addEventListener('keydown', keyboardEvent);
