/* =====================================================
   TELA DE ABERTURA
===================================================== */

window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.classList.add("hide");

    }, 2200);

});


/* =====================================================
   BOTÃO DA PETIÇÃO
===================================================== */

const signButton = document.getElementById("signButton");

const petitionResult = document.getElementById("petitionResult");


signButton.addEventListener("click", () => {

    signButton.style.display = "none";

    petitionResult.classList.add("active");

});


/* =====================================================
   ANIMAÇÕES AO ROLAR
===================================================== */

const elementsToReveal = document.querySelectorAll(
    ".wonder-card, .evaluation-item, .letter, .petition-box"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementsToReveal.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(element);

});


/* =====================================================
   PARALLAX SUAVE NA FOTO PRINCIPAL
===================================================== */

const mainPhoto = document.querySelector(".main-photo img");


window.addEventListener("scroll", () => {

    if (!mainPhoto) return;

    const rect = mainPhoto.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if (
        rect.top < windowHeight &&
        rect.bottom > 0
    ) {

        const progress =
            (windowHeight - rect.top) /
            (windowHeight + rect.height);

        const movement =
            (progress - 0.5) * 30;

        mainPhoto.style.transform =
            `scale(1.05) translateY(${movement}px)`;

    }

});


/* =====================================================
   CURSOR / MOVIMENTO SUTIL NO DESKTOP
===================================================== */

if (window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        const background =
            document.querySelector(".hero-background");

        if (background) {

            background.style.transform =
                `translate(${x * 20}px, ${y * 20}px)`;

        }

    });

}