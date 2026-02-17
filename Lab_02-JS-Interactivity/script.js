// Store questions in separate variables
var question1 = "1. What is the capital of France?";
var question2 = "2. What is 10 + 5?";
var question3 = "3. Which language is used for web styling?";
var question4 = "4. What does JS stand for?";
var question5 = "5. Which planet is known as the Red Planet?";

// Store answers in separate variables
var answer1 = "paris";
var answer2 = "15";
var answer3 = "css";
var answer4 = "javascript";
var answer5 = "mars";

// Display questions using DOM
document.getElementById("q1").innerText = question1;
document.getElementById("q2").innerText = question2;
document.getElementById("q3").innerText = question3;
document.getElementById("q4").innerText = question4;
document.getElementById("q5").innerText = question5;

// Function to check individual answer
function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer.toLowerCase() === correctAnswer;
}

// Function to calculate total score
function checkQuiz() {
    var score = 0;

    var user1 = document.getElementById("a1").value;
    var user2 = document.getElementById("a2").value;
    var user3 = document.getElementById("a3").value;
    var user4 = document.getElementById("a4").value;
    var user5 = document.getElementById("a5").value;

    if (checkAnswer(user1, answer1)) score++;
    if (checkAnswer(user2, answer2)) score++;
    if (checkAnswer(user3, answer3)) score++;
    if (checkAnswer(user4, answer4)) score++;
    if (checkAnswer(user5, answer5)) score++;

    var message;

    if (score === 5) {
        message = "Excellent! Full Marks 🎉";
    } else if (score >= 3) {
        message = "Good Job 👍";
    } else {
        message = "Keep Practicing 💪";
    }

    document.getElementById("result").innerHTML =
        "Your Score: " + score + "/5 <br>" + message;
}

// Reset function
function resetQuiz() {
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("a5").value = "";
    document.getElementById("result").innerHTML = "";
}

