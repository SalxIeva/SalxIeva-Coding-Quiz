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
        question: "What are the types of variables in JavaScript?",
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



