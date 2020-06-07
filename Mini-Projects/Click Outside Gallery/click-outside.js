const cardBtns = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardBtnClick(event) {
  const btn = event.currentTarget;
  const card = btn.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `<img src="${imgSrc.replace(
    200,
    600
  )}" alt="${name}" /> 
  <p> ${desc}</p> `;
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

//add event to call popup
cardBtns.forEach((btn) => {
  btn.addEventListener('click', handleCardBtnClick);
});

//events to close the popup modal
modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
