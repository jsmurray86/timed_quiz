const userName = document.querySelector('#userName')
const saveScore = document.querySelector('#saveScore')
const finalScore = document.querySelector('#finalScore')
//const mostRecentScore = localStorage.getItem('mostRecentScore')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORE = 4

finalScore.innerText = mostRecentScore

userName.addEventListener('keyup',() => {
    saveScoreBtn.disabled = !userName.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: userName.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score 
    })

    highScores.splice(4)

    localStorage.setItem('highScores', JSON.stringify(highScores))

    window.location.assign('/')



}