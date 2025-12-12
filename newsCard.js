export default function createNewsCard(article) {
  return `
    <div class="news-card">
      <img src="${article.urlToImage || './assets/placeholder.jpg'}" alt="news" />
      <h3>${article.title}</h3>
      <p>${article.description || "No description available."}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    </div>
  `;
}
