document.addEventListener("DOMContentLoaded", () => {

    const blogLists = document.querySelectorAll(".js-blog-list");

    blogLists.forEach(blogList => {

        const limit = Number(blogList.dataset.limit) || blogData.length;

        blogData.slice(0, limit).forEach(blog => {

            const article = document.createElement("article");

            article.className = "blog-card";

            article.innerHTML = `
                <a href="${blog.link}">
                    <img src="${blog.image}" alt="${blog.title}">
                    <div class="blog-content">
                        <time>${blog.date}</time>
                        <h3>${blog.title}</h3>
                        <p>${blog.text}</p>
                    </div>
                </a>
            `;

            blogList.appendChild(article);

        });

    });

});