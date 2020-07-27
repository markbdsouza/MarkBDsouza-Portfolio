let simonsOrder = [];
let playedOrder = [];
const OPTIONS = {
  red: './sounds/red.mp3',
  green: './sounds/green.mp3',
  blue: './sounds/blue.mp3',
  yellow: './sounds/yellow.mp3',
  wrong: './sounds/wrong.mp3',
};

function updateScore(isReset = false) {
  if (!isReset) score++;
  $('.score').text(score);
}
function resetScore() {
  score = 0;
  updateScore({ isReset: true });
}
function resetPlayedOrder() {
  playedOrder = [];
}
function resetSimonsOrder() {
  simonsOrder = [];
}
function playTune(color) {
  let audio = new Audio(OPTIONS[color]);
  audio.play();
}
function pickRandomColor() {
  let selectedColor = Object.keys(OPTIONS)[
    Math.floor(Math.random() * (Object.keys(OPTIONS).length - 1))
  ];
  playTune(selectedColor);
  return selectedColor;
}
function clearErrorMsg() {
  $('.error').text('');
}
function setErrorMsg() {
  $('.error').text('Try Again');
  $('.start').text('Go Again?');
}
function simonPlays() {
  let pickedColor = pickRandomColor();
  simonsOrder.push(pickedColor);
  $(`[data-color=${pickedColor}]`).addClass('active');
  setTimeout(() => {
    $(`[data-color=${pickedColor}]`).removeClass('active');
  }, 300);
}
function validate() {
  let isValid = true;
  if (playedOrder.length > simonsOrder.length) isValid = false;
  playedOrder.forEach((item, index) => {
    if (playedOrder[index] !== simonsOrder[index]) {
      isValid = false;
    }
  });
  return isValid;
}
function turnPlayed(e) {
  let color = e.currentTarget.dataset.color;
  playTune(color);
  playedOrder.push(color);
  if (validate()) {
    clearErrorMsg();
    if (simonsOrder.length === playedOrder.length) {
      resetPlayedOrder();
      updateScore();
      setTimeout(simonPlays, 500);
    }
  } else {
    setErrorMsg();
    playTune('wrong');
    $('.btn').attr('disabled', true);
  }
}

function startGame() {
  $('.instructions').fadeOut();
  $('.btn').attr('disabled', false);
  resetScore();
  resetSimonsOrder();
  resetPlayedOrder();
  setTimeout(simonPlays, 1000);
}
$('.start').on('click', startGame);
$('.btn').on('click', turnPlayed);
$('.btn').attr('disabled', true);
