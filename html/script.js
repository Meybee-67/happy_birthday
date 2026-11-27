const blowBtn = document.getElementById("blowBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const cakeScreen = document.getElementById("cakeScreen");
const cardScreen = document.getElementById("cardScreen");

const flames = document.querySelectorAll(".flame");
const smokes = document.querySelectorAll(".smoke");

const message = document.getElementById("message");

const colors = [
    "#ff4d6d",
    "#ffb703",
    "#8ecae6",
    "#8338ec",
    "#06d6a0"
];

/* Souffler les bougies */

blowBtn.addEventListener("click", () => {

    flames.forEach(flame => {
        flame.style.opacity = "0";
    });

    smokes.forEach(smoke => {
        smoke.classList.add("show");
    });

    setTimeout(() => {

        cakeScreen.classList.add("fade-out");

        setTimeout(() => {

            cakeScreen.style.display = "none";
            cardScreen.classList.remove("hidden");

        }, 800);

    }, 2200);

});

/* Confettis */

function launchConfetti() {

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}

/* Carte */

celebrateBtn.addEventListener("click", () => {

    message.textContent =
        "🎉 Tous mes meilleurs vœux pour cette nouvelle année ! 🎉";

    launchConfetti();

});