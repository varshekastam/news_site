export default async function getNews() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?language=en&apiKey=41d0a40a8aa949f580499c4499cab1ef"
    );

    const json = await response.json();
    return json.articles || [];
  } catch (err) {
    console.error("Failed to fetch news:", err);
    return [];
  }
}
