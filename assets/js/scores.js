// check to make sure that js is connected to highscores.html
console.log("scores"); 


// When the game ends, it should display their score and give the user the ability to save their initials and their score
var totalScore = parseInt(localStorage.getItem(totalScore));

if (!isNaN(totalScore)) {
    document.getElementById("highscores").textContent = "Total Score: " + totalScore;
}

function goBack() {
    window.location.href = "index.html";
} 
// function to clear high scores
function clearHighScores() {
    localStorage.clear(); // Clear all data in localStorage
    // Clear the highscores list by setting it to an empty string
    highScores.innerHTML = "";
  }
  
  var clearScoresBtn = document.querySelector("#clear");
  
  // Event listener for the "Clear Highscores" button
  clearScoresBtn.addEventListener("click", clearHighScores);