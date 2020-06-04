import { LIST_OF_MINI_PROJECTS } from './miniProjectList.js';

let cardsHolder = document.querySelector('.container.card-columns');

console.log(cardsHolder);

function addCardToHolder(card) {
  let cardHTML = `<div class="card p-1">
    <div class="card-body">
        <div class="card-title h4">
            <i class="${card.fontAwesomeIcon} fa-2x pb-2"></i>
            <a href="./Mini-Projects/${card.folderName}/index.html" class="">${card.title}</a>
        </div>
        <div class="card-text"> ${card.description}</div>
        <div class="text-muted"> ${card.credit}</div>
        </div>
    </div>`;
  cardsHolder.insertAdjacentHTML('beforeend', cardHTML);
}

LIST_OF_MINI_PROJECTS.forEach(addCardToHolder);
