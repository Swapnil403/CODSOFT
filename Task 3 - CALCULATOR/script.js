const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
