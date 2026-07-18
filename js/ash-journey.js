document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".ash-header");
    const menuButton = document.querySelector(".ash-menu-button");
    const nav = document.querySelector(".ash-nav");
    const navLinks = document.querySelectorAll(".ash-nav a");

    // ヘッダー背景
    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("is-scroll");
        } else {
            header.classList.remove("is-scroll");
        }

    });

    // スマホメニュー
    menuButton.addEventListener("click", () => {

        const isOpen = menuButton.classList.toggle("is-active");

        nav.classList.toggle("is-active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.style.overflow = isOpen
            ? "hidden"
            : "";

    });

    // メニューをクリックしたら閉じる
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("is-active");
            nav.classList.remove("is-active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    });

    // スクロールフェード
    const fadeElements = document.querySelectorAll(
        ".ash-section-heading, " +
        ".ash-story-content, " +
        ".ash-character-card, " +
        ".ash-comic-card, " +
        ".ash-gallery-grid"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    fadeElements.forEach(element => {
        observer.observe(element);
    });


    /*==============================
 Gallery Lightbox
==============================*/

const galleryImages = document.querySelectorAll(".gallery-image");
const galleryLightbox = document.getElementById("galleryLightbox");
const galleryPreview = document.getElementById("galleryPreview");
const galleryClose = document.querySelector(".gallery-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        galleryPreview.src = image.src;
        galleryPreview.alt = image.alt;

        galleryLightbox.classList.add("active");

    });

});

galleryClose.addEventListener("click", () => {

    galleryLightbox.classList.remove("active");

});

galleryLightbox.addEventListener("click", e => {

    if (e.target === galleryLightbox) {

        galleryLightbox.classList.remove("active");

    }

});
});

