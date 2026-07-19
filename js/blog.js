document.addEventListener("DOMContentLoaded", () => {

    const blogLists = document.querySelectorAll(".js-blog-list");

    blogLists.forEach(blogList => {

        const limit = Number(blogList.dataset.limit) || blogData.length;

        blogData.slice(0, limit).forEach(blog => {

            const article = document.createElement("article");

            article.className = "blog-card";

article.innerHTML = `
    <a href="${blog.link}">

        <div class="blog-card-image">
            <img src="${blog.image}" alt="${blog.title}">
        </div>

        <div class="blog-card-content">

            <div class="blog-meta">
                <time>${blog.date}</time>
                <span>BLOG</span>
            </div>

            <h2>
                ${blog.title}
            </h2>

            <p>
                ${blog.text}
            </p>

        </div>

    </a>
`;

            blogList.appendChild(article);

        });

    });

});