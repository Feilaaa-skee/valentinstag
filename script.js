function checkAnswer() {
  const answer = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");
  const love = document.getElementById("loveMessage");

  if (answer === "14.02.2023") { // <-- HIER anpassen
    result.textContent = "Richtig ❤️";
    love.classList.remove("hidden");
  } else {
    result.textContent = "Hmm… probier’s nochmal 😉";
  }
}
