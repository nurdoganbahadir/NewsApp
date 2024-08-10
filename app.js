//*my api key = 2e64332ddcb64dc7b50dd5c1ab45d8a4
const searchInput = document.querySelector("#searchInput");
const country = document.querySelector(".form-select");
document.querySelector(".btn").onclick = () => {
  const news = async () => {
    const BASE_URL = "https://newsapi.org/v2/everything";
    const API_KEY = "2e64332ddcb64dc7b50dd5c1ab45d8a4";
    const query = searchInput.value;
    const language = country.options[country.selectedIndex].value;

    try {
      const URL = `${BASE_URL}?q=${query}&apiKey=${API_KEY}&language=${language}`;
      const res = await fetch(URL);
      const data = await res.json();
      newsScreen(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  news();
};

function newsScreen(news) {
  const rowScreen = document.querySelector(".row");
  rowScreen.innerHTML = "";

  news.forEach((item) => {
    const { title, content, urlToImage, url } = item;
    const defaultImage = "./img/404.png";
    rowScreen.innerHTML += `
    <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card" style="max-height: 100%">
            <img src="${
              urlToImage || defaultImage
            }" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
                ${content}
              </p>
              <a href="${url}" class="btn btn-primary">Go News</a>
              <a href=""></a>
            </div>
        </div>
    </div>
    `;
  });
}

document.querySelector("body").onload = function () {
  searchInput.focus();
};
