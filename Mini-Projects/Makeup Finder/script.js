console.log('it works');
const detailsElement = document.querySelector('.details');
let DATA;

async function getData() {
  console.log('in get data');
  let fetchData = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  );
  DATA = await fetchData.json();
  console.log(DATA);
  console.log('ou get data');
  updateDetails(DATA);
}

function updateDetails(jsonEl) {
  //   detailsElement.innerHTML = JSON.stringify(jsonEl);
  let displayDataHTML;
  detailsElement.innerHTML = '';

  jsonEl.forEach((item) => {
    displayDataHTML += ` <div class="card">
    <img src="${item.image_link}" alt="">
    <div>${item.name} by ${item.brand} </div> <div>${item.price}${item.price_sign}</div> 
    </div>`;
  });
  detailsElement.innerHTML = displayDataHTML;
}

getData();
