const detailsElement = document.querySelector('.details');
let categorySetEl = document.querySelector('.category__set');
let DATA;
let categoryBtnList;
let categorySet = new Set();

async function getData() {
  let fetchData = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  );
  DATA = await fetchData.json();
  console.log(DATA);

  updateDetails(DATA, (isInitLoad = true));
}

function updateDetails(jsonEl, isInitLoad = false) {
  //   detailsElement.innerHTML = JSON.stringify(jsonEl);
  let displayDataHTML = '';
  detailsElement.innerHTML = '';

  jsonEl.forEach((item) => {
    if (isInitLoad) {
      categorySet.add(item.category);
    }

    displayDataHTML += `<div class="card">
    <div class="card__img"><img
            src="${item.image_link}"
            alt="">
    </div>
    <div class="card__header">
        <span class="card__name">${item.name}</span>
        <span class="card__company"> by ${item.brand}</span>
    </div>
    <div class="card__details">
        <div class="card__price">${item.price}${item.price_sign}</div>
    </div>
    ${item.category}
</div>`;
  });
  detailsElement.innerHTML = displayDataHTML;

  if (isInitLoad) {
    updateCategories(categorySet);
  }
}

function filterByCategory(e) {
  categoryBtnList.forEach((btn) => {
    btn.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
  let filteredData = [...DATA].filter((a) => {
    if (e.currentTarget.dataset.value === 'all') {
      return true;
    } else if (e.currentTarget.dataset.value === 'null') {
      return a.category === null;
    } else return a.category === e.currentTarget.dataset.value;
  });
  updateDetails(filteredData);
}

function updateCategories(setOfCategories) {
  let text;
  for (let item of setOfCategories) {
    if (item != null) {
      text = item.charAt(0).toUpperCase() + item.slice(1);
    } else text = 'Other';
    categorySetEl.innerHTML += `<button class="category__item" data-value=${item}> ${text} </button>`;
  }
  categoryBtnList = document.querySelectorAll('.category__item');
  categoryBtnList.forEach((btn) => {
    btn.addEventListener('click', filterByCategory);
  });
}

getData();
