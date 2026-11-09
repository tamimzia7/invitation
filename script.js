const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const buttonArea = document.getElementById("buttonArea");
const hint = document.getElementById("hint");
const successScreen = document.getElementById("successScreen");
const mainCard = document.getElementById("mainCard");
const confettiLayer = document.getElementById("confettiLayer");
const againButton = document.getElementById("againButton");

const playfulMessages = [
  "Oops! Too slow 😜",
  "Hehe, try the other one! 💗",
  "That button is feeling shy 🙈",
  "Are you sure? Give YES a chance! 🌸",
  "The universe says… click YES! ✨"
];
let attempts = 0;

function moveNoButton() {
  // Keep the moving button within the invitation card.
  const area = buttonArea.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, area.width - button.width);
  const maxY = 85;
  const x = Math.random() * maxX - maxX / 2;
  const y = (Math.random() * maxY) - maxY / 2;
  noButton.style.position = "relative";
  noButton.style.transform = `translate(${x}px, ${y}px)`;
  hint.textContent = playfulMessages[attempts % playfulMessages.length];
  attempts++;
}

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });

function celebrate() {
  mainCard.classList.add("hidden");
  successScreen.classList.remove("hidden");
  confettiLayer.innerHTML = "";
  const pieces = ["💗", "💕", "💖", "🌸", "✨", "♥"];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--duration", `${3 + Math.random() * 3}s`);
    piece.style.setProperty("--size", `${14 + Math.random() * 17}px`);
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    confettiLayer.appendChild(piece);
  }
}
yesButton.addEventListener("click", celebrate);

againButton.addEventListener("click", () => {
  successScreen.classList.add("hidden");
  mainCard.classList.remove("hidden");
  noButton.style.transform = "";
  noButton.style.position = "";
  hint.textContent = "Choose wisely… my heart is waiting! 💌";
  attempts = 0;
  confettiLayer.innerHTML = "";
});
