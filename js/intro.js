const stars = document.getElementById("stars");
const intro = document.getElementById("intro");
const home = document.getElementById("home");
const barra = document.querySelector(".loader-fill");
const letras = document.querySelectorAll("#welcome span");

// 🔒 BLOQUEAR SCROLL INICIAL
document.body.style.overflow = "hidden";

/* =========================
   ESTRELLAS
========================= */
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 4 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    stars.appendChild(star);
}

/* =========================
   LETRAS INTRO
========================= */
let i = 0;

function animarLetras() {
    if (i < letras.length) {
        letras[i].classList.add("show");
        i++;
        setTimeout(animarLetras, 200);
    }
}

setTimeout(animarLetras, 500);

/* =========================
   BARRA DE CARGA
========================= */
let progreso = 0;

const carga = setInterval(() => {
    progreso += 1;
    barra.style.width = progreso + "%";

    if (progreso >= 100) {
        clearInterval(carga);
        finalizarIntro();
    }
}, 25);

/* =========================
   FINAL INTRO (CLAVE)
========================= */
function finalizarIntro() {

    intro.classList.add("fade-out");

    setTimeout(() => {
        intro.style.display = "none";

        home.classList.add("show");

        document.body.style.overflow = "auto";

        iniciarTyping(); // 🔥 IMPORTANTE: inicia aquí

    }, 800);
}