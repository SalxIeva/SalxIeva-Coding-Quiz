var questionEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var answerEl = document.querySelector("#choices");
var currentQuesIndex = 0;
var submitBtn = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var quizStart = false;

var timeEl = document.querySelector("#time");
var winCount = 0;
var loseCount = 0;
var isWin = false;
var timer;
var timeLeft;
var timerCount;

// Function to display the current question
function displayQuestion() {
    var currentQuestion = questions[currentQuesIndex];
    var questionText = document.querySelector("#question-title");
    questionText.textContent = currentQuestion.question;
    
    var answerBtns = document.querySelector("#choices");
    answerBtns.innerHTML = '';
    
    currentQuestion.answers.forEach(function (answer, i) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.classList.add("button");
        answerBtn.setAttribute("data-correctAnswer", currentQuestion.correctAnswer);
        
        answerBtn.addEventListener("click", function () {
            checkAnswer(answer, currentQuestion.correctAnswer);
        });
        answerBtns.appendChild(answerBtn);
    });
}
// function to check if the user selected the right answer, if not then deduct 10sec
function checkAnswer(selectedAnswer, correctAnswer) {
    // if user pressed correct answer next question will show up and the message at the bottom will display "Corect!!"
    if (selectedAnswer === correctAnswer) {
        winCount++;
        feedback.classList.remove("hide");
        feedback.textContent = "Correct!!";
    } else {
        // if user pressed wrong answer
        // subtract 10 seconds for incorrect answers
        // message at the bottom will display "Wrong.."
        timeLeft -= 10; 
        loseCount--;
        feedback.classList.remove("hide");
        feedback.textContent = "Wrong.."
    }
    // nextQuestion function is called to move to the next question
    nextQuestion(); 
}

// Function to reset the answer buttons
function resetState() {
    var answerBtns = document.querySelector("#choices");
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

// Function to show the next question
function nextQuestion() {
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
        resetState();
        displayQuestion();
    } else {
        endQuiz();
    }
}


// Function to start the timer
function startTime() {
    timer = setInterval(function () {
        timeLeft--;
    timeEl.textContent =  timeLeft + " seconds";

        if (timeLeft <= 0) {
            // stop the timer and end quiz
            clearInterval(timer); 
            endQuiz();
        }
        }, 1000);
}

var endScreen = document.querySelector("#end-screen"); 
var startScreen = document.querySelector("#start-screen");
// Add an event listener to the start button to begin the quiz
startBtn.addEventListener("click", startQuiz);
// function to show questions and hide start screen
function startQuiz() {
    if (!quizStart) {
        quizStart = true;
    currentQuesIndex = 0;
    timeLeft = 80;
    startTime()
    displayQuestion();
    startBtn.classList.add("hide");
    startScreen.classList.add("hide");
    questionEl.classList.remove("hide");
    
    displayQuestion();
    }
}
// function to show end screen
function endQuiz() {
    endScreen.classList.remove("hide");
    questionEl.classList.add("hide");
}
submitBtn.addEventListener("click", endQuiz);