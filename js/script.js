"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ハンバーガーメニュー
    ========================= */

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".nav");

    const navigationLinks =
        document.querySelectorAll(".nav a");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("active");

            menuButton.classList.toggle(
                "active",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "メニューを閉じる"
                    : "メニューを開く"
            );

        });

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");
                menuButton.classList.remove("active");
                document.body.classList.remove("menu-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "メニューを開く"
                );

            });

        });

    }


    /* =========================
       Lightbox
    ========================= */

    const lightbox =
        document.querySelector(".lightbox");

    const lightboxImage =
        document.querySelector(".lightbox-image");

    const lightboxClose =
        document.querySelector(".lightbox-close");

    const closeLightbox = () => {

        if (!lightbox || !lightboxImage) {
            return;
        }

        lightbox.classList.remove("active");
        lightboxImage.src = "";
        lightboxImage.alt = "";

    };

    document.addEventListener("click", (event) => {

        const galleryLink =
            event.target.closest(
                "[data-lightbox-image]"
            );

        if (
            !galleryLink ||
            !lightbox ||
            !lightboxImage
        ) {
            return;
        }

        const imageSrc =
            galleryLink.dataset.lightboxImage;

        const image =
            galleryLink.querySelector("img");

        lightboxImage.src = imageSrc;
        lightboxImage.alt =
            image ? image.alt : "";

        lightbox.classList.add("active");

    });

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }

    if (lightbox) {

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

    }

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});


/* =========================
   ローディング画面
========================= */

window.addEventListener("load", () => {

    const loading =
        document.getElementById("loading");

    if (!loading) {
        return;
    }

    setTimeout(() => {
        loading.classList.add("hide");
    }, 1700);

});

/* =========================
   VISITOR COUNTER
========================= */

const visitorCount =
    document.getElementById("visitor-count");

if (visitorCount) {

    const counterUrl =
        "https://hinaki00.goatcounter.com/counter/TOTAL.json";

    fetch(counterUrl)
        .then((response) => {

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })

        .then((data) => {

            console.log("GoatCounter:", data);

const oldVisitors = 340;

const goatCount =
    Number(String(data.count).replace(/,/g, ""));

const totalCount =
    oldVisitors + goatCount;

visitorCount.textContent =
    String(totalCount).padStart(6, "0");
        })

        .catch((error) => {

            console.error(
                "Visitor counter error:",
                error
            );

            visitorCount.textContent = "------";
        });
}