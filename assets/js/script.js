var testConnect = ["dogs", "cats"];
console.log(testConnect);
console.log("Hello world")

var startButton = document.querySelector(".start-button");
var submitButton = document.querySelector(".submit-button");
var scoreButton = document.querySelector("score-button");

var myAnswer = "";
var loseTime;
var isCorrect = false;
var timer;

//arrays with questions and answers//
var questionOne = ["JavaScript is a(n)__________ language. "];
var answerOne = [
  "A. Object-oriented",
  "B. Object-based",
  "C. Procedural",
  "D. None of the above",
];
var questionTwo = [
  "Which of the following keywords is used to define a variable in JavaScript?",
];
var answerTwo = ["A. var", "B. let", "C. Both A and B", "D. None of the above"];
var questionThree = [
  "Which of the following methods is used to access HTML elements using JavaScript?",
];
var answerThree = [
  "A. getElementbyId",
  "B. getElementsByClassName()",
  "C. Both A and B",
  "D. None of the above",
];

//start button

//set time function (setinterval method??) to start timer/countdown
//triggers answerCorrect() and answerWrong()

//test if timer has run out
//triggers function gameOver()

//test/check for correct answer using IF/ELSE statements

//test/check for wrong answer using IF/ELSE     statements
//remove time from timer/clock (also setInterval?)

//??store questions and answers in an array or string??
//FOR loop to cycle through questions and answers?

//FOR loop to cycle through and increase counter for score (???)

//addEventListener for button to prompt next question when question has been answered

//PROMPT to enter initials
//loop or function() with RETURN (?)

//!! student mini-project from week 4, hangman game, has some stuff I can use.
