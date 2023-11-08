// // check to make sure that js is connected to highscores.html
// console.log("scores"); 

// // Retrieve the highscores element
// var highScores = document.querySelector("#highscores");

// // Function to add a user's score and initials to the highscores list
// function addHighScore(userInitials, totalScore) {
//   // New list item created to save scores in the ordered #highscores list
//   var highScoresLi = document.createElement("li");
//   highScoresLi.textContent = userInitials + " - " + totalScore;

//   // The list item appended to the highscores list
//   highScores.appendChild(highScoresLi);
// }
// // retrieve scores from localStorage
// var totalScore = parseInt(localStorage.getItem("totalScore"));
// var userInitials = localStorage.getItem("userInitials");

// if (userInitials !== null && !isNaN(totalScore)) {
//   // Function called to add the user's score to the highscores list
//   addHighScore(userInitials, totalScore);
// }

// // userScores array taken from localStorage
// var userScores = [];

// for (var i = 0; i < localStorage.length; i++) {
//   var key = localStorage.key(i);
//   var value = parseInt(localStorage.getItem(key));

//   if (!isNaN(value)) {
//     userScores.push({ initials: key, score: value });
//   }
// }
// // function to return highest score and user initials
// userScores.sort(function (a, b) {
//   return b.score - a.score;
// });

// if (userScores.length > 0) {
//   var highestScore = userScores[0];
//   document.querySelector("#highscores").textContent = "Highest Score: " + highestScore.initials + " " + highestScore.score;
// }

// // Function to clear high scores
// function clearHighScores() {
//   localStorage.clear(); // Clear all data in localStorage
//   // Clear the highscores list by setting its innerHTML to an empty string
//   highScores.innerHTML = "";
// }

// var clearScoresBtn = document.querySelector("#clear");

// // Event listener for the "Clear Highscores" button
// clearScoresBtn.addEventListener("click", clearHighScores);


// check to make sure that js is connected to highscores.html
console.log("scores"); 

// Retrieve the highscores element
var highScores = document.querySelector("#highscores");

// Function to add a user's score and initials to the highscores list
function addHighScore(userInitials, totalScore) {
  // New list item created to save scores in the ordered #highscores list
  var highScoresLi = document.createElement("li");
  highScoresLi.textContent = userInitials + " - " + totalScore;

  // The list item appended to the highscores list
  highScores.appendChild(highScoresLi);
}

// retrieve scores from localStorage
var totalScore = parseInt(localStorage.getItem("totalScore"));
var userInitials = localStorage.getItem("userInitials");

if (userInitials !== null && !isNaN(totalScore)) {
  // Function called to add the user's score to the highscores list
  addHighScore(userInitials, totalScore);
}

// userScores array taken from localStorage
var userScores = [];

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = parseInt(localStorage.getItem(key));

  if (!isNaN(value)) {
    userScores.push({ initials: key, score: value });
  }
}

// function to return highest score and user initials
userScores.sort(function (a, b) {
  return b.score - a.score;
});

if (userScores.length > 0) {
  var highestScore = userScores[0];
  var highestScoreLi = document.createElement("li");
  if (highestScore.initials !== undefined) {
  highestScoreLi.textContent = highestScore.initials + " " + highestScore.score;
  }
  // Append the highest score as a new list item
  highScores.appendChild(highestScoreLi);
}

// Function to clear high scores
function clearHighScores() {
  localStorage.clear(); // Clear all data in localStorage
  // Clear the highscores list by setting its innerHTML to an empty string
  highScores.innerHTML = "";
}

var clearScoresBtn = document.querySelector("#clear");

// Event listener for the "Clear Highscores" button
clearScoresBtn.addEventListener("click", clearHighScores);

