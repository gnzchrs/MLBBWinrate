const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");

calcBtn.addEventListener("click", function () {
  const tMatches = parseFloat(document.getElementById("tMatches").value);
  const tWR = parseFloat(document.getElementById("tWR").value);
  const targetWR = parseFloat(document.getElementById("targetWR").value);
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (!tMatches || !tWR || !targetWR) return;

  if (targetWR <= tWR) {
    resultText.innerHTML = "TARGET REACHED OR LOWER THAN CURRENT.";
    resultBox.style.display = "block";
    return;
  }

  const currentWins = Math.round((tWR / 100) * tMatches);
  const winsNeeded = Math.ceil(
    (targetWR * tMatches - 100 * currentWins) / (100 - targetWR),
  );

  resultText.innerHTML = `
        <p style="margin:0; font-size: 0.9rem;">ANALYSIS COMPLETE:</p>
        <span class="highlight">${winsNeeded}</span> STRAIGHT WINS REQUIRED<br>
        TO REACH <span class="gold">${targetWR}%</span>
    `;
  resultBox.style.display = "block";
});

resetBtn.addEventListener("click", function () {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("resultBox").style.display = "none";
});
