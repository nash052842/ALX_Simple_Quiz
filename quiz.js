document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const options = document.querySelectorAll(".option");
  const feedback = document.getElementById("feedback");

  const currentQuestion = {
    text: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correct: "4"
  };

  question.textContent = currentQuestion.text;

  options.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.addEventListener("click", () => {
      const userAnswer = btn.textContent;
      if (checkAnswer(userAnswer, currentQuestion.correct)) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        checked = true;
        value = userAnswer;
      } else {
        feedback.textContent = "❌ Wrong!";
        feedback.style.color = "red";
        checked = true;
        value = userAnswer;
      }
    });
  });
});

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

let checked = false;
let value = "";
