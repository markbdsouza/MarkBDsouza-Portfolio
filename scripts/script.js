import { LIST_OF_MINI_PROJECTS } from './miniProjectList.js';

let cardsHolder = document.querySelector('.container.card-columns');

function addCardToHolder(card) {
  let cardHTML = `<div class="card ">
    <div class="card-body ${card.highlight ? `highlight` : ``}">
        <div class="card-title h4">
            <i class="${card.fontAwesomeIcon} fa-2x pb-2"></i>
            <a href="./Mini-Projects/${card.folderName}/index.html" class="">${
    card.title
  }</a>
        </div>
        <div class="card-text"> ${card.description}</div>
        
        </div>
        <div class="text-muted card-footer"> ${card.credit}</div>
    </div>`;
  cardsHolder.insertAdjacentHTML('beforeend', cardHTML);
}

LIST_OF_MINI_PROJECTS.forEach(addCardToHolder);
