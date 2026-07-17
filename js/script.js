"use strict";

/* ハンバーガーメニュー */

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".nav");
    const navigationLinks = document.querySelectorAll(".nav a");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            document.body.classList.toggle("menu-open", isOpen);

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "メニューを閉じる" : "メニューを開く"
            );
        });

        navigationLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuButton.classList.remove("active");
                document.body.classList.remove("menu-open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute(
                    "aria-label",
                    "メニューを開く"
                );
            });
        });
    }

    /* Lightbox */

    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeButton = document.querySelector(".lightbox-close");
 const galleryItems = document.querySelectorAll(
    ".gallery-item, .gallery-list-item"
);

    if (!lightbox || !lightboxImage || !closeButton) {
        console.error("LightboxのHTMLが見つかりません");
        return;
    }

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    };

    galleryItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const image = item.querySelector("img");

            if (!image) {
                return;
            }

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {
            closeLightbox();
        }
    });
});

/* ローディング画面 */

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    if (!loading) {
        return;
    }

    setTimeout(() => {
        loading.classList.add("hide");
    }, 1700);
});