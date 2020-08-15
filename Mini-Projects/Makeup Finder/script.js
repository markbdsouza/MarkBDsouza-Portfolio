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
  updateDetails(DATA, (isInitLoad = true));
}

function updateDetails(jsonEl, isInitLoad = false) {
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
        <span class="card__name">${item.name}</span> <br>
        <span class="card__company"> by ${item.brand}</span>
    </div>
    <div class="card__details">
        <div class="card__price">${item.price} $</div>
    </div>
    ${
      item.product_colors.length > 0 ? createColorHTML(item.product_colors) : ''
    } </div>`;
  });
  detailsElement.innerHTML = displayDataHTML;

  if (isInitLoad) {
    updateCategories(categorySet);
  }
}

function createColorHTML(productColors) {
  let HTML = `<div class="card__colors"><div class="card__color-container">`;
  productColors.forEach((item) => {
    HTML += `<div class="card__color" style="background-color:${item.hex_value};"></div>`;
  });
  HTML += `</div></div>`;
  return HTML;
}

function filterByCategory(e) {
  let filteredData;
  if (e.currentTarget.classList.contains('active')) {
    e.currentTarget.classList.remove('active');
    document.querySelector("[data-value='all']").classList.add('active');
    filteredData = DATA;
  } else {
    categoryBtnList.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    filteredData = [...DATA].filter((a) => {
      if (e.currentTarget.dataset.value === 'all') {
        return true;
      } else if (e.currentTarget.dataset.value === 'null') {
        return a.category === null;
      } else return a.category === e.currentTarget.dataset.value;
    });
  }
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
