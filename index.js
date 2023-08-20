function fetchNews() {
    const apiKey = config.apiKey;
    const apiUrl = `https://content.guardianapis.com/search?q=politics&api-key=${apiKey}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data.response.results)
        .catch((error) => {
            console.error('Error fetching news:', error.message);
            return [];
        });
}
function renderNews(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    newsData.forEach((newsItem, index) => {
        const article = document.createElement('article');
        const headline = document.createElement('h2');
        headline.textContent = newsItem.webTitle;
        article.appendChild(headline);
        newsContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNews()
        .then((newsData) => {
            renderNews(newsData);
        });
});