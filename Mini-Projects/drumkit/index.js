const buttonsEl = document.querySelectorAll('.drum');
// let audio;

let SOUND_MAPPING = {
  J: './sounds/crash.mp3',
  K: './sounds/kick-bass.mp3',
  L: './sounds/snare.mp3',
  A: './sounds/tom-1.mp3',
  S: './sounds/tom-2.mp3',
  D: './sounds/tom-3.mp3',
  W: './sounds/tom-4.mp3',
};

function drumClicked(e) {
  playSound(e.currentTarget.innerHTML.toUpperCase());
  animateButton(e.currentTarget.innerHTML.toUpperCase());
}

function keyboardEvent(e) {
  playSound(e.key.toUpperCase());
  animateButton(e.key.toUpperCase());
}

function playSound(alphabet) {
  let audio = new Audio(SOUND_MAPPING[alphabet]);
  audio.play();
}

function animateButton(key) {}

buttonsEl.forEach((btn) => btn.addEventListener('click', drumClicked));
document.addEventListener('keydown', keyboardEvent);
