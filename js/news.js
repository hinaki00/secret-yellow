document.addEventListener("DOMContentLoaded", () => {

    const newsLists = document.querySelectorAll(".js-news-list");

    newsLists.forEach(newsList => {

        const limit = Number(newsList.dataset.limit) || newsData.length;

        newsData.slice(0, limit).forEach(news => {

            const item = document.createElement("a");

            item.href = news.link;
            item.className = "news-item";

            if (news.newTab) {
                item.target = "_blank";
                item.rel = "noopener noreferrer";
            }

            item.innerHTML = `
                <time datetime="${news.datetime}">
                    ${news.date}
                </time>

                <span class="news-category">
                    ${news.category}
                </span>

                <p>
                    ${news.text}
                </p>

                <span class="news-arrow">→</span>
            `;

            newsList.appendChild(item);

        });

    });

});