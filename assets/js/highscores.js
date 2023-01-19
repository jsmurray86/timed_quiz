

const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('#highScores')) || []

function renderMostRecentScore() {

    var mostRecentScore = JSON.parse(localStorage.getItem("mostRecentScores"));

    var button = document.createElement("button"); button.textContent = "High Scores List!"
}


//see webapi's activities 25 and 26 from class 