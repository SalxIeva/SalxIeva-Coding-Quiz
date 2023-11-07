// check to make sure that logic.js is active
console.log("logic.js is active");

// DOM elements
var questionEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var timeEl = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");
var startScreen = document.querySelector("#start-screen");

// Quiz state variables
var currentQuesIndex = 0;
var quizStart = false;
var winCount = 0;
var timeLeft = 80; // Initial quiz time in seconds
var totalScore = 0;
var timer;

// Function to display the current question
function displayQuestion() {
    var currentQuestion = questions[currentQuesIndex];
    var questionText = document.querySelector("#question-title");
    questionText.textContent = currentQuestion.question;

    var answerBtns = document.querySelector("#choices");
    answerBtns.innerHTML = '';

    currentQuestion.answers.forEach(function (answer) {
        var answerBtn = createAnswerButton(answer, currentQuestion.correctAnswer);
        answerBtns.appendChild(answerBtn);
    });
}

// Create an answer button
function createAnswerButton(answer, correctAnswer) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = answer;
    answerBtn.classList.add("button");
    answerBtn.setAttribute("data-correctAnswer", correctAnswer);

    answerBtn.addEventListener("click", function () {
        checkAnswer(answer, correctAnswer);
    });

    return answerBtn;
}

// Check if the user selected the right answer
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        winCount++;
        feedback.classList.remove("hide");
        feedback.textContent = "Correct!!";
    } else {
        timeLeft -= 10;
        feedback.classList.remove("hide");
        feedback.textContent = "Wrong..";
    }
    totalScore = winCount + timeLeft;
    nextQuestion();
}

// Reset the answer buttons
function resetState() {
    var answerBtns = document.querySelector("#choices");
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

// Show the next question
function nextQuestion() {
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
        resetState();
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Start the timer
function startTime() {
    timer = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// Event listener for starting the quiz
startBtn.addEventListener("click", startQuiz);

// Start the quiz and display questions
function startQuiz() {
    if (!quizStart) {
        quizStart = true;
        currentQuesIndex = 0;
        startTime();
        displayQuestion();
        startBtn.classList.add("hide");
        startScreen.classList.add("hide");
        questionEl.classList.remove("hide");
    }
}

// Event listener for submitting the quiz
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var userInitials = initials.value;
    initials.value = "";
    feedback.classList.add("hide");
    endQuiz(userInitials);
    scores();
});

// End the quiz, store the score, and show the final score
function endQuiz() {
    endScreen.classList.remove("hide");
    questionEl.classList.add("hide");
    var userInitials = initials.value;
    localStorage.setItem(userInitials, totalScore.toString());

    var finalScores = document.querySelector("#final-score");
    finalScores.innerHTML = "Your final score is " + totalScore;
}

// Redirect to the final scores page
function scores() {
    window.location.href = "highscores.html";
}
