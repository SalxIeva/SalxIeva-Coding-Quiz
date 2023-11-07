// check to make sure that js is connected to index.html
// console.log("questions");


// Questions contain buttons for each answer.
// When answer is clicked, the next question appears

// questions array
var questions = [
    {
        question: "What is HTML stand for?",
        answers: ["Hyper Text Module Language",
        "Hyper Text Markup Language",
        "Hyper Type Markup Language",
        "Hyper Type Micro Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is CSS(Cascading Style Sheets) used for?",
        answers: ["To style and layout web pages",
        "To interact with a user",
        "To style and add content to web pages",
        "To add images"],
        correctAnswer: "To style and layout web pages"
    },
    {
        question: "What are the two types of variables in JavaScript?",
        answers: ["Var, For, Const, Let",
        "Local variables and global variables",
        "Loacl variables and public variables",
        "Dependant variables and independant variables"],
        correctAnswer: "Local variables and global variables"
    },
    {
        question: "What does API stand for?",
        answers: ["Application Programming Information",
        "Application Prototype Interface",
        "Application Programming Index",
        "Application Programming Interface"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Which of the following allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
        answers: ["Javascript",
        "DOM",
        "API",
        "JSON"],
        correctAnswer: "DOM"
    },
    {
        question: "What is Git repository?",
        answers: ["It provides an emulation layer for a Git command line experience.",
        "It is used to manage multiple versions of source code.",
        "It is a central storage location for managing and tracking changes in files and directories.",
        "It is used to point to an existing code and make a clone or copy of that code in a new directory, at another location. "],
        correctAnswer: "It is a central storage location for managing and tracking changes in files and directories."
    },
]
// check if questions array works
console.log(questions);

// check for the right answer

// var questionEl = document.getElementById("questions");
// var button = document.createElement("button");
// button.textContent = questions.answers('');
// document.body.appendChild(button);

// button.addEventListener("click", questions.answers);

// 

var questionEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var answerEl = document.querySelector("#choices");
var currentQuesIndex = 0;
var timer;
var timeLeft = 60; // time for every question to answer


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

function checkAnswer(selectedAnswer, correctAnswer) {

}

// Function to reset the answer buttons
function resetState() {
    var answerBtns = document.querySelector("#choices");
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function nextQuestion () {
    showQuestion([currentQuesIndex]);
}

// Function to start the quiz
// Function to start the timer
function startTime() {
    
}
// Function to check the selected answer
function checkAnswer(selectedAnswer, correctAnswer) {
    
}
// Add an event listener to the start button to begin the quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hide");
    questionEl.classList.remove("hide");

    displayQuestion();
}