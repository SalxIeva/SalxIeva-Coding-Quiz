// check to make sure that js is connected to index.html
// console.log("questions");


// Questions contain buttons for each answer.
// When answer is clicked, the next question appears

// questions array
var questions = [
    {
        question: "What is HTML stand for?",
        answers: ["1. Hyper Text Module Language",
        "2. Hyper Text Markup Language",
        "3. Hyper Type Markup Language",
        "4. Hyper Type Micro Language"],
        correctAnswer: "2. Hyper Text Markup Language"
    },
    {
        question: "What is CSS(Cascading Style Sheets) used for?",
        answers: ["1. To style and layout web pages",
        "2. To interact with a user",
        "3. To style and add content to web pages",
        "4. To add images"],
        correctAnswer: "1. To style and layout web pages"
    },
    {
        question: "What are the two types of variables in JavaScript?",
        answers: ["1. Var, For, Const, Let",
        "2. Local variables and global variables",
        "3. Loacl variables and public variables",
        "4. Dependant variables and independant variables"],
        correctAnswer: "2. Local variables and global variables"
    },
    {
        question: "What does API stand for?",
        answers: ["1. Application Programming Information",
        "2. Application Prototype Interface",
        "3. Application Programming Index",
        "4. Application Programming Interface"],
        correctAnswer: "4. Application Programming Interface"
    },
    {
        question: "Which of the following allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
        answers: ["1. Javascript",
        "2. DOM",
        "3. API",
        "4. JSON"],
        correctAnswer: "2. DOM"
    },
    {
        question: "What is Git repository?",
        answers: ["1. It provides an emulation layer for a Git command line experience.",
        "2. It is used to manage multiple versions of source code.",
        "3. It is a central storage location for managing and tracking changes in files and directories.",
        "4. It is used to point to an existing code and make a clone or copy of that code in a new directory, at another location. "],
        correctAnswer: "3. It is a central storage location for managing and tracking changes in files and directories."
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
var submitBtn = document.querySelector("#submit");
var endScreen = document.querySelector("#end-screen"); 
var startScreen = document.querySelector("#start-screen");


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
    if (selectedAnswer === correctAnswer) {
        // if user pressed correct answer next question with show up
    } else {
        // if user pressed wrong answer
        // subtract 10 seconds for incorrect answers
        timeLeft -= 10; 
    }
    
    nextQuestion(); // nextQuestion function is called to move to the next question
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
    
}

// Add an event listener to the start button to begin the quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hide");
    startScreen.classList.add("hide");
    questionEl.classList.remove("hide");


    displayQuestion();
}

function endQuiz() {
    endScreen.classList.remove("hide");
    questionEl.classList.add("hide");
}
submitBtn.addEventListener("click", endQuiz);