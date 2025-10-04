// quiz.js
document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const options = document.querySelectorAll(".option");
  const feedback = document.getElementById("feedback");

  // Example question
  const currentQuestion = {
    text: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correct: "4"
  };

  // Show question text
  question.textContent = currentQuestion.text;

  // Show answer options
  options.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.addEventListener("click", () => {
      if (checkAnswer(btn.textContent, currentQuestion.correct)) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "❌ Wrong!";
        feedback.style.color = "red";
      }
    });
  });
});

// Required function
function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}
