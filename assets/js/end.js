const userName = document.querySelector("#userName");
const saveScore = document.querySelector("#saveScore");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORE = 4;

finalScore.innerText = mostRecentScore;

function saveHighScore() {
  event.preventDefault();
  console.log("saveHighScore function works");
  var initials = userName.ariaValueMax.trim();

  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  const score = {
    score: finalScore,
    name: initials,
  };

  highScores.push(score);

  window.localStorage.setItem("highScores", JSON.stringify(highscores));
}

saveScore.addEventListener("click", saveHighScore);

userName.addEventListener("onclick", () => {});

/*saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: userName.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(4);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};*/
