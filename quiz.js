// calculator.js
document.addEventListener("DOMContentLoaded", () => {
  // Helper: read an input value and convert to a number (default 0 for empty/invalid)
  const getNumberValue = (id) => {
    const raw = document.getElementById(id).value;
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  // Arithmetic functions
  function add(a, b) { return a + b; }
  function subtract(a, b) { return a - b; }
  function multiply(a, b) { return a * b; }
  function divide(a, b) {
    // return null to signal "cannot divide by zero"
    if (b === 0) return null;
    return a / b;
  }

  // Result element where we'll show the answer
  const resultSpan = document.getElementById("calculation-result");

  // Utility to display result or error
  const showResult = (value, isError = false) => {
    resultSpan.textContent = value === null ? "" : String(value);
    if (isError) {
      // red for errors
      resultSpan.style.color = "#dc3545";
    } else {
      // reset color to default for valid results
      resultSpan.style.color = "";
    }
  };

  // Wire up buttons with event listeners
  document.getElementById("add").addEventListener("click", () => {
    const n1 = getNumberValue("number1");
    const n2 = getNumberValue("number2");
    showResult(add(n1, n2));
  });

  document.getElementById("subtract").addEventListener("click", () => {
    const n1 = getNumberValue("number1");
    const n2 = getNumberValue("number2");
    showResult(subtract(n1, n2));
  });

  document.getElementById("multiply").addEventListener("click", () => {
    const n1 = getNumberValue("number1");
    const n2 = getNumberValue("number2");
    showResult(multiply(n1, n2));
  });

  document.getElementById("divide").addEventListener("click", () => {
    const n1 = getNumberValue("number1");
    const n2 = getNumberValue("number2");
    const result = divide(n1, n2);
    if (result === null) {
      showResult("Error: Cannot divide by zero", true);
    } else {
      showResult(result);
    }
  });

  // Optional: clear result when user focuses an input (small nicety)
  ["number1", "number2"].forEach((id) => {
    document.getElementById(id).addEventListener("focus", () => showResult("", false));
  });
});
