/* =========================
   TYPING CONTROLADO
========================= */

const texto = "Jugador De Minecraft";
const typing = document.getElementById("typing");

let index = 0;

function iniciarTyping() {

    if (!typing) return;

    typing.innerHTML = "";
    index = 0;

    escribir();
}

function escribir() {

    if (index < texto.length) {

        typing.innerHTML += texto.charAt(index);
        index++;

        setTimeout(escribir, 120);
    }
}

/* =========================
   MENU ACTIVO
========================= */

const links = document.querySelectorAll(".menu a");
const secciones = document.querySelectorAll("#inicio,#acerca");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach(sec => {
        const top = sec.offsetTop - 180;

        if (scrollY >= top) {
            actual = sec.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + actual) {
            link.classList.add("active");
        }
    });

});

/* =========================
   SCROLL SUAVE
========================= */

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const destino = document.querySelector(link.hash);

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================
   SCROLL ANIMATIONS
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });

}, { threshold: 0.25 });

document.querySelectorAll(".hero,.about-image,.about-text,footer")
.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});