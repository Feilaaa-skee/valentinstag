/* Rätsel */
function checkAnswer() {
  const answer = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");
  const love = document.getElementById("letterContent");

  if (answer === "14.02.2023") { // <-- HIER Datum anpassen
    result.textContent = "Richtig ❤️";
  } else {
    result.textContent = "Hmm… probier’s nochmal 😉";
  }
}

/* Brief öffnen */
function openLetter() {
  document.getElementById("letterContent").classList.remove("hidden");
}

/* Counter */
const startDate = new Date("2023-02-14T00:00:00"); // <-- HIER anpassen

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timeTogether").textContent =
    `${days} Tage, ${hours} Stunden & ${minutes} Minuten`;
}

setInterval(updateCounter, 1000);
updateCounter();

/* Dark Mode */
function toggleMode() {
  document.body.classList.toggle("night");
}
