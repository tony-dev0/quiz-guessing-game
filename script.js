const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

// Function to show the current question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Clear previous options
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });
}

// Function to handle option selection
function selectOption(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("wrong");
  } else {
    feedbackElement.textContent =
      "Wrong! The correct answer was " + currentQuestion.answer + ".";
    feedbackElement.classList.add("wrong");
    feedbackElement.classList.remove("correct");
  }

  scoreElement.textContent = "Score: " + score;

  // Move to the next question after a delay
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      feedbackElement.textContent = "";
      showQuestion();
    }, 2000);
  } else {
    setTimeout(endGame, 2000);
  }
}

// Function to end the game
function endGame() {
  questionElement.textContent = "Quiz Over!";
  optionsElement.innerHTML = "";
  submitBtn.style.display = "none";

  feedbackElement.textContent = "Final Score: " + score;
}

// Initialize the quiz
showQuestion();
