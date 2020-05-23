const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

const width = canvas.width;
const height = canvas.height;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(${hue}, 60%, 60%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(options) {
  console.log(options.key);
  hue += 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (options.key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT >= 0 ? y - MOVE_AMOUNT : 0;
      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT <= 1000 ? y + MOVE_AMOUNT : 1000;
      break;
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT >= 0 ? x - MOVE_AMOUNT : 0;
      break;
    case 'ArrowRight':
      x = x + MOVE_AMOUNT <= 1600 ? x + MOVE_AMOUNT : 1600;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.stroke();

  console.log(x, y);
}

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

window.addEventListener('keydown', handleKey);

function clearCanvas() {
  ctx.clearRect(0, 0, height, width);
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

shakeBtn.addEventListener('click', clearCanvas);
