const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    //check for how js identifies correct answer. by number?
    question: "JavaScript is a(n)__________ language.",
    choice1: "Object-oriented",
    choice2: "Object-based",
    choice3: "Procedural",
    choice4: "None of the above",
    answer: 1,
  },
  {
    //check for how js identifies correct answer. by index?
    question:
      "Which of the following keywords is used to define a variable in JavaScript?",
    choice1: "var",
    choice2: "let",
    choice3: "Both 1 and 2",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    choice1: "getElementbyID()",
    choice2: "getElementsbyClassName()",
    choice3: "Both 1 and 2",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question:
      "Upon encountering empty statements, what does the JavaScript interpreter do? ",
    choice1: "Throws an error",
    choice2: "Ignores the statements",
    choice3: "Gives a warning",
    choice4: "None of the above",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

//create getNewQuestion() function

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //keep track of score
    return window.location.assign("/end.html");
  }
  //incrementing question counter (eg. 1 of 4, 2 of 4, etc.)
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

  //Calculates question we're currently on and correspond that to percentage we're currently at//
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  //calculate value of question index
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  //keeps track of what question we're on
  currentQuestion = availableQuestions[questionsIndex];

  //knows what question to ask
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    //refers to data.number dataset
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      //increases or increments correct score by 100 pts per line 52
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    //clicking on a question, right or wrong, will start a timer
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      //to get new or next quesion
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
