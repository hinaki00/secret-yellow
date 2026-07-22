const galleryList = document.querySelector(".js-gallery-list");

if (galleryList && Array.isArray(galleryData)) {

    // gallery.html
    if (galleryList.classList.contains("gallery-list-grid")) {

  galleryList.innerHTML = galleryData
    .slice(0, limit)
    .map((item, index) => {
                return `
                    <article class="gallery-list-item">

                        <button
                            class="gallery-list-link"
                            type="button"
                            data-lightbox-image="${item.image}"
                            aria-label="${item.title}を拡大表示"
                        >

                            <div class="gallery-list-image">
                                <img
                                    src="${item.image}"
                                    alt="${item.title}"
                                    loading="lazy"
                                >
                            </div>

                            <div class="gallery-list-info">

                                <p class="gallery-list-category">
                                    ${item.category}
                                </p>

                                <h2>${item.title}</h2>

                                <p class="gallery-list-year">
                                    ${item.year}
                                </p>

                            </div>

                        </button>

                    </article>
                `;
            })
            .join("");
    }

    // index.html
    else if (galleryList.classList.contains("gallery-grid")) {

        galleryList.innerHTML = galleryData
            .slice(0, 3)
            .map((item, index) => {
                return `
                    <article class="gallery-item ${index === 0 ? "gallery-item-large" : ""}">

                        <button
                            class="gallery-link"
                            type="button"
                            data-lightbox-image="${item.image}"
                            aria-label="${item.title}を拡大表示"
                        >

                            <div class="gallery-image">
                                <img
                                    src="${item.image}"
                                    alt="${item.title}"
                                    loading="lazy"
                                >
                            </div>

                            <div class="gallery-info">

                                <p>${item.category}</p>

                                <h3>${item.title}</h3>

                            </div>

                        </button>

                    </article>
                `;
            })
            .join("");
    }
}