const inputField = document.getElementById('asyncInput');
const form = document.getElementById('form');

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 10, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

function draw(el) {
  let index = 1;
  let inputFieldVal = inputField.value.trim();
  const text = inputFieldVal || el.textContent;

  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    await wait(getRandomBetween(el.dataset['typeMin'], el.dataset['typeMax']));
    el.textContent = text.slice(0, index);
    index++;
    if (index <= text.length) drawLetter();
  }
  drawLetter();
}

function drawAll() {
  document.querySelectorAll('[data-type]').forEach(draw);
}

drawAll();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  drawAll();
});
