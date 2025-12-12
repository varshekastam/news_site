import createHeader from './components/header.js';
import createFooter from './components/footer.js';
import createNewsCard from './components/newsCard.js';
import getNews from './api/fetchNews.js';

document.getElementById("header").innerHTML = createHeader();
document.getElementById("footer").innerHTML = createFooter();

const container = document.getElementById("news-container");

async function loadNews() {
  const data = await getNews();
  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML = `<p>No news available right now.</p>`;
    return;
  }

  data.forEach(item => {
    container.innerHTML += createNewsCard(item);
  });
}

loadNews();
