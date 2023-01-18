const userName = document.querySelector("#userName");
const saveScore = document.querySelector("#saveScore");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORE = 4;

finalScore.innerText = mostRecentScore;

function saveHighScore() {
  event.preventDefault();
  console.log("saveHighScore function works");
  var initials = userName.ariaValueMax;

  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  const score = {
    score: finalScore,
    name: initials,
  };

  highScores.push(score);

  window.localStorage.setItem("highScores", JSON.stringify(highScores));
}

saveScore.addEventListener("click", saveHighScore);

userName.addEventListener("onclick", () => {});


