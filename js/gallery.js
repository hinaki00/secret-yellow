"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const galleryLists =
        document.querySelectorAll(".js-gallery-list");

    if (
        !galleryLists.length ||
        typeof galleryData === "undefined"
    ) {
        return;
    }

    galleryLists.forEach((galleryList) => {

        const limit = Number(
            galleryList.dataset.limit
        );

        const items = limit
            ? galleryData.slice(0, limit)
            : galleryData;

        galleryList.innerHTML = items.map((item) => {
            return `
                <article class="gallery-item">

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

                            <p class="gallery-category">
                                ${item.category}
                            </p>

                            <h2>${item.title}</h2>

                            <p class="gallery-year">
                                ${item.year}
                            </p>

                        </div>

                    </button>

                </article>
            `;
        }).join("");

    });

});