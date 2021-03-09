async function fetchDevToArticles() {
  const username = 'markbdsouza';
  const url = `https://dev.to/api/articles?username=${username}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  setArticles(data);
}

function setArticles(articleList) {
  let articleHolder = document.querySelector('#articles-card-columns');
  articleList.forEach((article) => {
    articleHolder.innerHTML += createArticleHTML(article);
  });
}

function createArticleHTML(article) {
  let createdDate = new Date(article.created_at);
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let dateFormat = `${createdDate.getDate()}-${
    months[createdDate.getMonth()]
  }-${createdDate.getFullYear()} `;
  return ` <div class="card highlight-dark">
    <div class="card-body">
        <a href=" ${article.url}"
            class="" target="#">
            <div class="card-title p-1">
                <h6> ${article.title}</h6>
            </div>
            <div class="card-text">
             <div>${article.description}</div>
             <small>${dateFormat}</small>
             </div>
        </a>
    </div>
</div>`;
}

fetchDevToArticles();
