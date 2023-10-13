"use strict";

const questions = [
  {
    title: "What does HTML stand for?",
    answers: [
      { text: "A) Hyper Text Markup Language", correct: true },
      { text: "B) High Tech Modern Language", correct: false },
      { text: "C) Hyperlink and Text Markup Language", correct: false },
      { text: "D) Home Tool Markup Language", correct: false },
    ],
  },
  {
    title:
      "In JavaScript, which keyword is used to declare a constant variable?",
    answers: [
      { text: "A) var", correct: false },
      { text: "B) let", correct: false },
      { text: "C) const", correct: true },
      { text: "D) variable", correct: false },
    ],
  },
  {
    title: "Which of the following is NOT a version control system?",
    answers: [
      { text: "A) Git", correct: false },
      { text: "B) Subversion (SVN)", correct: false },
      { text: "C) Mercurial", correct: false },
      { text: "D) Java", correct: true },
    ],
  },
  {
    title: "How do you get the last character of a string in JavaScript?",
    answers: [
      { text: "A) string.length - 1", correct: false },
      { text: "B) string[string.length - 1]", correct: true },
      { text: "C) string[string.length]", correct: false },
      { text: "D) string.charAt(string.length - 1)", correct: false },
    ],
  },
  {
    title: "What does the !== operator do in JavaScript?",
    answers: [
      {
        text: "A) Checks for equality without type conversion",
        correct: false,
      },
      {
        text: "B) Checks for inequality without type conversion",
        correct: false,
      },
      { text: "C) Checks for equality with type conversion", correct: false },
      { text: "D) Checks for inequality with type conversion", correct: true },
    ],
  },
  {
    title: "How do you declare a function in JavaScript?",
    answers: [
      { text: "A) function myFunction() { }", correct: true },
      { text: "B) function = myFunction() { }", correct: false },
      { text: "C) function: myFunction() { }", correct: false },
      { text: "D) All of the above", correct: false },
    ],
  },
  {
    title: "What is the purpose of the `alert` function in JavaScript?",
    answers: [
      { text: "A) To display a message to the user.", correct: true },
      { text: "B) To display a confirmation dialog.", correct: false },
      { text: "C) To get user input through a dialog box.", correct: false },
      { text: "D) To print output to the console.", correct: false },
    ],
  },
  {
    title:
      "Which logical operator returns true if at least one of the expression is true?",
    answers: [
      { text: "A) &&", correct: false },
      { text: "B) ||", correct: true },
      { text: "C) !", correct: false },
      { text: "D) &", correct: false },
    ],
  },
  {
    title:
      "Which data type is used to represent true/false values in JavaScript?",
    answers: [
      { text: "A) String", correct: false },
      { text: "B) Primitive", correct: false },
      { text: "C) Reference", correct: false },
      { text: "D) Boolean", correct: true },
    ],
  },
  {
    title: "Is this Project Creator Handsome?",
    answers: [
      { text: "A) Yes!", correct: true },
      { text: "B) Of Course!", correct: true },
      { text: "C) Just Wow!", correct: true },
      { text: "D) Absolutely!", correct: true },
    ],
  },
];

const question = document.querySelector(".question");
const buttons = document.querySelector(".buttons");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let score = 0;

// *starting quiz
const start = () => {
  currentIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
};
start();

// * rendering questions in display
function showQuestion() {
  resetState();
  let questionNumber = currentIndex + 1;
  question.innerText = questionNumber + ". " + questions[currentIndex].title;
  questions[currentIndex].answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerText = ans.text;
    button.classList.add("btn");
    buttons.append(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", chooseAns);
  });
}

// * remove first child
function resetState() {
  nextBtn.style.display = "none";
  while (buttons.firstElementChild) {
    buttons.removeChild(buttons.firstElementChild);
  }
}

// * choose answer
function chooseAns(e) {
  const btnCorrect = e.target;
  const correct = btnCorrect.dataset.correct === "true";
  if (correct) {
    btnCorrect.classList.add("correct");
    score++;
    console.log(score);
  } else {
    btnCorrect.classList.add("wrong");
  }
  Array.from(buttons.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  nextBtn.style.display = "block";
}

// ! next button event listener
nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length) {
    handler();
  } else {
    start();
  }
});

// * next button handler
function handler() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    resetState();
    question.innerText = `Your got ${score} scores out of ${questions.length}`;
    nextBtn.style.display = "block";
    nextBtn.innerText = "Play Again";
  }
}
