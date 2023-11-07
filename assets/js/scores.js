// check to make sure that js is connected to highscores.html
console.log("scores"); 


// When the game ends, it should display their score and give the user the ability to save their initials and their score
var totalScore = parseInt(localStorage.getItem("totalScore"));

if (totalScore !== null) {
    document.getElementById("highscores").textContent = "Total Score: " + totalScore;
}

function goBack() {
    window.location.href = "index.html";
} 